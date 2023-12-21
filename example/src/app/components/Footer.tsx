import Image from 'next/image';
import ThemeIcon from './theme/ThemeIcon';
import IcoGithub from '@/assets/ico-github.svg';

const Footer = () => {
	return (
		<footer className='fixed bottom-0 left-0 p-10 w-full bg-white/20 backdrop-blur-sm z-0'>
			<ul className='flex gap-10 justify-end'>
				<li>
					<a href='https://github.com/hyesuhong/su-hooks' target='_blank'>
						<IcoGithub className='w-[3.2rem] h-[3.2rem] fill-black' />
					</a>
				</li>
				<li>
					<button
						style={{
							background: 'transparent',
							color: 'inherit',
							border: 'none',
							verticalAlign: 'middle',
							width: '3.2rem',
							height: '3.2rem',
						}}
					>
						<ThemeIcon theme='light' className='w-full h-full fill-black' />
					</button>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
