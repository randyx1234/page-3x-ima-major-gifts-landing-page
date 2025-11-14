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
