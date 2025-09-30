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
			<Navigation />
			<main>
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
