import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { AuthorizationService } from '../../../core/services/authorization.service';
import { UserData } from '../../../core/interfaces';
import { GetUserData, SetUserData } from '../../../../store/actions/user.action';
import { ModalService } from '../../../core/services/modal.service';
import { MODAL_IDS } from '../../../core/enums';
import { RegistrationModalComponent } from '../modals/registration-modal/registration-modal.component';
import { LoginModalComponent } from '../modals/login-modal/login-modal.component';
import { UserState } from '../../../../store/state/user.state';

interface MenuItem {
	id: number;
	name: string;
	link: string;
}

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [
		CommonModule,
		RouterLink,
		RegistrationModalComponent,
		LoginModalComponent,
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private COUNT_RULES: number = 34

	private destroy$: Subject<void> = new Subject<void>();
  private countLearnedTrafficRules: number = 0;

	public isLoggedIn: boolean = false;
	public user: UserData = {} as UserData;

	public menu: MenuItem[] = [
		{
			id: 1,
			name: 'ПДР',
			link: 'sections',
		},
		{
			id: 2,
			name: 'Тести',
			link: 'tests',
		},
		{
			id: 3,
			name: 'Контакти',
			link: 'contacts',
		},
	];

	constructor(
		private store: Store,
		private authorizationService: AuthorizationService,
		private modalService: ModalService,
    private actions$: Actions
	) {}

	ngOnInit() {
		this.authorizationService.isLoggedIn$
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: (isLoggedIn: boolean) => {
					this.isLoggedIn = isLoggedIn;

					this.store.dispatch(new GetUserData()).subscribe({
						next: (data: any) => {
							this.user = data.user;
              this.countLearnedTrafficRules = data.user.learnedTrafficRules.length
						},
					});
				},
			});

    this.actions$
      .pipe(takeUntil(this.destroy$))
      .pipe(ofActionSuccessful(SetUserData))
      .subscribe({
        next: (data) => {
          this.countLearnedTrafficRules = data.userData.learnedTrafficRules.length
        }
      })
	}
	onLoginClick() {
		this.modalService.openModalByModalId(MODAL_IDS.LOGIN);
	}

  onRegistrationClick() {
    this.modalService.openModalByModalId(MODAL_IDS.REGISTRATION)
  }

  get countPercent() {
    return Math.round((this.countLearnedTrafficRules / this.COUNT_RULES * 100))
  }

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
