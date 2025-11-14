import { Button } from "@/components/ui/button";
import { Play, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustBadges = [
    "501(c)(3) Nonprofit",
    "Tax-Deductible Giving",
    "Transparency Guaranteed"
  ];

  return (
    <section 
      id="hero" 
      className="relative pt-20 min-h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Fuel the mission to make America healthy again
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Defend medical freedom, fund honest research, and restore evidence-based, patient-first care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("giving-levels")}
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg"
            >
              Make a Major Gift →
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("footer")}
              className="bg-white/95 hover:bg-white text-primary border-0 font-semibold text-lg px-8 py-6 rounded-full shadow-lg"
            >
              <Play className="w-5 h-5 mr-2 fill-current" />
              Schedule a Call With Our Team
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
