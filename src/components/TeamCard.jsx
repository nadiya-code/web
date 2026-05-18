import React from 'react';
import { motion } from 'framer-motion';

function TeamCard({ member, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
      <p className="text-sm text-muted-foreground">{member.role}</p>
    </motion.div>
  );
}

export default TeamCard;