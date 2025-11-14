import { Button } from "@/components/ui/button";

const WhyNow = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="why-ima-why-now" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            Why Independent Medical Alliance. Why now.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground mb-8">
            <p>
              The last few years exposed a hard truth. When business interests dictate care, patients lose.
            </p>
            <p>
              IMA was formed so that physicians and patients would not face this crisis alone.
            </p>
            <ul className="space-y-3 pl-6">
              <li className="list-disc">We defend medical freedom and informed consent.</li>
              <li className="list-disc">We protect independent physicians who put outcomes before politics.</li>
              <li className="list-disc">We bring honest, evidence-based care back to the center of medicine.</li>
            </ul>
            <p className="font-semibold text-foreground">
              There is a limited window to build and scale this alternative. Major donors make that possible. With your support, IMA can move from defending what is left to building what comes next.
            </p>
          </div>
          
          {/* Video Section */}
          <div className="my-12">
            <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden bg-muted border-2 border-border flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-xl font-semibold text-foreground">Why IMA, Why Now</p>
                <p className="text-sm text-muted-foreground">Video coming soon</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("giving-levels")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Stand with IMA today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
