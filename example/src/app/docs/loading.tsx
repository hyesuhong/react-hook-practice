const loadingUI = [1, 2, 3];

const Loading = () => {
	return (
		<div className='h-full flex items-center justify-center gap-10'>
			{loadingUI.map((ui, index) => {
				const basicClassName = 'w-10 h-10 bg-grey-dark rounded-2xl';
				const animationClassName = `animate-[pulse_1.2s_linear_infinite]`;
				const className = `${basicClassName} ${animationClassName}`;
				return (
					<span
						className={className}
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
