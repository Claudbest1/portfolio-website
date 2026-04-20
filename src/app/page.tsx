import { About } from "./about";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Hero } from "./hero";
import { Navigation } from "./navigation";
import { Projects } from "./projects";
import { Skills } from "./skills";

export default function Home() {
	return (
		<div className="min-h-screen">
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-background focus:px-4 focus:py-2 focus:rounded-md focus:border"
			>
				Skip to content
			</a>
			<Navigation />
			<main id="main-content">
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Skills />
				<Contact />
			</main>
		</div>
	);
}
