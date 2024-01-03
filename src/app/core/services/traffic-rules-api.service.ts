import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
	Answer,
	ParagraphsResponse,
	Response,
	SectionsResponse,
	SubmitAnswerResponse,
	ToggleLearnedResponse,
	TrafficRuleParagraph,
	TrafficRuleQuestionsResponse,
} from '../interfaces';
import { EnvironmentService } from './environment.service';
import { TokensService } from './tokens.service';

@Injectable({
	providedIn: 'root',
})
export class TrafficRulesApiService {
	constructor(
		private http: HttpClient,
		private environmentService: EnvironmentService,
		private tokensService: TokensService,
	) {}

	public toggleSectionLearnedRequest(
		sectionId: string,
	): Observable<Response<ToggleLearnedResponse>> {
		return this.http.post<Response<ToggleLearnedResponse>>(
			`${this.environmentService.environment.apiUrl}/traffic-rule/toggle-learned`,
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
			`${this.environmentService.environment.apiUrl}/traffic-rule/sections`,
			{
				headers: new HttpHeaders({
					Authorization: `Bearer ${this.tokensService.accessToken}`,
				}),
			},
		);
	}

	public getParagraphsBySectionIdRequest(
		sectionId: string,
	): Observable<Response<ParagraphsResponse<TrafficRuleParagraph>>> {
		return this.http.get<Response<ParagraphsResponse<TrafficRuleParagraph>>>(
			`${this.environmentService.environment.apiUrl}/traffic-rule/rules`,
			{
				params: { sectionId },
				headers: new HttpHeaders({
					Authorization: `Bearer ${this.tokensService.accessToken}`,
				}),
			},
		);
	}

	public getQuestionsRequest(): Observable<
		Response<TrafficRuleQuestionsResponse>
	> {
		return this.http.get<Response<TrafficRuleQuestionsResponse>>(
			`${this.environmentService.environment.apiUrl}/test/road-rules/questions`,
		);
	}

	public submitAnswersRequest(
		answers: Answer[],
	): Observable<Response<SubmitAnswerResponse[]>> {
		return this.http.post<Response<SubmitAnswerResponse[]>>(
			`${this.environmentService.environment.apiUrl}/test/road-rules/submit-answers`,
			{ answers },
		);
	}
}
