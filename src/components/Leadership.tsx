import drMarik from "@/assets/dr-marik.jpg";
import drVaron from "@/assets/dr-varon-new.jpg";
import drKory from "@/assets/dr-kory.jpg";

const Leadership = () => {
  const founders = [
    {
      name: "Paul E. Marik MD, FCCM, FCCP",
      title: "Pulmonary and Critical Care Specialist",
      image: drMarik,
      bio: "Chief Scientific Officer"
    },
    {
      name: "Joseph Varon MD, FCCM, FCCP",
      title: "Professor of Medicine",
      image: drVaron,
      bio: "President and Chief Medical Officer"
    },
    {
      name: "Pierre Kory MD, MPA",
      title: "Pulmonary and Critical Care Specialist",
      image: drKory,
      bio: "President Emeritus, IMA • Founder, Leading Edge Clinic"
    }
  ];

  return (
    <section id="credibility" className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Led by physicians America can trust
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Founded by physicians committed to patient-first, evidence-based care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {founders.map((founder, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-foreground">{founder.name}</h3>
                <p className="text-accent font-semibold">{founder.title}</p>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{founder.bio}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            IMA physicians and researchers have been featured in international conferences, leading journals, and major media platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
