import React from "react";

const TeamSection: React.FC = () => (
  <section className="px-4 py-10 bg-white">
    <h2 className="text-[#0e1b16] text-2xl font-bold mb-6">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Marcus */}
      <div className="flex flex-col gap-3 pb-3">
        <div
          className="w-full aspect-square bg-cover rounded-lg"
          style={{
            backgroundImage: "url('/FundxSite/team-marcus.jpg')",
          }}
        ></div>
        <p className="font-medium">Dr. Marcus Sterling, CFA</p>
        <p className="text-[#4e977b] text-sm">
          Chief Investment Officer with over 25 years of experience in portfolio
          management and risk assessment.
        </p>
      </div>
      {/* Isabella */}
      <div className="flex flex-col gap-3 pb-3">
        <div
          className="w-full aspect-square bg-cover rounded-lg"
          style={{
            backgroundImage: "url('/FundxSite/team-isabella.jpg')",
          }}
        ></div>
        <p className="font-medium">Ms. Isabella Rossi, CFP</p>
        <p className="text-[#4e977b] text-sm">
          Senior Financial Planner specializing in retirement planning and
          wealth preservation strategies.
        </p>
      </div>
      {/* Noah */}
      <div className="flex flex-col gap-3 pb-3">
        <div
          className="w-full aspect-square bg-cover rounded-lg"
          style={{
            backgroundImage: "url('/FundxSite/team-noah.jpg')",
          }}
        ></div>
        <p className="font-medium">Mr. Noah Bennett, MBA</p>
        <p className="text-[#4e977b] text-sm">
          Portfolio Manager with expertise in asset allocation and downside risk
          mitigation.
        </p>
      </div>
    </div>
  </section>
);

export default TeamSection;
