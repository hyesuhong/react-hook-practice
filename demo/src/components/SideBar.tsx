import * as S from '../styles/sideBar.css';
import { useMenu, useMenuDispatch } from '../contexts/MenuContext';

const SideBar = () => {
	const { menu, current } = useMenu();
	const dispatch = useMenuDispatch();
	const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
		const {
			currentTarget: { textContent },
		} = e;

		dispatch && dispatch({ type: 'CHANGE', selected: textContent || '' });
	};

	return (
		<aside className={S.sideBarWrapper}>
			<h1 className={S.sideBarTitle}>su-hooks</h1>
			<ul>
				{menu.map((item, index) => (
					<li
						className={`${S.sideBarList}${
							current === index ? ' selected' : ''
						}`}
						onClick={onClick}
						key={index}
					>
						{item}
					</li>
				))}
			</ul>
		</aside>
	);
};

export default SideBar;
