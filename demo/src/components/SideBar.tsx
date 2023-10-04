import { useState } from 'react';
import * as S from '../styles/sideBar.css';

const listItem = ['useCoords', 'useIntersection', 'useForm'];

const SideBar = () => {
	const [selected, setSelected] = useState('');
	const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
		const {
			currentTarget: { textContent },
		} = e;
		console.log(textContent);
		textContent && setSelected(textContent);
	};

	return (
		<aside className={S.sideBarWrapper}>
			<h1 className={S.sideBarTitle}>su-hooks</h1>
			<ul>
				{listItem.map((item, index) => (
					<li
						className={`${S.sideBarList}${
							selected === item ? ' selected' : ''
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
