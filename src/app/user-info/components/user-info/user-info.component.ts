import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { AddUserComponent, ConfirmationComponent } from '..';
import { User } from '../../models';
import { UserAction } from '../../models/user-action.model';
import { FirebaseService } from '../../services';
import { UserFormService } from '../../services/user-form.service';

/**
 * @description Container component (Smart) which will interact with services to perform various actions depending on user interaction
 */
@Component({
	selector: 'app-user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnDestroy {
	data$: Observable<User[]>;
	displayedColumns: string[] = ['index', 'name', 'designation', 'location', 'isWFH', 'joinedOn', 'edit', 'delete'];
	private userForm: FormGroup;
	private dialogRef: MatDialogRef<AddUserComponent>;
	private confirmationRef: MatDialogRef<ConfirmationComponent>;
	private subs: Subscription[] = [];

	constructor(private firebaseService: FirebaseService, formService: UserFormService, private dialog: MatDialog) {
		this.data$ = firebaseService.getAll();
		this.userForm = formService.createUserFormGroup();
	}

	captureAction(data: UserAction) {
		if (data.action === 'delete' && data.user.id) {
			this.confirmationRef = this.dialog.open(ConfirmationComponent, {
				panelClass: 'antiquewhite-background'
			});
			this.subs.push(this.confirmationRef.afterClosed().subscribe(confirm => {
				if (confirm && data.user.id) {
					this.firebaseService.deleteUser(data.user.id);
				}
			}));
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
			},
			panelClass: 'antiquewhite-background'
		});

		this.subs.push(this.dialogRef.afterClosed().subscribe(save => {
			if (save && this.userForm.dirty) {
				let _joinedOn = this.userForm.value.joinedOn;
				this.firebaseService.postUser({ ...this.userForm.value, joinedOn: _joinedOn.getFullYear() + "-" + (_joinedOn.getMonth() + 1) + "-" + _joinedOn.getDate() });
			}
		}));
	}

	ngOnDestroy(): void {
		this.subs?.forEach(sub => sub.unsubscribe());
	}
}
