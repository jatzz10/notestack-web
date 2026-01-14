import { Mail, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import notestackIcon from "@/assets/notestack-icon.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
              <img src={notestackIcon} alt="NoteStack" className="w-full h-full object-contain" />
            </div>
            <span className="text-foreground font-semibold">NoteStack</span>
            <span className="text-muted-foreground text-sm">© 2026</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="mailto:notestack.help@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Support
            </a>
            <Link 
              to="/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8 pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm">
            Made with ❤️ for Substack writers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
