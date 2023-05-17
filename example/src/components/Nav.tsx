import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
	position: sticky;
	top: 0;

	height: 100vh;
	border-right: 1px solid #eee;

	padding: 10px 0;

	h1 {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 30px;
		padding: 0 10px;
		text-transform: capitalize;
	}
`;

const LCategory = styled.li<{ maxheight: number }>`
	p {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;

		height: 40px;
		padding: 0 10px;
		cursor: pointer;
	}

	p::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #eee;
		opacity: 0;
		transition: opacity 0.3s;
		z-index: -1;
	}

	p::after {
		content: '';
		flex: 0 0 6px;
		height: 6px;
		border-top: 2px solid #333;
		border-left: 2px solid #333;
		transform: rotate(225deg);
		transition: transform 0.3s;
	}

	p:hover::before {
		opacity: 50%;
	}

	ol {
		max-height: 0;
		overflow: hidden;
		transition: all 0.3s;
		padding: 0 15px;
	}

	&.open {
		p {
			border-bottom: 1px solid #eee;
		}

		p::before {
			opacity: 1;
		}

		p::after {
			transform: rotate(45deg);
		}

		ol {
			max-height: ${(props) => props.maxheight}px;
		}
	}
`;

const SCategory = styled.li`
	font-size: 14px;
	line-height: 30px;
	color: #ddd;
	cursor: pointer;
	transition: color 0.3s;

	&:hover {
		color: #333;
	}

	&.current {
		color: #00e07b;
	}
`;

interface INavProps {
	setMenu: React.Dispatch<React.SetStateAction<string>>;
}

function Nav({ setMenu }: INavProps) {
	const listClick = (ev: React.MouseEvent<HTMLLIElement>) => {
		const target = ev.target as Element;
		if (target.tagName !== 'P') return;

		if (ev.currentTarget.classList.contains('open')) {
			ev.currentTarget.classList.remove('open');
		} else {
			ev.currentTarget.classList.add('open');
		}
	};

	const cateClick = (ev: React.MouseEvent<HTMLLIElement>) => {
		const { target } = ev;
		const t = target as Element;
		setMenu(t.textContent || '');

		const listParent = t.parentElement?.parentElement?.parentElement;
		const allList = listParent?.querySelectorAll('ol li');

		allList?.forEach((list) => list.classList.remove('current'));

		t.classList.add('current');
	};

	return (
		<NavWrapper>
			<h1>hook practise</h1>
			<ul>
				{menu.map(({ large, small }, i) => (
					<LCategory onClick={listClick} maxheight={small.length * 30} key={i}>
						<p>{large}</p>
						<ol>
							{small.map((sCate, index) => (
								<SCategory key={index} onClick={cateClick}>
									{sCate}
								</SCategory>
							))}
						</ol>
					</LCategory>
				))}
			</ul>
		</NavWrapper>
	);
}

export default Nav;

const menu = [
	{
		large: 'useState',
		small: ['useInput', 'useTabs'],
	},
	{
		large: 'useEffect',
		small: [
			'useTitle',
			'useClick',
			'useConfirm',
			'usePreventLeave',
			'useBeforeLeave',
			'useFadeIn',
			'useNetwork',
			'useScroll',
			'useFullscreen',
			'useNotification',
			'useAxios',
		],
	},
];
