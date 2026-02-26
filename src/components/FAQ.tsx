import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is NoteStack free?",
    answer: "Yes! NoteStack is completely free during this early access phase. We will be introducing a simple, affordable one-time payment option soon for the full version.",
  },
  {
    question: "Is my data safe?",
    answer: "Your privacy is our priority. Drafts and schedules are stored locally in your browser. We don't sell your data, and we only access the minimum information needed to authenticate with Substack.",
  },
  {
    question: "Can I edit a scheduled note?",
    answer: "Yes! You can edit by first cancelling any scheduled note from the 'Scheduled' tab before it goes live. Full flexibility to change your mind at any time.",
  },
  {
    question: "How does scheduling work?",
    answer: "Simply write your note in the Drafts tab, click the schedule button, pick your preferred date and time, and NoteStack will automatically post it for you.",
  },
  {
    question: "Which browsers are supported?",
    answer: "NoteStack is currently available for Google Chrome and other Chromium-based browsers like Brave, Edge, Arc, and more.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 relative scroll-mt-24 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about NoteStack.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
