'use client';

import IcoGithub from '@/assets/ico-github.svg';
import * as S from '@/styles/footer.css';
import ThemeSwitch from './theme/ThemeSwitch';
import { useTheme } from 'next-themes';

const Footer = () => {
	const { theme, setTheme } = useTheme();

	const onThemeClick = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else if (theme === 'light') {
			setTheme('dark');
		}
	};

	return (
		<footer className={S.Footer}>
			<ul className={S.FooterNavigation}>
				<li>
					<a href='https://github.com/hyesuhong/su-hooks' target='_blank'>
						<IcoGithub className={S.Icon} />
					</a>
				</li>
				<li>
					<ThemeSwitch theme={theme} onClick={onThemeClick} />
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
