import { styled } from 'styled-components';
import UseInput from '../screens/UseInput';
import UseTabs from '../screens/UseTabs';
import UseTitle from '../screens/UseTitle';
import UseClick from '../screens/UseClick';
import UseConfirm from '../screens/UseConfirm';
import UsePreventLeave from '../screens/UsePreventLeave';
import UseBeforeLeave from '../screens/UseBeforeLeave';
import UseFadeIn from '../screens/UseFadeIn';
import UseNetwork from '../screens/UseNetwork';
import UseScroll from '../screens/UseScroll';
import UseFullscreen from '../screens/UseFullscreen';
import UseNoti from '../screens/UseNoti';
import UseAxios from '../screens/UseAxios';

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
		case 'useConfirm':
			return <UseConfirm />;
		case 'usePreventLeave':
			return <UsePreventLeave />;
		case 'useBeforeLeave':
			return <UseBeforeLeave />;
		case 'useFadeIn':
			return <UseFadeIn />;
		case 'useNetwork':
			return <UseNetwork />;
		case 'useScroll':
			return <UseScroll />;
		case 'useFullscreen':
			return <UseFullscreen />;
		case 'useNotification':
			return <UseNoti />;
		case 'useAxios':
			return <UseAxios />;
		default:
			return null;
	}
};
