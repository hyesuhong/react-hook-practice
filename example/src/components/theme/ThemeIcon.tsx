import IcoMoon from '@/assets/ico-moon.svg';
import IcoSun from '@/assets/ico-sun.svg';

interface themeIcon extends React.HTMLAttributes<SVGAElement> {
	// theme: 'light' | 'dark' | 'system';
	theme: string;
}

const ThemeIcon = ({ theme, className }: themeIcon) => {
	switch (theme) {
		case 'dark':
			return <IcoMoon className={className} />;
		case 'light':
			return <IcoSun className={className} />;
		default:
			return <></>;
	}
};

export default ThemeIcon;
