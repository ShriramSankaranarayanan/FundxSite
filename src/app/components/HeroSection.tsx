import React from "react";

const HeroSection: React.FC = () => (
  <section
    className="flex flex-1 justify-center py-10 px-4 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEc10fj7_XmBN39WDKD-iqBDW5-5Sc_Mgd-Q9JmDtaM481na_uVesu5lafKt15iOXUkdQOOIaZ5nCbHoFEwWNDcIQgA9eDP0yBrAlMgsHUmtm7ZsYMB1sW6P7ONIgN2o21MF-1TjzaepfxH-AS3FHKK2cEePa2Q7ee3HF1hL5xgor215o7F6MbYyM09Myt81dHbMF09PnPENjcKFBsBnyuPVojg9htNVXkqNmYDYJ-dO613gATfFg1jkdfADl9pFGcqnknfmjEKY4')",
    }}
  >
    <div className="flex flex-col items-center justify-center gap-4 bg-black/30 rounded-lg p-8 max-w-2xl w-full">
      <h1 className="text-white text-4xl font-black text-center leading-tight">
        Your Financial Future, Securely Managed
      </h1>
      <h2 className="text-white text-base font-normal text-center">
        At FundexSecurities, we combine decades of experience with cutting-edge
        technology to provide personalized portfolio management that prioritizes
        your financial well-being and minimizes potential investment risks.
      </h2>
      <button className="rounded-lg h-10 px-4 bg-[#17d38b] text-[#0e1b16] text-sm font-bold mt-2">
        Get Started
      </button>
    </div>
  </section>
);

export default HeroSection;
