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

type Props =
	| ReactPortal
	| ReactElement<unknown, string | JSXElementConstructor<any>>;

const ChildComponent = ({ children, type }: PropsWithChildren<Props>) => {
	switch (type) {
		case 'thead':
			return (
				<thead className='h-40 bg-grey-light'>
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
				<tbody className='group tbody'>
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
				<tr className='group-[.tbody]:border-b group-[.tbody]:border-b-grey-light last:border-none'>
					{Children.map<ReactNode, ReactNode>(children, (child, index) => {
						if (isValidElement(child)) {
							const { props, type, key } = child;
							return <ChildComponent type={type} {...props} />;
						}
					})}
				</tr>
			);
		case 'th':
			return <th>{children}</th>;
		case 'td':
			return <td className='h-40 px-10'>{children}</td>;
		default:
			return isValidElement(children) ? (
				cloneElement(children)
			) : (
				<>{children}</>
			);
	}
};

export default ChildComponent;
