import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Claudius Odeyemi | Frontend Developer",
	description:
		"Frontend developer portfolio featuring production-ready projects, accessibility-focused UI work, and modern web engineering experience.",
	keywords: [
		"Frontend Developer",
		"React",
		"Next.js",
		"TypeScript",
		"Portfolio",
		"Web Accessibility",
	],
	authors: [{ name: "Claudius Odeyemi" }],
	openGraph: {
		title: "Claudius Odeyemi | Frontend Developer",
		description:
			"Explore selected frontend projects, technical skills, and professional experience.",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Claudius Odeyemi | Frontend Developer",
		description:
			"Portfolio showcasing frontend development projects and accessibility-first engineering.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
			>
				<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
				<Analytics />
			</body>
		</html>
	);
}
