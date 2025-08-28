import React from "react";
import Image from "next/image";
import styles from "./styles/TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Sophia",
    avatar: "/FundxSite/testimonial-sophia.jpg",
    title: "Sophia's Journey to Financial Freedom",
    text: "Sophia achieved her dream of early retirement with FundexSecurities' strategic portfolio management, which prioritized capital preservation.",
  },
  {
    name: "Ethan",
    avatar: "/FundxSite/testimonial-ethan.jpg",
    title: "Ethan's Retirement Planning Success",
    text: "Ethan secured a comfortable retirement by partnering with our expert advisors for long-term planning, focusing on minimizing potential risks.",
  },
  {
    name: "Olivia",
    avatar: "/FundxSite/testimonial-olivia.jpg",
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
