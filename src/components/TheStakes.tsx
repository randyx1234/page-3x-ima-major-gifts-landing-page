const TheStakes = () => {
  return (
    <section id="the-stakes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Medicine is broken. But it can be fixed.
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Modern medicine is under pressure from corporate interests, profit-driven protocols, and censorship.
              </p>
              <ul className="space-y-3 pl-6">
                <li className="list-disc">Independent doctors have been deplatformed.</li>
                <li className="list-disc">Research has been buried.</li>
                <li className="list-disc">Patients have been denied informed consent.</li>
              </ul>
              <p>
                Chronic illness is rising. Trust in the system is collapsing. Without independent voices, honest medicine disappears.
              </p>
            </div>
          </div>
          <div className="bg-section-light p-8 rounded-lg">
            <div className="space-y-4">
              <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded">
                <p className="font-semibold text-foreground">"Doctors Suspended"</p>
              </div>
              <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded">
                <p className="font-semibold text-foreground">"Research Removed"</p>
              </div>
              <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded">
                <p className="font-semibold text-foreground">"Protocols Over Patients"</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-xl font-semibold text-primary mt-12">
          Your gift helps restore integrity, evidence, and choice to patient care.
        </p>
      </div>
    </section>
  );
};

export default TheStakes;
