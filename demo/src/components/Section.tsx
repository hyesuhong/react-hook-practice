import { ReactNode } from 'react';
import * as S from '../styles/main.css';

type section = {
	title: string;
	children?: ReactNode;
};

const Section = ({ title, children }: section) => {
	return (
		<section className={S.Section}>
			<h3 className={S.SubTitle}>{title}</h3>
			{children && <div className={S.ContentWrapper}>{children}</div>}
		</section>
	);
};

export default Section;
