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
	const handleIntersection = (entries, observer) => {
		// something...
	};
	const { ref, observer } = useIntersection<HTMLDivElement>({
		handleIntersection,
		rootMargin: { top: '-50%', right: 0, bottom: '-50%', left: 0 },
		thresholds: [0, 1],
	});

	return <div ref={ref}>this is target element</div>;
}
```
