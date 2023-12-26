import { getDocFiles } from '@/app/_lib/getDocs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
	try {
		const target = await getDocFiles();

		return new Promise((resolve) => {
			resolve(new NextResponse(JSON.stringify(target), { status: 200 }));
		});
	} catch (e) {
		return new NextResponse(null, { status: 500 });
	}
}
