import { Button } from "@/components/ui/button";
import { Chrome, Layers } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="container max-w-6xl mx-auto">
        <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
              <Layers className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-foreground font-semibold text-lg">NoteStack</span>
          </div>

          {/* CTA */}
          <Button variant="hero" size="sm" className="hidden sm:flex">
            <Chrome className="w-4 h-4" />
            Install Free
          </Button>
          <Button variant="hero" size="icon" className="sm:hidden w-9 h-9">
            <Chrome className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
