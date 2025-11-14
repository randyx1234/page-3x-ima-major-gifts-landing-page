import drJoe from "@/assets/dr-joe.jpg";
import katLeader from "@/assets/kat-leader.jpg";

const Leadership = () => {
  return (
    <section id="credibility" className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Led by physicians America can trust
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src={drJoe}
              alt="Dr. Joe - President and Chief Medical Officer"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-foreground">Dr. Joe</h3>
              <p className="text-muted-foreground mb-4">President and Chief Medical Officer</p>
              <p className="text-muted-foreground italic">
                "IMA is led by practicing physicians who refused to surrender care to corporations. They are building a model of medicine that serves patients first."
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src={katLeader}
              alt="Kat - Leadership Team"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-foreground">Kat</h3>
              <p className="text-muted-foreground mb-4">Leadership Team</p>
              <p className="text-muted-foreground italic">
                "Our mission is to restore the sacred trust between physicians and patients, one honest conversation at a time."
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground">
            IMA physicians and researchers have been featured in international conferences, leading journals, and major media platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
