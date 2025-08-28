"use client";
import React from "react";
import styles from "./styles/WhyInvestSection.module.css";

const quotes = [
  {
    text: "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
    author: "Philip Fisher",
  },
  {
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
  },
  {
    text: "The individual investor should act consistently as an investor and not as a speculator.",
    author: "Ben Graham",
  },
  {
    text: "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
    author: "Paul Samuelson",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
];

const WhyInvestSection: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.header}>
      <h2 className={styles.title}>Why Invest?</h2>
      <p className={styles.subtitle}>
        Investing is the key to building wealth, securing your future, and
        achieving your dreams. Here are some words of wisdom from the
        world&apos;s greatest investors:
      </p>
    </div>
    <div className={styles.marqueeContainer}>
      <div
        className={styles.marquee}
        style={{ width: `${quotes.length * 1600}px` }}
      >
        {[...quotes, ...quotes].map((quote, idx) => (
          <blockquote key={idx} className={styles.quote}>
            <div>
              <p className={styles.quoteText}>“{quote.text}”</p>
            </div>
            <footer className={styles.quoteFooter}>— {quote.author}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default WhyInvestSection;
