import { Button } from "@/components/ui/button";
import { Chrome, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-20">
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Built for Substack Creators</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up text-balance" style={{ animationDelay: '0.2s' }}>
            Master Your Substack
            <br />
            <span className="gradient-text">Notes Workflow</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up text-balance" style={{ animationDelay: '0.3s' }}>
            Save inspiration instantly, draft without distractions, and schedule notes to grow your audience effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button
              variant="hero"
              size="xl"
              className="group"
              asChild
            >
              <a
                href="https://forms.gle/EMjiZoA5UH7HSuob9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Chrome className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Get Early Access
              </a>
            </Button>
          </div>
        </div>

        {/* Hero Image / Mockup */}
        <div className="relative mt-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative mx-auto max-w-4xl">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl transform scale-95" />

            {/* YouTube Video Embed */}
            <div className="relative glass-card rounded-2xl overflow-hidden border border-border/50">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/W-Y0iGRKmZ4?rel=0"
                  title="NoteStack Chrome Extension Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
