import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-section-light to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Fuel the mission to make America healthy again
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Major gifts to Independent Medical Alliance (IMA) defend medical freedom, fund honest research, and restore evidence-based, patient-first care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("giving-levels")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8"
              >
                Make a Major Gift
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("footer")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8"
              >
                Schedule a Call With Our Team
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Medical professionals consulting with patients"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
