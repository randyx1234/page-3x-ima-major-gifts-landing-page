const TheStakes = () => {
  return (
    <section id="the-stakes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-foreground">
            Medicine is broken. But it can be fixed.
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Modern medicine is under pressure from corporate interests, profit-driven protocols, and censorship.
            </p>
            <ul className="space-y-3 text-left inline-block">
              <li className="list-disc">Independent doctors have been deplatformed.</li>
              <li className="list-disc">Research has been buried.</li>
              <li className="list-disc">Patients have been denied informed consent.</li>
            </ul>
            <p>
              Chronic illness is rising. Trust in the system is collapsing. Without independent voices, honest medicine disappears.
            </p>
          </div>
          <p className="text-xl font-semibold text-primary pt-8">
            Your gift helps restore integrity, evidence, and choice to patient care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheStakes;
