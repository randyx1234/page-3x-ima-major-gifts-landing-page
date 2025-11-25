import drMarik from "@/assets/dr-marik-new.jpg";
import drVaron from "@/assets/dr-varon-new.jpg";
import drLindley from "@/assets/dr-lindley-new.jpg";
import drCole from "@/assets/dr-cole-new.jpg";

const Leadership = () => {
  const founders = [
    {
      name: "Paul E. Marik MD, FCCM, FCCP",
      title: "",
      image: drMarik,
      bio: "IMA Co-Founder, Chief Scientific Officer"
    },
    {
      name: "Joseph Varon MD, FCCM, FCCP",
      title: "",
      image: drVaron,
      bio: "IMA Co-Founder, Chief Medical Officer"
    },
    {
      name: "Katarina Lindley, DO, FACOFP",
      title: "",
      image: drLindley,
      bio: "IMA Senior Fellow, Family Medicine & Director Fellowship Program"
    },
    {
      name: "Ryan Cole, MD",
      title: "",
      image: drCole,
      bio: "IMA Senior Fellow, Pathology"
    }
  ];

  return (
    <section id="credibility" className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-foreground mb-4">
            Led By Physicians America Can Trust.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Founded by physicians committed to patient-first, evidence-based care
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
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
                <p className="text-black font-normal leading-relaxed">
                  {founder.bio}
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
