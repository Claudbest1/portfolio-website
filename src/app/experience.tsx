import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const experiences = [
	{
		period: "2024 — Present",
		title: "Frontend Web Developer",
		company: "Vynt",
		description:
			"Build and maintain critical components used to construct modern web applications. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
		technologies: ["TypeScript", "Reactjs", "Nextjs", "Tailwind CSS", "Git"],
	},
	{
		period: "2025",
		title: "Frontend Developer",
		company: "Tefind",
		description:
			"Developed and maintained responsive web applications for various clients. Collaborated with designers to implement pixel-perfect interfaces and ensured cross-browser compatibility.",
		technologies: ["TypeScript", "Reactjs", "Nextjs", "Tailwind CSS"],
	},
	{
		period: "2025",
		title: "Web Developer",
		company: "Kumbu Konnect Network",
		description:
			"Developed a responsive website for a Kumbu Knonnect Network, focusing on user experience and accessibility. Implemented modern web standards and optimized performance across devices.",
		technologies: ["TypeScript", "Reactjs", "Tailwind CSS"],
	},
	{
		period: "2022 — 2024",
		title: "Junior Frontend Developer",
		company: "MouveBeta Logistics",
		description:
			"Contributed to the development of the company's logistics platform, enhancing user interfaces and improving overall user experience. Worked with a team to implement new features and fix bugs.",
		technologies: ["Reactjs", "Tailwind CSS", "TypeScript", "Git"],
	},
];

export function Experience() {
	return (
		<section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
			<div className="container mx-auto max-w-4xl">
				<h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">
					Experience
				</h2>
				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<Card
							key={index}
							className="p-6 hover:border-accent transition-colors"
						>
							<div className="flex flex-col sm:flex-row sm:items-start gap-4">
								<div className="text-sm text-muted-foreground whitespace-nowrap sm:w-40">
									{exp.period}
								</div>
								<div className="flex-1 space-y-3">
									<div>
										<h3 className="text-xl font-semibold text-foreground">
											{exp.title}
										</h3>
										<p className="text-accent">{exp.company}</p>
									</div>
									<p className="text-muted-foreground leading-relaxed">
										{exp.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{exp.technologies.map((tech) => (
											<Badge key={tech} variant="secondary">
												{tech}
											</Badge>
										))}
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
