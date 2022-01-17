import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from "../models";

/**
 * @description Service that interacts with Firebase
 */
@Injectable({
	providedIn: 'root'
})
export class FirebaseService {
	private collectionId: string = environment.firebaseConfig.collectionId;

	constructor(private store: AngularFirestore) { }

	/**
	 * @description Retrieves the list of all users available in the collection
	 * @returns Observable array of User objects
	 */
	getAll(): Observable<User[]> {
		return this.store.collection(this.collectionId).snapshotChanges().pipe(
			map((response) => {
				return response.map(item => {
					let _ = item.payload.doc.data() as Object;
					let resp = Object.assign(new User(), { ..._, id: item.payload.doc.id })
					return resp;
				});
			})
		);
	}

	/**
	 * @description Performs Update or Create actions on the collection depending on the user info provided.
	 * Will update the user information if userInfo parameter has id in it or else will create the user record in the collection.
	 * @param userInfo User data object that has the user details.
	 */
	postUser(userInfo: User) {
		if (userInfo.id) {
			this.store.collection(this.collectionId).doc(userInfo.id).update(userInfo);
		} else {
			this.store.collection(this.collectionId).add(userInfo);
		}
	}

	/**
	 * Deletes a user record in the collection by id
	 * @param userId ID of the user to perform delete action
	 */
	deleteUser(userId: string) {
		this.store.collection(this.collectionId).doc(userId).delete();
	}

}