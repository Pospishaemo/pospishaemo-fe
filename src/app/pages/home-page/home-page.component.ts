import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Privilege, Response, Review, Service } from '../../core/interfaces';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { ContactApiService } from '../../core/services/contact-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
	public contactForm: FormGroup<any> = new FormGroup<any>({
		fullName: new FormControl('', [Validators.required]),
		contactInfo: new FormControl('', [Validators.required]),
		message: new FormControl('', [Validators.required]),
	});

	constructor(
		private contactApiService: ContactApiService,
		private toastrService: ToastrService,
	) {}

	public services: Service[] = [
		{
			id: 1,
			name: 'AI Тести',
			iconPath: 'assets/icons/ai-logo.svg',
		},
		{
			id: 2,
			name: 'Правила дорожнього руху',
			iconPath: 'assets/icons/rules-logo.svg',
		},
		{
			id: 3,
			name: 'Автошкола',
			iconPath: 'assets/icons/car-logo.svg',
		},
	];

	public privileges: Privilege[] = [
		{
			id: 1,
			title: 'AI Тести',
			description:
				'Миттєве оцінювання знань для майбутніх водіїв. Використовуйте потужний штучний інтелект для ефективної підготовки до водійського екзамену!',
		},
		{
			id: 2,
			title: 'ПДР',
			description:
				'Вивчайте правила дорожнього руху та стежте за власним прогресом для максимально ефективної підготовки до водійського екзамену!',
		},
		{
			id: 3,
			title: 'Автошкола',
			description:
				'Запрошуємо вас до нашої автошколи, де ви зможете не лише вдосконалити свої знання, але й зануритися у світ професійної підготовки до водійського мистецтва.',
		},
	];

	public reviews: Review[] = [
		{
			id: 1,
			username: 'Біллі',
			job: 'Актор',
			text: 'Дуже сподобалась автошкола, особливо вчителі!',
			userAvatar:
				'https://static.nv.ua/shared/system/Article/posters/002/536/573/original/25577cc7ebe171488e4ce076651202ee.jpg',
		},
		{
			id: 2,
			username: 'Раян',
			job: 'Актор',
			text: 'Дуже задоволений досвідом навчання. Інструктори проявили велику терплячість та професіоналізм, надаючи чудову підтримку та відмінну підготовку до водійського екзамену',
			userAvatar:
				'https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2011/9/14/1315997543282/ryan-gosling-in-drive-007.jpg?width=465&dpr=1&s=none',
		},
	];

	onContactSubmit() {
		if (this.contactForm.invalid) {
			this.toastrService.error('Заповніть форму!');
			return;
		}

		this.contactApiService.contactUsRequest(this.contactForm.value).subscribe({
			next: (response: Response<undefined>) => {
				if (response.success) {
					this.toastrService.success('Успішно відправлено!');
					this.contactForm.reset();
				}
			},
		});
	}
}
