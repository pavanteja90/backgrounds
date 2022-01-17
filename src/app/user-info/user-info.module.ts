import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { UserInfoComponent, AddUserComponent, TableComponent, ConfirmationComponent } from './components';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
	declarations: [
		UserInfoComponent,
		TableComponent,
		AddUserComponent,
		ConfirmationComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatIconModule,
		MatTableModule,
		MatFormFieldModule,
		MatInputModule,
		MatDialogModule,
		MatDatepickerModule,
		MatNativeDateModule,
		// MatMomentDateModule,
		MatCheckboxModule
	]
})
export class UserInfoModule { }
