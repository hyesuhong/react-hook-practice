---
title: useIntersection
slug: use-intersection
description: React hook to use Intersection Observer API.
---

### Installation

```shell
npm i @su-hooks/use-intersection
```

### Parameters

| Name               | Type                 | Required | Default            |
| ------------------ | -------------------- | -------- | ------------------ |
| root               | HTMLElement          | ✕        | browser's viewport |
| rootMargin         | <string \| number>[] | ✕        | 0                  |
| thresholds         | number \| number[]   | ✕        | 0                  |
| handleIntersection | Function             | ○        | null               |

### Returns

| Name | Type      | Description                    |
| ---- | --------- | ------------------------------ |
| ref  | RefObject | Intersection Observer's target |

### Preview

<iframe src="https://codesandbox.io/embed/dk355m?view=preview&module=%2Fsrc%2FApp.tsx&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useIntersection-ex"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

```tsx
import useIntersection from '@su-hooks/use-intersection';
import './styles.css';

export default function App() {
	const ref = useIntersection<HTMLDivElement>({
		callbackIntersection: (entries) => {
			entries.forEach((entry) => {
				let box = entry.target;
				let visiblePct = `${Math.floor(entry.intersectionRatio * 100)}%`;

				box.querySelector('.topLeft').innerHTML = visiblePct;
				box.querySelector('.topRight').innerHTML = visiblePct;
				box.querySelector('.bottomLeft').innerHTML = visiblePct;
				box.querySelector('.bottomRight').innerHTML = visiblePct;
			});
		},
		thresholds: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
	});

	return (
		<div className='App'>
			<h1>Scroll...</h1>
			<div className='sample' ref={ref}>
				<p className='label topLeft'></p>
				<p className='label topRight'></p>
				<p className='label bottomLeft'></p>
				<p className='label bottomRight'></p>
			</div>
		</div>
	);
}
```
