import {
	Children,
	JSXElementConstructor,
	PropsWithChildren,
	ReactElement,
	ReactNode,
	ReactPortal,
	cloneElement,
	isValidElement,
} from 'react';
import * as S from '@/styles/docsMain.css';

type Props =
	| ReactPortal
	| ReactElement<unknown, string | JSXElementConstructor<any>>;

const ChildComponent = ({ children, type }: PropsWithChildren<Props>) => {
	switch (type) {
		case 'thead':
			return (
				<thead className={S.Thead}>
					{Children.map<ReactNode, ReactNode>(children, (child, index) => {
						if (isValidElement(child)) {
							const { props, type, key } = child;
							return <ChildComponent type={type} {...props} />;
						}
					})}
				</thead>
			);
		case 'tbody':
			return (
				<tbody className={S.Tbody}>
					{Children.map<ReactNode, ReactNode>(children, (child, index) => {
						if (isValidElement(child)) {
							const { props, type, key } = child;
							return <ChildComponent type={type} {...props} />;
						}
					})}
				</tbody>
			);
		case 'tr':
			return (
				<tr className={S.TbodyRow}>
					{Children.map<ReactNode, ReactNode>(children, (child, index) => {
						if (isValidElement(child)) {
							const { props, type, key } = child;
							return <ChildComponent type={type} {...props} />;
						}
					})}
				</tr>
			);
		case 'th':
			return <th className={S.TheadData}>{children}</th>;
		case 'td':
			return <td className={S.TbodyData}>{children}</td>;
		default:
			return isValidElement(children) ? (
				cloneElement(children)
			) : (
				<>{children}</>
			);
	}
};

export default ChildComponent;
