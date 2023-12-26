import { NextRequest, NextResponse } from 'next/server';
import { getDocFileBySlug } from '@/app/_lib/getDocs';

export const fetchCache = 'force-no-store';

interface Context {
	params: {
		hooks: string;
	};
}

export async function GET(request: NextRequest, context: Context) {
	const {
		params: { hooks },
	} = context;
	try {
		const target = await getDocFileBySlug(hooks);

		return new Promise((resolve) => {
			resolve(new NextResponse(JSON.stringify(target), { status: 200 }));
		});
	} catch (e) {
		return new NextResponse(null, { status: 500 });
	}
}
