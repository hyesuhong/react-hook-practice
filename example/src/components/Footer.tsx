import IcoGithub from '@/assets/ico-github.svg';
import * as S from '@/styles/footer.css';

const Footer = () => {
	return (
		<footer className={S.Footer}>
			<ul className={S.FooterNavigation}>
				<li>
					<a href='https://github.com/hyesuhong/su-hooks' target='_blank'>
						<IcoGithub className={S.Icon} />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
