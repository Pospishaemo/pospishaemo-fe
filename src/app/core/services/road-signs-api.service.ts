import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokensService } from './tokens.service';
import { EnvironmentService } from './environment.service';
import {
	ToggleLearnedResponse,
	Response,
	ParagraphsResponse,
	TrafficRuleParagraph,
	SectionsResponse,
	RoadSignParagraph,
} from '../interfaces';

@Injectable({
	providedIn: 'root',
})
export class RoadSignsApiService {
	constructor(
		private http: HttpClient,
		private environmentService: EnvironmentService,
		private tokensService: TokensService,
	) {}

	public toggleSectionLearnedRequest(
		sectionId: string,
	): Observable<Response<ToggleLearnedResponse>> {
		return this.http.post<Response<ToggleLearnedResponse>>(
			`${this.environmentService.environment.apiUrl}/road-sign/toggle-learned`,
			{ sectionId },
			{
				headers: new HttpHeaders({
					Authorization: `Bearer ${this.tokensService.accessToken}`,
				}),
			},
		);
	}

	public getSectionsRequest(): Observable<Response<SectionsResponse>> {
		return this.http.get<Response<SectionsResponse>>(
			`${this.environmentService.environment.apiUrl}/road-sign/sections`,
			{
				headers: new HttpHeaders({
					Authorization: `Bearer ${this.tokensService.accessToken}`,
				}),
			},
		);
	}

	public getParagraphsBySectionIdRequest(
		sectionId: string,
	): Observable<Response<ParagraphsResponse<RoadSignParagraph>>> {
		return this.http.get<Response<ParagraphsResponse<RoadSignParagraph>>>(
			`${this.environmentService.environment.apiUrl}/road-sign/signs`,
			{
				params: { sectionId },
				headers: new HttpHeaders({
					Authorization: `Bearer ${this.tokensService.accessToken}`,
				}),
			},
		);
	}
}
