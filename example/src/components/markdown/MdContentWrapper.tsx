interface Props {
	children?: React.ReactNode;
	className?: string;
}

const MdContentWrapper = ({ children, className }: Props) => {
	const basicClass = 'mt-20 mb-40';
	const totalClass = className ? `${basicClass} ${className}` : basicClass;
	return <div className={totalClass}>{children}</div>;
};

export default MdContentWrapper;
