import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { LOCAL_STORAGE_KEYS } from '../enums';

@Injectable({
	providedIn: 'root',
})
export class TokensService {
	constructor(private localStorageService: LocalStorageService) {}

	public get accessToken(): string | undefined {
		return this.localStorageService.getValueByKey(
			LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
		);
	}
	public set accessToken(accessToken: string) {
		this.localStorageService.setValueByKey(
			LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
			accessToken,
		);
	}

	public get refreshToken(): string | undefined {
		return this.localStorageService.getValueByKey(
			LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
		);
	}

	public set refreshToken(refreshToken: string) {
		this.localStorageService.setValueByKey(
			LOCAL_STORAGE_KEYS.REFRESH_TOKEN,
			refreshToken,
		);
	}
}
