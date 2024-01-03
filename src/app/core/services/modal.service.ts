import { Injectable } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { MODAL_IDS } from '../enums';

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	constructor(private ngxSmartModalService: NgxSmartModalService) {}

	openModalByModalId<T>(modalId: string, options?: T) {
		this.ngxSmartModalService.getModal(modalId).open();
	}

	closeAll() {
		this.ngxSmartModalService.closeAll();
	}
}
