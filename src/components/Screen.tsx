import { styled } from 'styled-components';
import ScreenUseInput from '../screens/ScreenUseInput';
import ScreenUseTabs from '../screens/ScreenUseTabs';

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
			return <ScreenUseInput />;
		case 'useTabs':
			return <ScreenUseTabs />;
		default:
			return null;
	}
};
