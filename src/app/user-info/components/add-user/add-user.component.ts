import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'add-user',
	templateUrl: 'add-user.component.html',
	styleUrls: ['add-user.component.scss']
})

export class AddUserComponent {
	maxDate: Date = new Date();

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

	businessDays = (d: Date | null): boolean => {
		const day = (d || new Date()).getDay();
		// Prevent Saturday and Sunday from being selected.
		return day !== 0 && day !== 6;
	};
	log() { console.warn(this.data.form.value); }
}