import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Footer from '../components/Footer';

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
			<body className={`${poppins.className} h-screen`}>
				<>{children}</>
				<Footer />
			</body>
		</html>
	);
}
