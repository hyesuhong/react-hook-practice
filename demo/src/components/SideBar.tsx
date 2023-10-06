import * as S from '../styles/sideBar.css';
import { useMenu, useMenuDispatch } from '../contexts/MenuContext';
import IcoGithub from '../assets/ico-github.svg?react';

const SideBar = () => {
	const { menu, current } = useMenu();
	const dispatch = useMenuDispatch();
	const onTitleClick = () => {
		dispatch && dispatch({ type: 'RESET' });
	};
	const onMenuClick = (e: React.MouseEvent<HTMLLIElement>) => {
		const {
			currentTarget: { textContent },
		} = e;

		dispatch && dispatch({ type: 'CHANGE', selected: textContent || '' });
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
			</ol>
		</aside>
	);
};

export default SideBar;
