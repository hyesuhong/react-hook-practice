interface props {
	params: { hooks: string };
}

export async function generateMetadata({ params }: props) {
	const hooks = params.hooks;
	return {
		title: hooks,
	};
}

export default async function Docs({ params }: props) {
	return <>{params.hooks}</>;
}
