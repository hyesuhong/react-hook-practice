interface props {
	params: { hooks: string };
}

export default function Docs({ params }: props) {
	return (
		<>
			<p>{params.hooks}</p>
		</>
	);
}
