import React from 'react';
import { motion } from 'framer-motion';

function BenefitCard({ benefit, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-200"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <benefit.icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold mb-2">{benefit.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
}

export default BenefitCard;