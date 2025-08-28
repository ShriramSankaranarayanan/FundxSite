import React from "react";
import Image from "next/image";
import styles from "./styles/FeaturesSection.module.css";

const FeaturesSection: React.FC = () => (
  <section className={styles.section}>
    <div className="flex flex-col gap-6 items-center">
      <h2 className="text-[#0e1b16] text-3xl font-bold leading-tight">
        Why Choose FundexSecurities?
      </h2>
      <p className="text-[#0e1b16] text-base font-normal max-w-2xl text-center">
        We are committed to providing exceptional service and peace of mind to
        our clients by focusing on risk mitigation and downside protection.
      </p>
      <button className="rounded-lg h-10 px-4 bg-[#17d38b] text-[#0e1b16] text-sm font-bold w-fit">
        Learn More
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Trust and Reliability */}
      <div className={styles.card}>
        <div className="text-[#0e1b16] mb-2">
          <Image
            src="/trust.svg"
            alt="Trust and Reliability"
            width={24}
            height={24}
            priority
          />
        </div>
        <h3 className="text-base font-bold text-black">
          Trust and Reliability
        </h3>
        <p className="text-[#4e977b] text-sm">
          With over 10 years of experience, FundexSecurities is a trusted name
          in portfolio management. We are fully certified and licensed, ensuring
          your investments are in safe hands. Our strategies are designed to
          minimize potential losses and protect your capital.
        </p>
      </div>
      {/* Personalized Expertise */}
      <div className={styles.card}>
        <div className="text-[#0e1b16] mb-2">
          <Image
            src="/expertise.svg"
            alt="Personalized Expertise"
            width={24}
            height={24}
            priority
          />
        </div>
        <h3 className="text-base font-bold text-black">
          Personalized Expertise
        </h3>
        <p className="text-[#4e977b] text-sm">
          Our expert advisors create personalized portfolios tailored to your
          unique financial goals and risk tolerance, with a strong emphasis on
          downside protection. We offer transparent fee structures and clear
          communication.
        </p>
      </div>
      {/* Ease of Use */}
      <div className={styles.card}>
        <div className="text-[#0e1b16] mb-2">
          <Image
            src="/ease.svg"
            alt="Ease of Use"
            width={24}
            height={24}
            priority
          />
        </div>
        <h3 className="text-base font-bold text-black">Ease of Use</h3>
        <p className="text-[#4e977b] text-sm">
          Our simple onboarding process gets you started quickly. Our
          user-friendly online dashboard provides easy access to your portfolio
          performance and allows you to track your progress in real-time.
        </p>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
