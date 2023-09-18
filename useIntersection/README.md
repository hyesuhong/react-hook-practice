# @su-hooks/use-intersection

React hook to use Intersection API

## Installation

#### npm

`npm i @su-hooks/use-intersection`

## Usage

```typescript
import react from 'react';
import useIntersection from '@su-hooks/use-intersection';

function App() {
	const callbackIntersection = (entries, observer) => {
		// something...
	};
	const ref = useIntersection<HTMLDivElement>({
		callbackIntersection,
		rootMargin: ['-50%', 0],
		thresholds: [0, 1],
	});

	return <div ref={ref}>this is target element</div>;
}
```

### Properties

| Name               | Type                 | Required | Default          |
| ------------------ | -------------------- | :------: | ---------------- |
| root               | HTMLElement          |    ✕     | browser viewport |
| rootMargin         | <string \| number>[] |    ✕     | 0                |
| thresholds         | number \| number[]   |    ✕     | 0                |
| handleIntersection | Function             |    ○     | null             |

<details>
	<summary>root</summary>

- Element used as the viewport. If it is not specified or is `NULL`, default value is browser's viewport.

</details>

<details>
	<summary>rootMargin</summary>
	
	
 - Offsets from the root
 - Type definition

```typescript
type marginType = number | string;
type IntersectionMargin =
	| [marginType]
	| [marginType, marginType]
	| [marginType, marginType, marginType]
	| [marginType, marginType, marginType, marginType];
```

- Margin Array order is same as `CSS margin` order
- If property sent as `number`, the unit is considered `px`.
- If property sent as `string`, the unit must be `px` or `%`.
</details>

<details>
	<summary>thresholds</summary>

- Value representing `percentages` of the target element which are visible.
</details>

<details>
	<summary>callbackIntersection</summary>
	
- When occured intersection, use this handling function
- Type Definition

```typescript
type IntersectionHandler = (
	entries: IntersectionObserverEntry[],
	observer: IntersectionObserver
) => void;
```

- entiries: observer's target element array
</details>

If you want more information of Intersection API, please visit **[here](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)**

### Returns

| Return | Type      | Description                    |
| ------ | --------- | ------------------------------ |
| ref    | RefObject | Intersection Observer's target |
