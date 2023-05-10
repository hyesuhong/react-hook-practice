import { useConfirm } from '../hooks/useConfirm';

export default function UseConfirm() {
	const deleteWord = () => console.log('deleting word...');
	const abort = () => console.log('aborted');
	const confirmDelete = useConfirm('R U Sure?', deleteWord, abort);
	return (
		<div>
			<button onClick={confirmDelete}>Delete the word</button>
		</div>
	);
}
