import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * @description Form creation service that creates all AbstractFormControls required by User Info Module
 */
@Injectable({ providedIn: 'root' })
export class UserFormService {
	constructor(private fb: FormBuilder) { }

	/**
	 * Creates the User form group with parameters identical to User Model
	 * @returns FormGroup with all user form controls
	 */
	createUserFormGroup = (): FormGroup =>
		this.fb.group({
			id: [null],
			name: [null, Validators.required],
			designation: [null, Validators.required],
			location: [null, Validators.required],
			isWFH: [false],
			joinedOn: [null, Validators.required]
		});
}