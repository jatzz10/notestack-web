import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-ol:text-muted-foreground prose-li:text-muted-foreground">
          <h1 className="text-4xl font-bold mb-4">NoteStack Privacy Policy</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong className="text-foreground">Last Updated:</strong> January 14, 2026
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Collection</h2>
          
          <p className="mb-4">NoteStack collects the following data:</p>
          
          <ol className="space-y-4 mb-8">
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

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Sharing</h2>
          
          <p className="mb-8">We do not sell, rent, or share your personal data with third parties.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
          
          <p>
            For questions, contact:{" "}
            <a href="mailto:notestack.help@gmail.com" className="text-primary hover:underline font-medium">
              notestack.help@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
