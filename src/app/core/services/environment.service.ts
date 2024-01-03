import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.local';
import { Environment } from '../interfaces';

@Injectable({
	providedIn: 'root',
})
export class EnvironmentService {
	public environment: Environment = environment;

	constructor() {}
}
