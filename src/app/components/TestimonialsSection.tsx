import React from "react";
import Image from "next/image";
import styles from "./styles/TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Sophia",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2s86fZoGgTKOYwMDs1W3Jxa0VW_ynrSpJwmt-sSZ8fhXUqYKuEBz0lIA30A68e9FsKAytoVoaKW4C4TE4p0AOwe2QL-GIT6vkEIDbnNjr2EO2n1Eum-QEBqx6mEVUlgQDPgeh5cLdrRVbVtkyVLbB7xUz-V98vdsrYYg1svkwsL2-wCVoiMdG4T3f_m1SrBzIrm_n1QTRFLmLBP5e15rtMv5OJnCCksct9fFIGW12CBa6Z48f6LBro_T7OYOb_GwFgEbjUaMBBLQ",
    title: "Sophia's Journey to Financial Freedom",
    text: "Sophia achieved her dream of early retirement with FundexSecurities' strategic portfolio management, which prioritized capital preservation.",
  },
  {
    name: "Ethan",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBm_DO1Cg-eyRo8yUfkwgDn0Deruq9tUYk-pFV75YPNa1-ssYR6aqcNOsDBrwmQ3dyIDfDRuPQTiyzlpOhu-peiHPB3VsDekZ4pbRG7g4yhx8vOh7t-6nHg5FLk6haMYGdupbetlKZZCQ0mv0dOJMdRk9PDMiOapqW3WKTXdoU4qOkm8Mol4vE_vv0Yi4V0g9WWalTCtTFHscOaeSfhA5HI903cL5k0TJ2eD8vz9BnAg-kGWXBCThNn48NOkfoE3Q4RHJu_9arPQOE",
    title: "Ethan's Retirement Planning Success",
    text: "Ethan secured a comfortable retirement by partnering with our expert advisors for long-term planning, focusing on minimizing potential risks.",
  },
  {
    name: "Olivia",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANYfG8a1dmJbEOfxl29clNi0RF0H6aB6EnYH4rpKjSx3uVfIkBWOs43wMUchKt9qcvQvdPgAh9dHYt8IAcQ5zcCI5VRs4K5Fe8-4B7_fvr_LapEJnaTsAa6PRVAH7ClOFkl9uoV79GKEmPBzjFRBWYC_6i_KCTJCTSQE1TsS5_d7i7uAz1zSupGuzWZ_MOM2o3jczA9rYez7ihZK_HpwMK9SVFdT3KdPE4_ErN4GWQHrPIVdaaNadI2x6hVc42nNNZ9Aa8SLUvcwU",
    title: "Olivia's Investment Growth Story",
    text: "Olivia saw significant growth in her investments through our tailored approach and proactive management, with a strong emphasis on downside protection.",
  },
];

const TestimonialsSection: React.FC = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>Client Success Stories</h2>

    <div className={styles.quoteMarqueeContainer}>
      <div className={styles.quoteMarquee}>
        {[...testimonials, ...testimonials].map((testimonial, idx) => (
          <div className={styles.quoteCard} key={idx}>
            <div className={styles.quoteLogo}>{testimonial.title}</div>
            <blockquote className={styles.quoteText}>
              {testimonial.text}
            </blockquote>
            <div className={styles.quoteProfile}>
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={48}
                height={48}
                className={styles.avatar}
                priority
              />
              <div>
                <div className={styles.quoteName}>{testimonial.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
