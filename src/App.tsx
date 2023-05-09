import { createGlobalStyle, styled } from 'styled-components';
import Nav from './components/Nav';
import { useState } from 'react';
import Screen from './components/Screen';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
	  box-sizing: border-box;
  }

  ul li,
  ol li {
    list-style: none;
  }

  img {
    vertical-align: middle;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  body {
    font-family: 'Pretendard Variable', Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }
`;

const Wrapper = styled.div`
	display: flex;
`;

function App() {
	const [menu, setMenu] = useState('');
	return (
		<>
			<GlobalStyles />
			<Wrapper>
				<Nav setMenu={setMenu} />
				<Screen title={menu} />
			</Wrapper>
		</>
	);
}

export default App;
