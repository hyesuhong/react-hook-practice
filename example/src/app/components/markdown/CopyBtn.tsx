import { useState } from 'react';

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
		<button
			onClick={onClick}
			className='absolute top-[1.8rem] right-10 h-30 flex item-center gap-[0.4 rem] pr-[0.4rem] text-black bg-transparent border border-black rounded-[0.4rem] opacity-50 hover:opacity-100'
		>
			{status}
		</button>
	);
};

export default CopyBtn;
