import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from "../models";

@Injectable({
	providedIn: 'root'
})
export class FirebaseService {
	private collectionId: string = environment.firebaseConfig.collectionId;

	constructor(private store: AngularFirestore) { }
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

	postUser(userInfo: User) {
		if (userInfo.id) {
			this.store.collection(this.collectionId).doc(userInfo.id).update(userInfo);
		} else {
			this.store.collection(this.collectionId).add(userInfo);
		}
	}

	deleteUser(userId: string) {
		this.store.collection(this.collectionId).doc(userId).delete();
	}

}