import React from 'react';
import { motion } from 'framer-motion';

function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
        <service.icon className="w-7 h-7 text-primary" />
      </div>

      <h3 className="text-xl font-semibold mb-3 text-balance">
        {service.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}

export default ServiceCard;