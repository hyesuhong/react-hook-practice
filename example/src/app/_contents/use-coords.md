---
title: useCoords
slug: use-coords
---

Get user's current location information, such as longitude, by using the Geolocation API.

### Installation

```shell
npm i @su-hooks/use-coords
```

### Returns

| Name        | Type     | Default | Description                                                                                                                                                                                        |
| ----------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| loading     | Boolean  | false   | A boolean representing if the Geolocation API loading.                                                                                                                                             |
| coords      | Object   | null    | This has latitude and longitude information.                                                                                                                                                       |
| error       | Object   | null    | An object representing error code and error message. If you want the error code's meaning, get information from [here](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError). |
| getPosition | Function | null    | Function wrapped around the Geolocation API's getCurrentPosition function logic.                                                                                                                   |

### Preview

```tsx
import useCoords from '@su-hooks/use-coords';

export default function App() {
	const { coords, loading, error, getPosition } = useCoords();

	return (
		<div className='App'>
			<button onClick={getPosition}>Click Me!</button>
			{error ? (
				<>
					<p>error code: {error.code}</p>
					<p>error message: {error.message}</p>
				</>
			) : (
				<>
					<p>
						{loading ? 'loading...' : coords ? 'done!' : 'click button first'}
					</p>
					{coords && (
						<>
							<p>lat: {coords.latitude}</p>
							<p>lon: {coords.longitude}</p>
						</>
					)}
				</>
			)}
		</div>
	);
}
```
