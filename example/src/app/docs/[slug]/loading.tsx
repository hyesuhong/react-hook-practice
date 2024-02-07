import * as S from '@/styles/loading.css';

const loadingUI = [1, 2, 3];

const Loading = () => {
	return (
		<div className={S.Wrapper}>
			{loadingUI.map((_, index) => {
				return (
					<span
						className={S.LoadingDot}
						key={index}
						style={{
							animationDelay: `${0.4 * index}s`,
						}}
					></span>
				);
			})}
		</div>
	);
};

export default Loading;
