import { Button } from "@/components/ui/button";
import { Chrome, LogIn, MousePointerClick, CalendarClock } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Chrome,
    title: "Install",
    description: "Add NoteStack to Chrome from the Web Store. It takes just one click.",
  },
  {
    number: "02",
    icon: LogIn,
    title: "Authenticate",
    description: "Log in to your Substack account. No extra setup needed.",
  },
  {
    number: "03",
    icon: MousePointerClick,
    title: "Capture",
    description: "Click the extension icon to open side-panel and save notes or check your drafts anytime.",
  },
  {
    number: "04",
    icon: CalendarClock,
    title: "Schedule",
    description: "Write a draft, pick a time, and let NoteStack handle the rest.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-card/30 relative overflow-hidden scroll-mt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 border border-primary rounded-full" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-primary rounded-full" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get Started in <span className="gradient-text">Seconds.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Four simple steps to transform your Substack workflow forever.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                {/* Step number */}
                <span className="text-4xl font-bold text-primary/20 absolute top-4 right-4">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a href="https://forms.gle/EMjiZoA5UH7HSuob9" target="_blank" rel="noopener noreferrer">
              <Chrome className="w-5 h-5" />
              Get Early Access
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
