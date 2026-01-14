import { Twitter, Mail, Shield, Layers } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Layers className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-foreground font-semibold">NoteStack</span>
            <span className="text-muted-foreground text-sm">© 2024</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Support
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Twitter className="w-4 h-4" />
              Twitter/X
            </a>
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
