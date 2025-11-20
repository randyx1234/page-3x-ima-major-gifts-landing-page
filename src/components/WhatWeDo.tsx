import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, Users, GraduationCap, FlaskConical } from "lucide-react";

const WhatWeDo = () => {
  const programs = [
    {
      icon: FileText,
      title: "Evidence-based treatment guides",
      description: "Clear, patient-friendly guides that bring unbiased science and real-world clinical experience back to the center of care.",
    },
    {
      icon: BookOpen,
      title: "Journal of Independent Medicine",
      description: "A peer-reviewed platform for honest research, free from corporate and political pressure.",
    },
    {
      icon: Users,
      title: "Trusted Referral Network",
      description: "A growing network that helps patients find physicians who practice root-cause, patient-centered medicine.",
    },
    {
      icon: GraduationCap,
      title: "International fellowship and training",
      description: "Educating and equipping physicians in independent, outcome-driven care models.",
    },
    {
      icon: FlaskConical,
      title: "Research and innovation initiatives",
      description: "Supporting studies and projects that traditional funding sources overlook or suppress.",
    },
  ];

  return (
    <section id="what-we-do" className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What your support makes possible.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            IMA exists to protect patients and empower physicians who put people before profit. Major gifts directly fuel these programs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
