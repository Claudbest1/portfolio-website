import { Card } from "../components/ui/card";
import { Code2, Palette, Rocket, Wrench } from "lucide-react";

const skillCategories = [
	{
		icon: Code2,
		title: "Frontend Development",
		skills: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"Vue.js",
			"HTML5",
			"CSS3",
		],
	},
	{
		icon: Palette,
		title: "Styling & Design",
		skills: [
			"Tailwind CSS",
			"Sass",
			"CSS Modules",
			"Styled Components",
			"Responsive Design",
		],
	},
	{
		icon: Wrench,
		title: "Tools & Technologies",
		skills: [
			"Git",
			"Webpack",
			"Vite",
			"npm",
			"REST APIs",
			"GraphQL",
			"Firebase",
		],
	},
	{
		icon: Rocket,
		title: "Best Practices",
		skills: [
			"Web Accessibility",
			"Performance Optimization",
			"SEO",
			"Testing",
			"Agile",
		],
	},
];

export function Skills() {
	return (
		<section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 section-enter">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">
					Skills & Technologies
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{skillCategories.map((category, index) => {
						const Icon = category.icon;
						return (
							<Card
								key={index}
								className="group p-6 hover:border-primary/60 hover-lift"
							>
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-lg bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
										<Icon className="h-6 w-6" />
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-semibold mb-3">
											{category.title}
										</h3>
										<div className="flex flex-wrap gap-2">
											{category.skills.map((skill) => (
												<span
													key={skill}
													className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								</div>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
