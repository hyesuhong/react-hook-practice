import * as S from '../../styles/code.css';
import IcoCopy from '../../assets/ico-copy.svg?react';

type props = {
	code: string;
};

const CopyBtn = ({ code }: props) => {
	const onClick = () => {
		const regex = /(~{3}[a-z]*)/gi;
		const onlyCode = code.replace(regex, '');

		navigator.clipboard
			.writeText(onlyCode)
			.then(() => {
				//
				console.log('copied!');
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => console.log('done'));
	};

	return (
		<button className={S.CopyBtn} onClick={onClick}>
			<IcoCopy className={S.CopyIcon} />
		</button>
	);
};

export default CopyBtn;
