import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';
import { UserAction } from '../../models/user-action.model';

/**
 * @description Displays the data provided as a table (Dumb component - Data driven)
 */
@Component({
	selector: 'user-table',
	templateUrl: 'table.component.html',
	styleUrls: ['./table.component.scss']
})

export class TableComponent {
	@Input() data: User[] = [];
	@Output() action: EventEmitter<UserAction> = new EventEmitter();
	@Input() displayedColumns: string[] = [];

	performAction = (action: 'edit' | 'delete', user: User) => this.action.emit({ action, user });
}