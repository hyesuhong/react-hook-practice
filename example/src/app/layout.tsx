import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import SideBar from './components/SideBar';

const poppins = Poppins({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		default: 'su-hooks',
		template: 'su-hooks | %s',
	},
	description: "su-hooks(react custom hook collection)'s example page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${poppins.className} grid grid-cols-[max-content_1fr] grid-rows-[minmax(100vh,max-content)]`}
			>
				<>
					<SideBar />
					{children}
				</>
			</body>
		</html>
	);
}
