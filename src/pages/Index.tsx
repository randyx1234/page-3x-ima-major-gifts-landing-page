import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheStakes from "@/components/TheStakes";
import WhatWeDo from "@/components/WhatWeDo";
import MajorGiftImpact from "@/components/MajorGiftImpact";
import Leadership from "@/components/Leadership";
import WhyNow from "@/components/WhyNow";
import GivingLevels from "@/components/GivingLevels";
import FoundersCircle from "@/components/FoundersCircle";
import UseOfFunds from "@/components/UseOfFunds";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TheStakes />
      <WhatWeDo />
      <MajorGiftImpact />
      <Leadership />
      <WhyNow />
      <GivingLevels />
      <FoundersCircle />
      <UseOfFunds />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
