import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	ParagraphsResponse,
	Response,
	TrafficRuleParagraph,
} from '../../core/interfaces';
import { TrafficRulesApiService } from '../../core/services/traffic-rules-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-traffic-rule-paragraphs-page',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './traffic-rule-paragraphs-page.component.html',
	styleUrl: './traffic-rule-paragraphs-page.component.scss',
})
export class TrafficRuleParagraphsPageComponent implements OnInit {
	paragraphsData: ParagraphsResponse<TrafficRuleParagraph> = undefined as any;

	constructor(
		private trafficRulesApiService: TrafficRulesApiService,
		private route: ActivatedRoute,
	) {}

	ngOnInit() {
		this.route.params.subscribe({
			next: ({ sectionId }) => {
				this.trafficRulesApiService
					.getParagraphsBySectionIdRequest(sectionId)
					.subscribe({
						next: (
							response: Response<ParagraphsResponse<TrafficRuleParagraph>>,
						) => {
							this.paragraphsData = response.data;
						},
					});
			},
		});
	}
}
