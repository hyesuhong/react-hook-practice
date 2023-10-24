import * as S from '../styles/sideBar.css';
import { useMenu } from '../contexts/MenuContext';
import { useTheme, useThemeDispatch } from '../contexts/ThemeContext';
import IcoGithub from '../assets/ico-github.svg?react';
import ThemeBtn from './theme/ThemeBtn';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
	const { menu } = useMenu();

	const { theme, system } = useTheme();
	const themeDispatch = useThemeDispatch();
	const onButtonClick = () => {
		themeDispatch &&
			themeDispatch({
				type: 'CHANGE',
				nextTheme: theme === 'light' ? 'dark' : 'light',
			});
	};

	return (
		<aside className={S.sideBarWrapper}>
			<h1 className={S.sideBarTitle}>su-hooks</h1>
			<ul>
				{menu.map((item, index) => (
					<li key={index}>
						<NavLink
							to={`/docs/${item}`}
							className={({ isActive }) =>
								`${S.sideBarList} ${isActive ? 'active' : ''}`
							}
						>
							{item}
						</NavLink>
					</li>
				))}
			</ul>
			<ol className={S.LinkList}>
				<li>
					<a href='https://github.com/hyesuhong/su-hooks' target='_blank'>
						<IcoGithub className={S.Icon} />
					</a>
				</li>
				<li>
					<ThemeBtn onClick={onButtonClick} theme={theme} system={system} />
				</li>
			</ol>
		</aside>
	);
};

export default SideBar;
