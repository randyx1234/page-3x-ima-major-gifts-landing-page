import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

const GivingLevels = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.state) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailAddress: formData.email,
        phoneNumber: formData.phone,
        addressState: formData.state,
        description: formData.message
      };

      const response = await fetch("https://espocrm.theflccc.org/api/v1/LeadCapture/01c8a47a0773cb50e73bdaa59d22c646", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "Form submitted successfully",
        description: "Our philanthropy team will contact you soon."
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        state: "",
        message: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission failed",
        description: "Please try again or call us directly.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
        <Card className="max-w-2xl mx-auto p-8 shadow-elevated">
          <h3 className="text-3xl font-bold text-foreground mb-4 text-center">
            Considering a Major Gift?
          </h3>
          
          <p className="text-center text-muted-foreground mb-6">
            Let's discuss how your gift can make a lasting impact. Call us at{" "}
            <a href="tel:+12029875660" className="text-primary font-semibold hover:underline">
              (202) 987-5660
            </a>
            {" "}or submit the form below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="firstName" className="text-foreground font-semibold">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1.5"
              />
            </div>
            
            <div>
              <Label htmlFor="lastName" className="text-foreground font-semibold">
                Last Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground font-semibold">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1.5"
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-foreground font-semibold">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="state" className="text-foreground font-semibold">
                State <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.state}
                onValueChange={(value) => setFormData({ ...formData, state: value })}
              >
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  {US_STATES.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground font-semibold">
                Message (Optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your philanthropic interests..."
                rows={3}
                className="mt-1.5"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-primary-foreground"
            >
              Submit Inquiry
            </Button>

            <p className="text-center text-sm text-muted-foreground pt-2">
              Your information is protected and will only be used to discuss major gift opportunities.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default GivingLevels;
