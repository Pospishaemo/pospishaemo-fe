import { TestBed } from '@angular/core/testing';

import { RoadSignsApiService } from '../road-signs-api.service';

describe('RoadSignsApiService', () => {
	let service: RoadSignsApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(RoadSignsApiService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
