import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import Background from "@/assets/images/background.jpg";

export function Hero() {
	return (
		<section
			className="relative isolate min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 section-enter"
			style={{
				backgroundImage: `url(${Background.src})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/60 to-slate-950/80" />
			<div className="relative container mx-auto max-w-4xl text-center text-white">
				<div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
					<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
						Frontend Developer
					</h1>
					<p className="text-xl sm:text-2xl text-white/80 text-balance max-w-2xl mx-auto leading-relaxed">
						I build accessible, pixel-perfect digital experiences for the web.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-4 pt-4">
						<Button size="lg" className="shadow-lg shadow-blue-500/25" asChild>
							<a href="#projects">
								View My Work
								<ArrowRight className="ml-2 h-4 w-4" />
							</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-blue-200/40 bg-blue-950/30 text-white hover:bg-blue-900/50"
							asChild
						>
							<a href="#contact">Get In Touch</a>
						</Button>
					</div>
					<div className="flex items-center justify-center gap-4 pt-8">
						<a
							href="https://github.com/Claudbest1"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/70 hover:text-white transition-colors"
						>
							<Github className="h-6 w-6" />
							<span className="sr-only">GitHub</span>
						</a>
						<a
							href="https://www.linkedin.com/in/claudius-odeyemi/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/70 hover:text-white transition-colors"
						>
							<Linkedin className="h-6 w-6" />
							<span className="sr-only">LinkedIn</span>
						</a>
						<a
							href="mailto:claudiusodeyemi@gmail.com"
							className="text-white/70 hover:text-white transition-colors"
						>
							<Mail className="h-6 w-6" />
							<span className="sr-only">Email</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
