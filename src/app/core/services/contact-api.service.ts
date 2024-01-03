import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { ContactInfoData, Response } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ContactApiService {
	constructor(
		private environmentService: EnvironmentService,
		private http: HttpClient,
	) {}

	contactUsRequest(contactInfo: ContactInfoData): Observable<Response<undefined>> {
		return this.http.post<Response<undefined>>(
			`${this.environmentService.environment.apiUrl}/contact/message`,
			contactInfo,
		);
	}
}
