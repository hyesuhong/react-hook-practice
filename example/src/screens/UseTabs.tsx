import { useTabs } from '../hooks/useTabs';

interface IContent {
	tab: string;
	content: string;
}

const contents = [
	{
		tab: 'Section 1',
		content: `I'm the content of the Section 1`,
	},
	{
		tab: 'Section 2',
		content: `I'm the content of the Section 2`,
	},
	{
		tab: 'Section 3',
		content: `I'm the content of the Section 3`,
	},
];

export default function UseTabs() {
	const { currentItem, changeItem } = useTabs(0, contents);
	return (
		<>
			{contents.map((ct, i) => (
				<button key={i} onClick={() => changeItem(i)}>
					{ct.tab}
				</button>
			))}
			<p>{currentItem.content}</p>
		</>
	);
}
