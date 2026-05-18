import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function StatCard({ stat, index = 0 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCount = () => {
    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="text-sm md:text-base text-muted-foreground font-medium">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default StatCard;