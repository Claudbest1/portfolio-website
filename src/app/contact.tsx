import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

export function Contact() {
	return (
		<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="container mx-auto max-w-4xl">
				<h2 className="text-3xl sm:text-4xl font-bold mb-8 text-balance">
					Get In Touch
				</h2>
				<Card className="p-8 md:p-12">
					<div className="space-y-6">
						<p className="text-lg text-muted-foreground leading-relaxed">
							I'm always interested in hearing about new projects and
							opportunities. Whether you have a question or just want to say hi,
							feel free to reach out!
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button size="lg" asChild>
								<a href="mailto:claudiusodeyemi@gmail.com">
									<Mail className="mr-2 h-5 w-5" />
									Send Email
								</a>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<a href="/ODEYEMI CLAUDIUS_2708.pdf" download>
									Download Resume
								</a>
							</Button>
						</div>
						<div className="pt-6 border-t border-border">
							<p className="text-sm text-muted-foreground mb-4">
								Connect with me:
							</p>
							<div className="flex gap-4">
								<a
									href="https://github.com/Claudbest1"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									<Github className="h-6 w-6" />
									<span className="sr-only">GitHub</span>
								</a>
								<a
									href="https://www.linkedin.com/in/claudius-odeyemi/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									<Linkedin className="h-6 w-6" />
									<span className="sr-only">LinkedIn</span>
								</a>
								<a
									href="https://twitter.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									<Twitter className="h-6 w-6" />
									<span className="sr-only">Twitter</span>
								</a>
							</div>
						</div>
					</div>
				</Card>
				<footer className="mt-12 text-center text-sm text-muted-foreground">
					<p>
						© {new Date().getFullYear()} Frontend Developer Portfolio. Built
						with Next.js & Tailwind CSS.
					</p>
				</footer>
			</div>
		</section>
	);
}
