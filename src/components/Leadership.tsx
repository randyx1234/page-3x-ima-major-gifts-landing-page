import drJoe from "@/assets/dr-joe.jpg";
import katLeader from "@/assets/kat-leader.jpg";
import drMarik from "@/assets/dr-marik.jpg";
import drVaron from "@/assets/dr-varon-new.jpg";

const Leadership = () => {
  const founders = [
    {
      name: "Dr. Joe Ladapo",
      title: "Co-Founder & Chief Medical Officer",
      image: drJoe,
      bio: "IMA is led by practicing physicians who refused to surrender care to corporations. They are building a model of medicine that serves patients first."
    },
    {
      name: "Dr. Kat Lindley",
      title: "Co-Founder & President",
      image: katLeader,
      bio: "Our mission is to restore the sacred trust between physicians and patients, one honest conversation at a time."
    },
    {
      name: "Dr. Paul E. Marik",
      title: "Co-Founder & Chief Scientific Officer",
      image: drMarik,
      bio: "Dedicated to advancing evidence-based medicine and empowering physicians to practice with clinical autonomy and scientific integrity."
    },
    {
      name: "Dr. Joseph Varon",
      title: "Co-Founder & Medical Director",
      image: drVaron,
      bio: "Committed to defending the patient-physician relationship and ensuring access to life-saving treatments based on clinical expertise."
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
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
