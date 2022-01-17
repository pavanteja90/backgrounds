import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddUserComponent, ConfirmationComponent } from '..';
import { User } from '../../models';
import { UserAction } from '../../models/user-action.model';
import { FirebaseService } from '../../services';
import { UserFormService } from '../../services/user-form.service';

@Component({
	selector: 'app-user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
	data$: Observable<User[]>;
	userForm: FormGroup;
	dialogRef: MatDialogRef<AddUserComponent>;
	confirmationRef: MatDialogRef<ConfirmationComponent>;

	constructor(private firebaseService: FirebaseService, formService: UserFormService, private dialog: MatDialog) {
		this.data$ = firebaseService.getAll();
		this.userForm = formService.createUserFormGroup();
	}

	captureAction(data: UserAction) {
		if (data.action === 'delete' && data.user.id) {
			this.confirmationRef = this.dialog.open(ConfirmationComponent);
			this.confirmationRef.afterClosed().subscribe(confirm => {
				if (confirm && data.user.id) {
					this.firebaseService.deleteUser(data.user.id);
				}
			});
		} else {
			this.addUser(data.user);
		}
	}

	addUser = (user?: User) => {
		this.userForm.reset();
		if (user) {
			this.userForm.patchValue({ ...user, joinedOn: new Date(user.joinedOn) });
		}

		this.dialogRef = this.dialog.open(AddUserComponent, {
			data: {
				form: this.userForm
			}
		});

		this.dialogRef.afterClosed().subscribe(save => {
			if (save && this.userForm.dirty) {
				let _joinedOn = this.userForm.value.joinedOn;
				this.firebaseService.postUser({ ...this.userForm.value, joinedOn: _joinedOn.getFullYear() + "-" + (_joinedOn.getMonth() + 1) + "-" + _joinedOn.getDate() });
			}
		});
	}
}
