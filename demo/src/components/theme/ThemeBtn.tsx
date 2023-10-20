import { HTMLAttributes } from 'react';
import { theme } from '../../contexts/ThemeContext';
import * as S from '../../styles/sideBar.css';
import ThemeIcon from './ThemeIcon';

interface themeBtn extends HTMLAttributes<HTMLButtonElement> {
	theme: theme;
	system: theme;
}

const ThemeBtn = ({ theme, system, onClick }: themeBtn) => {
	return (
		<button onClick={onClick} className={S.ThemeBtn}>
			<ThemeIcon
				theme={theme === 'system' ? system : theme}
				className={S.Icon}
			/>
		</button>
	);
};

export default ThemeBtn;
