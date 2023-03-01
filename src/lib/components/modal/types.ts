export interface ModalComponent {
	ref: any;
	props?: Record<string, unknown>;
	slot?: string;
}

export interface ModalOptions {
	type: 'alert' | 'confirm' | 'prompt' | 'component';
	title?: string;
	component?: ModalComponent | string;
	buttonTextCancel?: string;
	buttonTextConfirm?: string;
	buttonTextSubmit?: string;
}
