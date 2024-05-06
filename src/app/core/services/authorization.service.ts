import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthorizationApiService } from './authorization-api.service';
import { TokensService } from './tokens.service';
import {
	AuthorizationResponse,
	LoginForm,
	RegistrationForm,
	Response,
	TokensData,
	UserData,
} from '../interfaces';
import { SetUserData } from '../../../store/actions/user.action';
import { LocalStorageService } from './local-storage.service';
import { LOCAL_STORAGE_KEYS } from '../enums';
import { ModalService } from './modal.service';

@Injectable({
	providedIn: 'root',
})
export class AuthorizationService {
	private isLoggedIn$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
		false,
	);

	public get isLoggedIn$(): Observable<boolean> {
		return this.isLoggedIn$$.asObservable();
	}

	private set isLoggedIn(isLoggedIn: boolean) {
		this.isLoggedIn$$.next(isLoggedIn);
	}

	public get isLoggedIn(): boolean {
		return this.isLoggedIn$$.getValue();
	}

	constructor(
		private authorizationApiService: AuthorizationApiService,
		private tokensService: TokensService,
		private localStorageService: LocalStorageService,
		private store: Store,
		private modalService: ModalService,
	) {
		// TODO: Refactor
		this.isLoggedIn = !!this.tokensService.accessToken;

		if (this.isLoggedIn) {
			this.store.dispatch(
				new SetUserData(
					this.localStorageService.getValueByKey(LOCAL_STORAGE_KEYS.USER)!,
				),
			);
		}
		// TODO: Refactor
	}

	login(userData: LoginForm) {
		this.authorizationApiService.loginRequest(userData).subscribe({
			next: (response: Response<AuthorizationResponse>) => {
				if (response.success) {
					this.saveTokens(response.data.tokens);
					this.store.dispatch(new SetUserData(response.data.user));

					this.isLoggedIn = true;
					this.modalService.closeAll();
				}
			},
		});
	}

  refreshUserData() {
    this.authorizationApiService.refreshUserDataRequest().subscribe({
      next: (response: any) => {
        console.log(response.data);
        if (response.success) {
          this.store.dispatch(new SetUserData(response.data));
          this.modalService.closeAll();
        }
      },
    })
  }

	registration(userData: RegistrationForm) {
		this.authorizationApiService.registrationRequest(userData).subscribe({
			next: (response: Response<AuthorizationResponse>) => {
				if (response.success) {
					this.saveTokens(response.data.tokens);
					this.store.dispatch(new SetUserData(response.data.user));

					this.isLoggedIn = true;
          this.modalService.closeAll();
				}
			},
		});
	}

	refreshToken() {
		const refreshToken: string | undefined = this.tokensService.refreshToken;

		if (!refreshToken) {
			return;
		}

		this.authorizationApiService.refreshTokenRequest(refreshToken).subscribe({
			next: (response: Response<TokensData>) => {
				if (response.success) {
					this.saveTokens(response.data);

					this.isLoggedIn = true;
				}
			},
		});
	}

	logout() {
		const refreshToken: string | undefined = this.tokensService.refreshToken;

		if (!refreshToken) {
			return;
		}

		this.authorizationApiService.logoutRequest(refreshToken).subscribe({
			next: (response: Response<{}>) => {
				if (response.success) {
					this.resetTokens();
					this.store.dispatch(new SetUserData({} as UserData));

					this.isLoggedIn = false;
				}
			},
		});
	}

	private saveTokens(tokens: TokensData) {
		this.tokensService.accessToken = tokens.accessToken;
		this.tokensService.refreshToken = tokens.refreshToken;
	}

	private resetTokens() {
		this.tokensService.accessToken = '';
		this.tokensService.refreshToken = '';
	}
}
