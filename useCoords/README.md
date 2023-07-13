# @su-hooks/use-coords

React hook to get user's current coordinates

## Installation

#### npm

`npm i @su-hooks/use-coords`

## Usage

```javascript
import React from "react";
import useCoords from "@su-hooks/use-coords";

function App() {
	const {coords, loading, error, getPosition} = useCoords();

	return (<div>
		<button onClick={getPosition}>Click Me!</button>
		<p>
			{loading ? 'loading...' : 'done!'}
		</p>
		{coords && (
			<p>lat: {coords.latitude}</p>
			<p>lon: {coords.longitude}</p>
		)}
		{error && (
			<p>error code: {error.code}</p>
			<p>error message: {error.message}</p>
		)}
	</div>)
}
```

### Returns

| Return value | Type     | Description                                                                                                                                                                                        | Default value |
| ------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| loading      | Boolean  | A boolean representing if the Geolocation API loading.                                                                                                                                             | false         |
| error        | Object   | An object representing error code and error message. If you want the error code's meaning, get information from [here](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError). | null          |
| coords       | Object   | This has latitude and longitude information.                                                                                                                                                       | null          |
| getPosition  | function | Function wrapped around the Geolocation API's getCurrentPosition function logic.                                                                                                                   | null          |
