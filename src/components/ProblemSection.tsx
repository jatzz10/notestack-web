import { BookmarkX, FileQuestion, Clock } from "lucide-react";

const problems = [
  {
    icon: BookmarkX,
    problem: "No Save Option",
    painPoint: "Substack has no native way to save notes. You're forced to copy links to Notion, WhatsApp, or random sticky notes, breaking your flow.",
    solution: "Save any note with one click directly in your browser sidebar.",
  },
  {
    icon: FileQuestion,
    problem: "No Draft Storage",
    painPoint: "Great ideas vanish if you don't post them immediately. There's nowhere to store half-baked thoughts or drafts within Substack's interface.",
    solution: "A dedicated Drafts tab to jot down ideas and refine them later.",
  },
  {
    icon: Clock,
    problem: "No Scheduling",
    painPoint: "There is no native way to schedule notes in Substack, making it impossible to plan your content and growth in advance.",
    solution: "Schedule your notes to auto-publish at your preferred time.",
  },
];

const ProblemSection = () => {
  return (
    <section id="features" className="py-24 px-4 relative scroll-mt-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Stop Losing Your <span className="gradient-text">Best Ideas.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Substack is great for writing, but terrible for managing your notes workflow.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Problem title */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {item.problem}
              </h3>

              {/* Pain point */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.painPoint}
              </p>

              {/* Solution */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm">
                  <span className="text-primary font-medium">Solution: </span>
                  <span className="text-foreground/80">{item.solution}</span>
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
