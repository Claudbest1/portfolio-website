import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
	{
		title: "E-Commerce Platform",
		description:
			"A full-featured e-commerce platform with product management, shopping cart, and secure checkout. Built with modern web technologies for optimal performance.",
		image: "/tefind.png",
		technologies: ["React", "TypeScript", "Tailwind CSS"],
		liveUrl: "https://admin.tefind.com",
		githubUrl: "#",
	},
	{
		title: "Marketplace App",
		description:
			"Collaborative marketplace application with real-time updates, drag-and-drop functionality, and team collaboration features.",
		image: "/marketplace.png",
		technologies: ["React", "Firebase", "Material-UI", "Redux"],
		liveUrl: "https://realappsecure.vyntapp.com/",
		githubUrl: "#",
	},
	{
		title: "Organization Website",
		description:
			"Responsive website for a non-profit organization, featuring event management, volunteer sign-up, and donation processing.",
		image: "/kkn.png",
		technologies: ["React", "TypeScript", "Tailwind CSS"],
		liveUrl: "https://kumbukonnect.org/",
		githubUrl: "#",
	},
	{
		title: "Portfolio CMS",
		description:
			"Content management system for creative professionals to showcase their work. Includes admin panel, image optimization, and SEO features.",
		image: "/portfolio-cms-admin-panel.jpg",
		technologies: ["Next.js", "Sanity", "Vercel", "TypeScript"],
		liveUrl: "#",
		githubUrl: "#",
	},
];

export function Projects() {
	return (
		<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 section-enter">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">
					Featured Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<Card
							key={index}
							className="overflow-hidden hover:border-primary/60 transition-colors group hover-lift"
						>
							<div className="relative aspect-video overflow-hidden bg-muted">
								<Image
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									fill
									sizes="(min-width: 768px) 50vw, 100vw"
									className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<CardHeader>
								<CardTitle className="text-xl">{project.title}</CardTitle>
								<CardDescription className="leading-relaxed">
									{project.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<Badge key={tech} variant="secondary">
											{tech}
										</Badge>
									))}
								</div>
								<div className="flex gap-3">
									{project.liveUrl !== "#" ? (
										<Button size="sm" variant="outline" asChild>
											<a
												href={project.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
											>
												<ExternalLink className="mr-2 h-4 w-4" />
												Live Demo
											</a>
										</Button>
									) : (
										<Button size="sm" variant="outline" disabled>
											<ExternalLink className="mr-2 h-4 w-4" />
											Live Demo Soon
										</Button>
									)}
									{project.githubUrl !== "#" ? (
										<Button size="sm" variant="outline" asChild>
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Github className="mr-2 h-4 w-4" />
												Code
											</a>
										</Button>
									) : (
										<Button size="sm" variant="outline" disabled>
											<Github className="mr-2 h-4 w-4" />
											Private Repo
										</Button>
									)}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
