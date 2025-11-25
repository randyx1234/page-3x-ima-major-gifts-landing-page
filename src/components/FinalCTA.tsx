import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="final-cta" className="py-20 bg-gradient-to-br from-[#03066d] to-[#03b4b5]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Be part of the movement to <br />restore honest medicine.
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Your major gift strengthens physicians, protects patients, and gives <br />America a real path back to health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("giving-levels")}
              className="bg-background text-primary hover:bg-background/90 font-semibold text-lg px-8"
            >
              Give a major gift now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("footer")}
              className="border-2 border-primary-foreground text-blue-900 hover:bg-primary-foreground hover:text-accent font-semibold text-lg px-8"
            >
              Talk with our team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
