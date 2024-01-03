import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MODAL_IDS } from '../../../../core/enums';

@Component({
	selector: 'app-registration-modal',
	standalone: true,
	imports: [CommonModule, NgxSmartModalModule],
	templateUrl: './registration-modal.component.html',
	styleUrl: './registration-modal.component.scss',
})
export class RegistrationModalComponent {
	protected readonly MODAL_IDS = MODAL_IDS;

	public registrationForm: FormGroup<any> = new FormGroup<any>({
		email: new FormControl('', [
			Validators.email,
			Validators.required,
			Validators.requiredTrue,
		]),
		password: new FormControl('', [
			Validators.minLength(8),
			Validators.requiredTrue,
		]),
		username: new FormControl('', [
			Validators.minLength(2),
			Validators.maxLength(32),
			Validators.requiredTrue,
		]),
	});
}
