import { User } from "./user.model";

/**
 * @description Interface defining the Output response structure of actions performed on the user info table
 */
export interface UserAction {
	action: 'edit' | 'delete';
	user: User;
}