import useAxios from '../hooks/useAxios';

export default function UseAxios() {
	const { loading, error, data, refetch } = useAxios({
		url: 'https://yts.mx/api/v2/list_movies.json',
	});
	return (
		<div>
			<button onClick={refetch}>refetch</button>
			<h3>{loading ? 'Loading...' : 'Done'}</h3>
			<p>{data && data.status}</p>
		</div>
	);
}
