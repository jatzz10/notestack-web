import { Button } from "@/components/ui/button";
import { Chrome, Sparkles } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

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
            <span className="text-sm text-muted-foreground">Built for Substack Writers</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up text-balance" style={{ animationDelay: '0.2s' }}>
            Master Your Substack
            <br />
            <span className="gradient-text">Notes Workflow.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up text-balance" style={{ animationDelay: '0.3s' }}>
            Save inspiration instantly, draft without distractions, and schedule notes to grow your audience while you sleep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="group">
              <Chrome className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Install NoteStack for Free
            </Button>
            <Button variant="heroOutline" size="lg">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Hero Image / Mockup */}
        <div className="relative mt-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative mx-auto max-w-4xl">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl transform scale-95" />
            
            {/* Browser frame */}
            <div className="relative glass-card rounded-2xl overflow-hidden border border-border/50">
              {/* Browser header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-card/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-muted/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground max-w-md mx-auto">
                    substack.com/notes
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <img 
                src={heroMockup} 
                alt="NoteStack Chrome Extension showing saved notes, drafts, and scheduling features"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
