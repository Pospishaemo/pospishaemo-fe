import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';
import {
	AuthorizationResponse,
	LoginForm,
	RegistrationForm,
	Response,
	TokensData,
} from '../interfaces';
import { TokensService } from './tokens.service';

@Injectable({
	providedIn: 'root',
})
export class AuthorizationApiService {
	constructor(
		private environmentService: EnvironmentService,
		private http: HttpClient,
    private tokensService: TokensService
	) {}

	loginRequest(
		userData: LoginForm,
	): Observable<Response<AuthorizationResponse>> {
		return this.http.post<Response<AuthorizationResponse>>(
			`${this.environmentService.environment.apiUrl}/auth/login`,
			userData,
		);
	}

  refreshUserDataRequest() {
    return this.http.get<Response<AuthorizationResponse>>(
      `${this.environmentService.environment.apiUrl}/auth/user-data`,
      {
        headers: new HttpHeaders().set('authorization', `Bearer ${this.tokensService.accessToken!}`)
      }
    );
  }

	registrationRequest(
		userData: RegistrationForm,
	): Observable<Response<AuthorizationResponse>> {
		return this.http.post<Response<AuthorizationResponse>>(
			`${this.environmentService.environment.apiUrl}/auth/registration`,
			userData,
		);
	}

	refreshTokenRequest(refreshToken: string): Observable<Response<TokensData>> {
		return this.http.post<Response<TokensData>>(
			`${this.environmentService.environment.apiUrl}/auth/refresh-token`,
			{
				refreshToken,
			},
		);
	}

	logoutRequest(refreshToken: string): Observable<Response<{}>> {
		return this.http.post<Response<{}>>(
			`${this.environmentService.environment.apiUrl}/auth/logout`,
			{
				refreshToken,
			},
		);
	}
}
