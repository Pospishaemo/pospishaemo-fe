import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MODAL_IDS } from '../../../../core/enums';
import { AuthorizationService } from '../../../../core/services/authorization.service';

@Component({
	selector: 'app-registration-modal',
	standalone: true,
	imports: [CommonModule, NgxSmartModalModule, FormsModule, ReactiveFormsModule],
	templateUrl: './registration-modal.component.html',
	styleUrl: './registration-modal.component.scss',
})
export class RegistrationModalComponent {
	protected readonly MODAL_IDS = MODAL_IDS;
  public readonly passwordMinLength = 8

  constructor(private authorizationService: AuthorizationService) {
  }

	public registrationForm: FormGroup<any> = new FormGroup<any>({
		email: new FormControl('', [
			Validators.email,
			Validators.required,
		]),
		password: new FormControl('', [
			Validators.minLength(8),
		]),
		username: new FormControl('', [
      Validators.required,
			Validators.minLength(2),
			Validators.maxLength(32),
		]),
	});


  onSubmit() {
    this.authorizationService.registration(this.registrationForm.value)
  }
}
