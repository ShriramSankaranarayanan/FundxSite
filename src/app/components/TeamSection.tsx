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
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwLcibrl0daP4_W5ZJZA5ApzeUEfTzo_OF4RbIFHtLtmGoVntm-5zxTUQP_8Asf8-dZQeR2Q7gQKYENs1JVtCELnlH00GrG27YjO9KjZyTGqpG2snoLwkB2xI5KHWbMFQ6zmr925vs_ogLn69A4DBt4-c_xkUql2us2ve0PF8H5HLVJGkW-0wcyVMz7Pk64dAsiJ59AvAZyqySrQbeWYgS2vPc_Q5z3V4O6qSu6dvXWEA7LhUNILrV6M_DQLo3t9NkOXpamXi3HCs')",
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
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxvcfTryrGKERsjz5UlmGnKyUBnm3aQ8g0KHUerg2ELWZuerkUwp7lngI4hDyck6BYI6x0xE8rkHzTUuJOQ1cNkRD6EIXf8XjSCCjAoUDAGQZoNaZPOaUkIqvduqEl4Yxuhd0Iqyv9SisiBOdgDGT_eBbgZ0h_Auw5QR0XJodgxB2xF5Xyl2wDTuHoWvFvNm2UxohNK6dwQoEJWYAxuwEf5HgPXfX2ADMvWDRLfae9wIcrFJl2hN1mm5lvbRGRFUa13tALpHXgZ4I')",
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
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzNcPv4W71GZOEZklAOdWT6z_Ln9Iv9a4mJHtEUQEhzsE5t5Qu5ASNsIdIpSYzF6lTSLjKmi5RZdCtVj36acVPjQet1nPh9L52HNhyKEfZZxWacmnIb4hU9N-pWDjHg47bsvqsJQlMsEE1labhQQLLhXEnAyV6Rg5uhCybJNdGK5TWVpODxf2KdrNDIivYerns-mzSsjP2K7Lix9wh8uTCrZXZPsPcT2-YJ8AvIpT-y7wHgEuEpsP00MkFNuBl9-7dS6Q7s7H8OZw')",
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
