export class User {
	id?: string;
	designation: string;
	isWFH: boolean;
	joinedOn: string;
	// _joinedOn: Date;
	// get joinedOn() {
	// 	return this._joinedOn.getDate() + "/" + (this._joinedOn.getMonth() + 1) + "/" + this._joinedOn.getFullYear();
	// }
	// set joinedOn(value: string) {
	// 	this._joinedOn = new Date(value);
	// }
	location: string;
	name: string;
}