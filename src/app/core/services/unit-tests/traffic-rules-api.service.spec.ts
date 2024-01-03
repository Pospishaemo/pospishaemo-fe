import { TestBed } from '@angular/core/testing';

import { TrafficRulesApiService } from '../traffic-rules-api.service';

describe('TrafficRulesApiService', () => {
	let service: TrafficRulesApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TrafficRulesApiService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
