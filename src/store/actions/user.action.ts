import { USER_ACTION_TYPES } from '../../app/core/enums';
import { UserData } from '../../app/core/interfaces';

export class SetUserData {
	static readonly type: USER_ACTION_TYPES.SET_DATA = USER_ACTION_TYPES.SET_DATA;

	constructor(public userData: UserData) {}
}

export class GetUserData {
	static readonly type: USER_ACTION_TYPES.GET_DATA = USER_ACTION_TYPES.GET_DATA;
}
