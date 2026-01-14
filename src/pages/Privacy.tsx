import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-6xl mx-auto">
          <div className="prose prose-slate dark:prose-invert max-w-none 
            prose-headings:text-foreground prose-headings:font-bold
            prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-0
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:font-semibold
            prose-p:text-muted-foreground prose-p:leading-7 prose-p:mb-6
            prose-strong:text-foreground prose-strong:font-semibold
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
            prose-ol:text-muted-foreground prose-ol:space-y-4 prose-ol:mb-8
            prose-li:text-muted-foreground prose-li:leading-7
            prose-li:marker:text-primary">
            <h1>NoteStack Privacy Policy</h1>
            
            <p className="text-muted-foreground mb-10">
              <strong className="text-foreground">Last Updated:</strong> January 14, 2026
            </p>

            <section>
              <h2>Data Collection</h2>
              
              <p>NoteStack collects the following data:</p>
              
              <ol>
                <li>
                  <strong className="text-foreground">Saved Notes & Drafts:</strong> Stored locally on your device using Chrome's storage API. 
                  This data never leaves your browser unless you choose to post it.
                </li>
                <li>
                  <strong className="text-foreground">License Key:</strong> If you purchase a license, your key is sent to Gumroad's API solely 
                  to verify its validity. No other personal information is transmitted.
                </li>
                <li>
                  <strong className="text-foreground">Anonymous Usage Metrics:</strong> We collect aggregated, anonymized usage statistics 
                  (e.g., total notes saved) via Google Analytics 4 to improve the product. No personally identifiable 
                  information is collected.
                </li>
              </ol>
            </section>

            <section>
              <h2>Data Sharing</h2>
              
              <p>We do not sell, rent, or share your personal data with third parties.</p>
            </section>

            <section>
              <h2>Contact</h2>
              
              <p>
                For questions, contact:{" "}
                <a href="mailto:notestack.help@gmail.com">
                  notestack.help@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
