import { styled } from 'styled-components';
import { useScroll } from '../hooks/useScroll';

const Wrapper = styled.div`
	height: 200vh;

	h3 {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
	}
`;

export default function UseScroll() {
	const { y } = useScroll();
	return (
		<Wrapper>
			<h3 style={{ color: y > 500 ? 'red' : 'blue' }}>Hello</h3>
		</Wrapper>
	);
}
