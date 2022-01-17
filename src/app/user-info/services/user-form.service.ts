import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class UserFormService {
	constructor(private fb: FormBuilder) { }

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