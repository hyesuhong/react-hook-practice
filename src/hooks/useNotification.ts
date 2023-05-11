export const useNotification = (
	title: string,
	options?: NotificationOptions
) => {
	if (!('Notification' in window)) {
		console.log('This browser does not support desktop notification');
		return;
	}

	const fireNotification = () => {
		if (Notification.permission !== 'granted') {
			Notification.requestPermission().then((permission) => {
				if (permission === 'granted') {
					new Notification(title, options);
				} else {
					return;
				}
			});
		} else {
			new Notification(title, options);
		}
	};
	return fireNotification;
};
