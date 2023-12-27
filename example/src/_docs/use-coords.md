---
title: useCoords
slug: use-coords
description: Get user's current location information, such as longitude, by using the Geolocation API.
---

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

<iframe src="https://codesandbox.io/embed/psy5d9?view=preview&module=%2Fsrc%2FApp.tsx&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useCoords_ex"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

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
