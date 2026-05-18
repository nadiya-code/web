import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="text-sm leading-relaxed text-foreground/90 mb-6">
        "{testimonial.content}"
      </p>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-semibold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;