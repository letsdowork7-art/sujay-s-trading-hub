import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TradeAuditPro = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Coming Soon</span>
            <h1 className="text-4xl md:text-6xl font-sora font-bold mt-4 mb-6">
              Trade Audit <span className="text-gradient">Pro</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your custom Trade Audit Pro application will be displayed here.
            </p>
            <div className="glass rounded-xl p-12 border-primary/20">
              <p className="text-muted-foreground">
                Replace this content with your Trade Audit Pro code.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TradeAuditPro;
