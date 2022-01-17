/**
 * @description Class defining a User record data structure
 */
export class User {
	/**
	 * @description Unique ID used to identify a record in Firebase collection
	 */
	id?: string;
	/**
	 * @description Designation of the user - Web Developer/Tester/Web Designer
	 */
	designation: string;
	/**
	 * @description Identifies whether the user is working from home
	 */
	isWFH: boolean;
	/**
	 * @description Joining Date of the user
	 */
	joinedOn: string;
	/**
	 * @description Location of the user
	 */
	location: string;
	/**
	 * @description Name of the user
	 */
	name: string;
}