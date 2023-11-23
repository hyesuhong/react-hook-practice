interface Props {
	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
	children: React.ReactNode;
	className?: string;
}

export default function Text({ type = 'p', children, className = '' }: Props) {
	switch (type) {
		case 'h1':
			return (
				<h1 className={generateClassName([className, 'text-6xl font-bold'])}>
					{children}
				</h1>
			);
		case 'h2':
			return (
				<h2 className={generateClassName([className, 'text-5xl font-bold'])}>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3 className={generateClassName([className, 'text-4xl font-medium'])}>
					{children}
				</h3>
			);
		case 'h4':
			return (
				<h4 className={generateClassName([className, 'text-3xl font-medium'])}>
					{children}
				</h4>
			);
		case 'h5':
			return (
				<h5 className={generateClassName([className, 'text-2xl'])}>
					{children}
				</h5>
			);
		case 'h6':
			return (
				<h6 className={generateClassName([className, 'text-xl'])}>
					{children}
				</h6>
			);
		case 'p':
			return (
				<p className={generateClassName([className, 'text-base'])}>
					{children}
				</p>
			);
		case 'span':
			return <span>{children}</span>;
	}
}

const generateClassName = (className: string[]) => className.join(' ');
