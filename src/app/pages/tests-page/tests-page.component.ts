import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficRulesApiService } from '../../core/services/traffic-rules-api.service';
import {
	Answer,
	QuestionResponse,
	Response,
	SubmitAnswerResponse,
	TrafficRuleQuestionsResponse,
} from '../../core/interfaces';

@Component({
	selector: 'app-tests-page',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './tests-page.component.html',
	styleUrl: './tests-page.component.scss',
})
export class TestsPageComponent implements OnInit {
	public answers: { [key: string]: string } = {};
	public isSubmitted: boolean = false;

	public questions: QuestionResponse[] = [];
	public correctAnswers: { [key: string]: boolean } = {};

	constructor(private trafficRulesApiService: TrafficRulesApiService) {}

	ngOnInit() {
		this.trafficRulesApiService.getQuestionsRequest().subscribe({
			next: (response: Response<TrafficRuleQuestionsResponse>) => {
				this.questions = response.data.questions;
			},
		});
	}

	onVariantChange(testId: string, answerId: string) {
		this.answers[testId] = answerId;
	}

	onSubmit() {
		const answers: Answer[] = Object.entries(this.answers).reduce(
			(acc: Answer[], [testId, answerId]) => {
				acc.push({ id: testId, answerId });
				return acc;
			},
			[],
		);

		this.trafficRulesApiService.submitAnswersRequest(answers).subscribe({
			next: (response: Response<SubmitAnswerResponse[]>) => {
				this.correctAnswers = response.data.reduce(
					(acc: any, result: SubmitAnswerResponse) => {
						acc[result.answerId] = result.isCorrect;
						return acc;
					},
					{},
				);

				this.isSubmitted = true;
			},
		});
	}
}
