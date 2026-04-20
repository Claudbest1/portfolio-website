"use client";

import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Projects", href: "#projects" },
	{ name: "Skills", href: "#skills" },
	{ name: "Contact", href: "#contact" },
];

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			aria-label="Primary"
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-background/75 backdrop-blur-md border-b border-blue-400/20 shadow-md shadow-blue-600/10"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<a
						href="#"
						className="text-xl font-bold text-foreground hover:text-accent transition-colors"
					>
						Claudius Odeyemi
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								{item.name}
							</a>
						))}
					</div>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-expanded={isMobileMenuOpen}
						aria-controls="mobile-menu"
						aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
					>
						{isMobileMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</Button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div id="mobile-menu" className="md:hidden py-4 border-t border-border">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.name}
							</a>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
