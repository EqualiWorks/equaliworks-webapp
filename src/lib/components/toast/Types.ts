export interface ToastOptions {
	message: string;
	autohide?: boolean;
	icon: string;
	type: 'warning' | 'success' | 'error' | 'info';
	callback?: (response: { id: string; status: 'queued' | 'closed' }) => void;
	timeout?: number;
}

export interface Toast extends ToastOptions {
	/** A UUID will be auto-assigned on `.trigger()`. */
	id: string;
}
