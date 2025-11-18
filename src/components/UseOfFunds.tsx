const UseOfFunds = () => {
  const breakdown = [
    { category: "Programs and patient support", percentage: 40 },
    { category: "Physician training and fellowship", percentage: 25 },
    { category: "Research and publishing", percentage: 20 },
    { category: "Outreach and education", percentage: 10 },
    { category: "Administration and operations", percentage: 5 },
  ];

  return (
    <section id="use-of-funds" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Where your gift goes.
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-8">
            IMA is committed to transparency and stewardship. Your contribution is used to advance the mission with care and integrity.
          </p>
          <div className="space-y-4 mb-6">
            {breakdown.map((item, index) => (
              <div key={index} className="bg-section-light p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">{item.category}</span>
                  <span className="text-2xl font-bold text-accent">{item.percentage}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="bg-accent rounded-full h-3 transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
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
