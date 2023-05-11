import { useNetwork } from '../hooks/useNetwork';

export default function UseNetwork() {
	const networkChange = (isonline: boolean) => {
		console.log(isonline ? 'we are online' : 'we are offline');
	};
	const isOnline = useNetwork(networkChange);
	return <div>{isOnline ? 'Online' : 'Offline'}</div>;
}
