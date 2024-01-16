'use client';

import * as S from '@/styles/footer.css';
import { HTMLAttributes } from 'react';
import ThemeIcon from './ThemeIcon';

interface Props extends HTMLAttributes<HTMLButtonElement> {
	// theme: 'dark' | 'light';
	theme?: string;
}

const ThemeSwitch = ({ theme = 'dark', ...props }: Props) => {
	return (
		<button {...props} className={S.ThemeBtn}>
			<ThemeIcon theme={theme} className={S.Icon} />
		</button>
	);
};

export default ThemeSwitch;
