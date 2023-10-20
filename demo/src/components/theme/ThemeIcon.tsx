import { theme } from '../../contexts/ThemeContext';
import IcoLight from '../../assets/ico-sun.svg?react';
import IcoDark from '../../assets/ico-moon.svg?react';
import { HTMLAttributes } from 'react';

interface themeIcon extends HTMLAttributes<SVGAElement> {
	theme: theme;
}

const ThemeIcon = ({ theme, className }: themeIcon) => {
	switch (theme) {
		case 'dark':
			return <IcoDark className={className} />;
		case 'light':
			return <IcoLight className={className} />;
		default:
			<></>;
	}
};

export default ThemeIcon;
