import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {
	public getValueByKey<T>(key: string): T | undefined {
		try {
			const data: string | null = localStorage.getItem(key);

			if (!data && data !== '') {
				return undefined;
			}

			return JSON.parse(data);
		} catch (error) {
			console.log('Get local storage item error:', error);
			return undefined;
		}
	}

	public setValueByKey(key: string, value: unknown): unknown {
		try {
			localStorage.setItem(key, JSON.stringify(value));
			return value;
		} catch (error) {
			console.log('Get local storage item error:', error);
			return undefined;
		}
	}
}
