import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { routes } from './app.routes';
import { environment } from './core/environments/environment.local';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { UserState } from '../store/state/user.state';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { provideToastr, ToastrComponentlessModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(),
		provideAnimations(),
		provideToastr({ positionClass: 'toast-bottom-right' }),
		importProvidersFrom(
			NgxSmartModalModule.forRoot(),
			NgxsModule.forRoot([UserState], {
				developmentMode: environment.isProduction,
			}),
			NgxsStoragePluginModule.forRoot({
				key: ['user'],
			}),
			NgxsReduxDevtoolsPluginModule.forRoot(),
		),
	],
};
