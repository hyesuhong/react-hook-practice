import { useRef } from 'react';
import { useFullscreen } from '../hooks/useFullscreen';

export default function UseFullscreen() {
	const exitBtn = useRef<HTMLButtonElement>(null);
	const onFullscreen = (isFull: boolean) => {
		console.log(isFull ? 'we are full' : 'small');
		if (!exitBtn.current) return;
		exitBtn.current.style.display = isFull ? 'inline-block' : 'none';
	};
	const { ref, trigger, exit } = useFullscreen<HTMLDivElement>(onFullscreen);

	return (
		<div>
			<div ref={ref}>
				<img
					src='https://images.unsplash.com/photo-1673368280570-8a42321216c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
					alt=''
					style={{
						maxWidth: '80%',
					}}
				/>
				<button onClick={exit} ref={exitBtn} style={{ display: 'none' }}>
					Exit Fullscreen
				</button>
			</div>
			<p>
				사진:
				<a href='https://unsplash.com/ko/%EC%82%AC%EC%A7%84/RlLwff9iZQ0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
					Unsplash
				</a>
				의
				<a href='https://unsplash.com/@juankiddy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
					Juan Orestes
				</a>
			</p>
			<button onClick={trigger}>Fullscreen</button>
		</div>
	);
}
