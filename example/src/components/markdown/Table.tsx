import { Children, ReactNode, isValidElement } from 'react';
import ChildComponent from '../basic/ChildComponent';
import * as S from '@/styles/docsMain.css';

interface Props {
	children: ReactNode;
}

const Table = ({ children }: Props) => {
	return (
		<table className={S.Table}>
			{Children.map<ReactNode, ReactNode>(children, (child, index) => {
				if (isValidElement(child)) {
					const { props, type, key } = child;
					return <ChildComponent type={type} {...props} />;
				}
			})}
		</table>
	);
};

export default Table;
