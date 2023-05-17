export const useConfirm = (
	message: string = '',
	onConfirm: Function,
	onCancel?: Function
) => {
	const confirmAction = () => {
		if (window.confirm(message)) {
			onConfirm();
		} else {
			onCancel && onCancel();
		}
	};
	return confirmAction;
};
