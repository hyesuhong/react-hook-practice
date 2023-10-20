import * as S from '../styles/sideBar.css';
import { useMenu, useMenuDispatch } from '../contexts/MenuContext';
import { useTheme, useThemeDispatch } from '../contexts/ThemeContext';
import IcoGithub from '../assets/ico-github.svg?react';
import ThemeBtn from './theme/Themebtn';

const SideBar = () => {
	const { menu, current } = useMenu();
	const menuDispatch = useMenuDispatch();
	const onTitleClick = () => {
		menuDispatch && menuDispatch({ type: 'RESET' });
	};
	const onMenuClick = (e: React.MouseEvent<HTMLLIElement>) => {
		const {
			currentTarget: { textContent },
		} = e;

		menuDispatch &&
			menuDispatch({ type: 'CHANGE', selected: textContent || '' });
	};

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
			<h1 className={S.sideBarTitle} onClick={onTitleClick}>
				su-hooks
			</h1>
			<ul>
				{menu.map((item, index) => (
					<li
						className={`${S.sideBarList}${
							current === index ? ' selected' : ''
						}`}
						onClick={onMenuClick}
						key={index}
					>
						{item}
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
