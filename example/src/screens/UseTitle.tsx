import { useTitle } from '../hooks/useTitle';

export default function UseTitle() {
	const titleUpdator = useTitle('Loading...');

	const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		const { target } = ev;
		const t = target as HTMLFormElement;
		titleUpdator(t.titleInput.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<input type='text' placeholder='Title' name='titleInput' />
			<input type='submit' value='Change!' />
		</form>
	);
}
