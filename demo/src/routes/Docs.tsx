import { useParams } from 'react-router-dom';

const Docs = () => {
	const params = useParams();
	return <>{params.hooks}</>;
};

export default Docs;
