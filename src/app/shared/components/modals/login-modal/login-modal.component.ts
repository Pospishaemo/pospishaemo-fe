import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MODAL_IDS } from '../../../../core/enums';
import { AuthorizationService } from '../../../../core/services/authorization.service';

@Component({
	selector: 'app-login-modal',
	standalone: true,
	imports: [CommonModule, NgxSmartModalModule, ReactiveFormsModule],
	templateUrl: './login-modal.component.html',
	styleUrl: './login-modal.component.scss',
})
export class LoginModalComponent {
	public readonly passwordMinLength: number = 8;
	protected readonly MODAL_IDS = MODAL_IDS;

	public loginForm: FormGroup<any> = new FormGroup<any>({
		email: new FormControl('', [Validators.email, Validators.required]),
		password: new FormControl('', [
			Validators.minLength(this.passwordMinLength),
			Validators.required,
		]),
	});

	constructor(private authorizationService: AuthorizationService) {}

	onSubmit() {
		if (this.loginForm.invalid) {
			return;
		}

		this.authorizationService.login(this.loginForm.value);
	}
}
