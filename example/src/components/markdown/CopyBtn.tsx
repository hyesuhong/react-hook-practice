import { useState } from 'react';
import * as S from '@/styles/code.css';
import IcoCopy from '@/assets/ico-copy.svg';

type props = {
	code: string;
};

const CopyBtn = ({ code }: props) => {
	const [status, setStatus] = useState<'copy' | 'copied!'>('copy');
	const onClick = () => {
		const regex = /(~{3}[a-z]*)/gi;
		const onlyCode = code.replace(regex, '');

		let timer: null | NodeJS.Timeout;

		navigator.clipboard
			.writeText(onlyCode)
			.then(() => {
				setStatus('copied!');
				timer = setTimeout(() => {
					setStatus('copy');
					if (timer) {
						clearTimeout(timer);
						timer = null;
					}
				}, 1000);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<button onClick={onClick} className={S.CopyBtn}>
			<IcoCopy className={S.CopyIcon} />
			{status}
		</button>
	);
};

export default CopyBtn;
