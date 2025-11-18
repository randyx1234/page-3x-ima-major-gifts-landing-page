import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const FoundersCircle = () => {
  const benefits = [
    "Private briefings with IMA leadership",
    "Early insight into new research and initiatives",
    "Invitations to select events and virtual roundtables",
    "Direct updates on the programs their support makes possible",
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="founders-circle" className="py-20 bg-gradient-to-br from-[#03066d] to-[#03b4b5]">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-card/95 backdrop-blur">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Join the Founders Circle.
              </h2>
              <p className="text-xl text-muted-foreground">
                A dedicated community of major donors building the future of honest medicine.
              </p>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Founders Circle members provide significant support that accelerates IMA's mission and long-term impact.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Members receive:</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg text-foreground font-semibold mb-6">
              If you are considering a gift of $25,000 or more, we invite you to explore Founders Circle membership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("footer")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Inquire about Founders Circle
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("footer")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                Schedule a confidential conversation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FoundersCircle;
