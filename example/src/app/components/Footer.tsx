import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='fixed bottom-0 left-0 p-10'>
			<ul className='flex gap-10'>
				<li>
					<a href='https://github.com/hyesuhong/su-hooks' target='_blank'>
						<Image
							src='/ico-github.svg'
							width='32'
							height='32'
							alt='github logo'
							className=''
						/>
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
