import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficRulesApiService } from '../../core/services/traffic-rules-api.service';
import { Response, Section, SectionsResponse } from '../../core/interfaces';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-sections-page',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './sections-page.component.html',
	styleUrl: './sections-page.component.scss',
})
export class SectionsPageComponent implements OnInit {
	public sections: Section[] = [];

	constructor(private trafficRulesApiService: TrafficRulesApiService) {}

	ngOnInit() {
		this.trafficRulesApiService.getSectionsRequest().subscribe({
			next: (response: Response<SectionsResponse>) => {
				this.sections = response.data.sections.sort((sectionA, sectionB) => {
					return sectionA.sectionNumber - sectionB.sectionNumber;
				});
			},
		});
	}
}
