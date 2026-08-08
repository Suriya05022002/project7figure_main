import React, { useRef } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { USPStrip } from "@/components/site/USPStrip";
import { Compensation } from "@/components/site/Compensation";
import { Framework } from "@/components/site/Framework";
import { WhatYouGet } from "@/components/site/WhatYouGet";
import { Eligibility } from "@/components/site/Eligibility";
import { IntakeAndGuarantee } from "@/components/site/IntakeAndGuarantee";
import { MoneyBack } from "@/components/site/MoneyBack";
import { LogosMarquee } from "@/components/site/LogosMarquee";
import { ApplyForm } from "@/components/site/ApplyForm";

import { OurCommitments } from "@/components/site/OurCommitments";
import { Footer } from "@/components/site/Footer";
import { ImportIcon } from "lucide-react";
import FAQ from "@/components/site/FAQ";

export default function Landing() {
  const applyRef = useRef(null);
  const scrollToApply = () => {
    applyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div data-testid="landing-root" className="relative bg-white text-black min-h-screen">

      <Nav onApply={scrollToApply} />
      
      <Hero onApply={scrollToApply} />
      <OurCommitments />
      <USPStrip />
      <Compensation />
      <Framework />
      <WhatYouGet />
      <Eligibility />
      <IntakeAndGuarantee />
      <MoneyBack />
      <LogosMarquee />
      <ApplyForm ref={applyRef} />
      <FAQ/>
      <Footer />
    </div>
  );
}
