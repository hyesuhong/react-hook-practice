import { useState } from 'react';

export interface IUseCoords {
	latitude: number;
	longitude: number;
}

export interface ICoordsError {
	code: number;
	message: string;
}

export function useCoords() {
	const [loading, setLoading] = useState<boolean | null>(null);
	const [coords, setCoords] = useState<IUseCoords | null>(null);
	const [error, setError] = useState<ICoordsError | null>(null);

	const onSuccess = (success: GeolocationPosition) => {
		setCoords({
			latitude: success.coords.latitude,
			longitude: success.coords.longitude,
		});
		setLoading(false);
		setError(null);
	};

	const onError = (error: GeolocationPositionError) => {
		setLoading(false);
		setCoords(null);
		setError(error);
	};

	const getPosition = () => {
		setLoading(true);
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	};

	return { loading, coords, error, getPosition };
}
