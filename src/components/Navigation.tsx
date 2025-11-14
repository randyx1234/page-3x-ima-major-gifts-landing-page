import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import imaLogo from "@/assets/ima-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-background/95"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img src={imaLogo} alt="Independent Medical Alliance" className="h-12" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("what-we-do")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Why IMA
            </button>
            <button
              onClick={() => scrollToSection("major-gift-impact")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("major-gift-impact")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection("founders-circle")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Founders Circle
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("giving-levels")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Donate Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
