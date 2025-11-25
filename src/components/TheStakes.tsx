const TheStakes = () => {
  return (
    <section id="the-stakes" className="py-24" style={{ backgroundColor: '#f3f5f7' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-[48px] font-bold text-foreground leading-tight">
            Medicine Is Broken. <br />
            <span className="text-primary">But It Can Be Fixed.</span>
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p className="text-xl">
              Modern medicine is under pressure from corporate interests, profit-driven protocols, and censorship.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 py-6">
              <div className="p-6 bg-card rounded-lg border-l-4 border-destructive shadow-sm">
                <p className="font-semibold text-foreground">Independent doctors have been deplatformed</p>
              </div>
              <div className="p-6 bg-card rounded-lg border-l-4 border-destructive shadow-sm">
                <p className="font-semibold text-foreground">Research has been buried</p>
              </div>
              <div className="p-6 bg-card rounded-lg border-l-4 border-destructive shadow-sm">
                <p className="font-semibold text-foreground">Patients have been denied informed consent</p>
              </div>
            </div>
            
            <p className="text-xl font-medium text-foreground">
              Chronic illness is rising. Trust in the system is collapsing. <br />
              <span className="text-destructive">Without independent voices, honest medicine disappears.</span>
            </p>
          </div>
          
          <div className="pt-8 border-t-2 border-accent/20 mt-12">
            <p className="text-2xl font-bold text-primary">
              Your gift helps restore integrity, evidence, and choice to patient care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheStakes;
