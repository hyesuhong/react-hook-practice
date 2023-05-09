import { styled } from 'styled-components';
import UseInput from '../screens/UseInput';
import UseTabs from '../screens/UseTabs';
import UseTitle from '../screens/UseTitle';
import UseClick from '../screens/UseClick';

const Wrapper = styled.main`
	flex: 1;
	padding: 10px;

	& > h2 {
		font-size: 20px;
		font-weight: 500;
		margin-bottom: 40px;
	}
`;

interface IScreenProps {
	title: string;
}

export default function Screen({ title }: IScreenProps) {
	return (
		<Wrapper>
			<h2>{title}</h2>
			{getScreen(title)}
		</Wrapper>
	);
}

const getScreen = (title: string) => {
	switch (title) {
		case 'useInput':
			return <UseInput />;
		case 'useTabs':
			return <UseTabs />;
		case 'useTitle':
			return <UseTitle />;
		case 'useClick':
			return <UseClick />;
		default:
			return null;
	}
};
