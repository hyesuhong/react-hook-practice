import * as S from '@/styles/text.css';

interface Props {
	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
	children: React.ReactNode;
	className?: string;
}

export default function Text({ type = 'p', children, className = '' }: Props) {
	switch (type) {
		case 'h1':
			return (
				<h1 className={generateClassName([className, S.H1])}>{children}</h1>
			);
		case 'h2':
			return (
				<h2 className={generateClassName([className, S.H2])}>{children}</h2>
			);
		case 'h3':
			return (
				<h3 className={generateClassName([className, S.H3])}>{children}</h3>
			);
		case 'h4':
			return (
				<h4 className={generateClassName([className, S.H4])}>{children}</h4>
			);
		case 'h5':
			return (
				<h5 className={generateClassName([className, S.H5])}>{children}</h5>
			);
		case 'h6':
			return (
				<h6 className={generateClassName([className, S.H6])}>{children}</h6>
			);
		case 'p':
			return <p className={generateClassName([className, S.P])}>{children}</p>;
		case 'span':
			return <span>{children}</span>;
	}
}

const generateClassName = (className: string[]) => className.join(' ');
