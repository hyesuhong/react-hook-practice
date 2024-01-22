import * as S from '@/styles/docsMain.css';

interface Props {
	children?: React.ReactNode;
	className?: string;
}

const MdContentWrapper = ({ children, className }: Props) => {
	const basicClass = S.ContentWrapper;
	const totalClass = className ? `${basicClass} ${className}` : basicClass;
	return <div className={totalClass}>{children}</div>;
};

export default MdContentWrapper;
