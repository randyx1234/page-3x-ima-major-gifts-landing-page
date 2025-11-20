import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const GivingLevels = () => {
  const tiers = [
    {
      amount: "$1,000",
      title: "Empower patients",
      description: "Fund the creation and distribution of treatment guides that help patients and clinicians make informed decisions.",
    },
    {
      amount: "$2,500",
      title: "Support honest research",
      description: "Underwrite research, publishing, and education that would otherwise go unheard.",
    },
    {
      amount: "$5,000",
      title: "Train and equip physicians",
      description: "Expand physician training, fellowships, and educational programs.",
    },
    {
      amount: "$10,000",
      title: "Grow the Trusted Referral Network",
      description: "Connect more patients with independent, root-cause-focused physicians.",
    },
    {
      amount: "$25,000+",
      title: "Transform American healthcare",
      description: "Provide catalytic support that drives national reach, advocacy, and innovation.",
      featured: true,
    },
  ];

  return (
    <section id="giving-levels" className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose your level of impact.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every gift matters. Major gifts create leverage, allowing IMA to scale programs and reach more physicians and patients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`${
                tier.featured
                  ? "border-2 border-accent shadow-lg md:col-span-2 lg:col-span-1"
                  : "border-border"
              } bg-card hover:shadow-lg transition-shadow`}
            >
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-accent mb-2">
                  {tier.amount}
                </CardTitle>
                <CardDescription className="text-xl font-semibold text-foreground">
                  {tier.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{tier.description}</p>
                {tier.featured && (
                  <div className="bg-accent/10 p-3 rounded text-sm text-accent font-semibold">
                    Most Impact
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Make your major gift today.
          </h3>
          <div className="space-y-4">
            <div className="text-center text-muted-foreground space-y-1">
              <p>To make a secure donation or discuss custom giving options,</p>
              <p>please contact our team.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Contact Donations Team
              </Button>
              <div className="flex items-center justify-center gap-2 text-foreground text-lg font-semibold">
                <Phone className="w-5 h-5" />
                <span>Call (202) 987-5660</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GivingLevels;
