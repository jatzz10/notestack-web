import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";
import { Link } from "react-router-dom";
import notestackIcon from "@/assets/notestack-icon.svg";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="container max-w-6xl mx-auto">
        <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center overflow-hidden">
              <img src={notestackIcon} alt="NoteStack" className="w-full h-full object-contain" />
            </div>
            <span className="text-foreground font-semibold text-lg">NoteStack</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <Button variant="hero" size="sm" className="hidden sm:flex" asChild>
            <a
              href="https://forms.gle/EMjiZoA5UH7HSuob9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Chrome className="w-4 h-4" />
              Get Free Access
            </a>
          </Button>
          <Button variant="hero" size="icon" className="sm:hidden w-9 h-9" asChild>
            <a
              href="https://forms.gle/EMjiZoA5UH7HSuob9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Chrome className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
