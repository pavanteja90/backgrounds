import { User } from "./user.model";

export interface UserAction {
	action: 'edit' | 'delete';
	user: User;
}