import { useFadeIn } from '../hooks/useFadeIn';

export default function UseFadeIn() {
	const el = useFadeIn<HTMLDivElement>(5, 3);
	return <div {...el}>😇</div>;
}
