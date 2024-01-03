import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { UserData } from '../../app/core/interfaces';
import { GetUserData, SetUserData } from '../actions/user.action';

@State<UserData>({
	name: 'user',
	defaults: {} as UserData,
})
@Injectable()
export class UserState {
	@Action(SetUserData)
	public setUserData(ctx: StateContext<UserData>, action: SetUserData) {
		ctx.setState({ ...action.userData });
	}

	@Action(GetUserData)
	public getUserData(ctx: StateContext<any>): UserData {
		return ctx.getState().User;
	}
}
