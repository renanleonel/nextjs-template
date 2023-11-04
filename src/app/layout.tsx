import '@/styles/globals.css';
import { GeistSans } from 'geist/font';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-BR' className={GeistSans.className}>
			<body>{children}</body>
		</html>
	);
}
