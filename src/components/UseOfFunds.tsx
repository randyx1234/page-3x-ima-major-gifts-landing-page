import { useState, useEffect, useRef } from "react";
import { Progress } from "@/components/ui/progress";

const UseOfFunds = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const breakdown = [
    { 
      category: "Programs and patient support", 
      percentage: 40,
      impact: "Directly funds treatment guides, patient resources, and clinical support programs reaching 50,000+ patients annually."
    },
    { 
      category: "Physician training and fellowship", 
      percentage: 25,
      impact: "Trains 200+ physicians per year in root-cause medicine and independent practice strategies."
    },
    { 
      category: "Research and publishing", 
      percentage: 20,
      impact: "Supports groundbreaking research publications and evidence-based protocols used by thousands of clinicians."
    },
    { 
      category: "Outreach and education", 
      percentage: 10,
      impact: "Reaches millions through educational content, workshops, and community health initiatives."
    },
    { 
      category: "Administration and operations", 
      percentage: 5,
      impact: "Maintains lean operations ensuring 95 cents of every dollar goes directly to mission-critical programs."
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      breakdown.forEach((item, index) => {
        let start = 0;
        const end = item.percentage;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = Math.min(start, end);
            return newValues;
          });
        }, 16);
      });
    }
  }, [isVisible]);

  return (
    <section id="use-of-funds" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[48px] font-bold text-center text-foreground mb-12">
            Where Your Gift Goes.
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-8">
            IMA is committed to transparency and stewardship. Your contribution is used to <br />advance the mission with care and integrity.
          </p>
          <div className="space-y-6 mb-6">
            {breakdown.map((item, index) => (
              <div 
                key={index} 
                className="group bg-section-light p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <span className="font-semibold text-foreground text-lg">{item.category}</span>
                    <div className="mt-2 h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center ml-4">
                    <div className="relative w-20 h-20">
                      <svg className="transform -rotate-90 w-20 h-20">
                        <circle
                          cx="40"
                          cy="40"
                          r="32"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="transparent"
                          className="text-muted"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="32"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 32}`}
                          strokeDashoffset={`${2 * Math.PI * 32 * (1 - (isVisible ? animatedValues[index] : 0) / 100)}`}
                          className="text-accent transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-accent">
                          {Math.round(isVisible ? animatedValues[index] : 0)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Progress 
                  value={isVisible ? animatedValues[index] : 0} 
                  className="h-3"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-center text-muted-foreground italic">
            Percentages are illustrative and will be updated with current financial data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseOfFunds;
