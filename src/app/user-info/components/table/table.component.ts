import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';
import { UserAction } from '../../models/user-action.model';

@Component({
	selector: 'user-table',
	templateUrl: 'table.component.html',
	styleUrls: ['./table.component.scss']
})

export class TableComponent {
	@Input() data: User[] = [];
	@Output() action: EventEmitter<UserAction> = new EventEmitter();
	displayedColumns: string[] = ['index', 'name', 'designation', 'location', 'isWFH', 'joinedOn', 'edit', 'delete'];

	performAction = (action: 'edit' | 'delete', user: User) => this.action.emit({ action, user });
}