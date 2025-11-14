import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MajorGiftImpact = () => {
  const impacts = [
    {
      amount: "$1,000",
      impact: "Produces and distributes evidence-based treatment guides for patients and physicians.",
    },
    {
      amount: "$2,500",
      impact: "Supports physician education, events, and online training to spread honest medicine.",
    },
    {
      amount: "$5,000",
      impact: "Expands the Trusted Referral Network so more patients can find the right doctor.",
    },
    {
      amount: "$10,000",
      impact: "Funds research, publishing, and outreach that challenge broken systems.",
    },
    {
      amount: "$25,000+",
      impact: "Accelerates national scale, partnerships, and long-term reform.",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="major-gift-impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why major gifts matter now
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-capacity donors are the backbone of this movement. Major gifts allow IMA to move beyond survival and into expansion.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {impacts.map((item, index) => (
            <Card key={index} className="bg-card border-l-4 border-accent">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-accent">{item.amount}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.impact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("giving-levels")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Support this work with a major gift
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MajorGiftImpact;
