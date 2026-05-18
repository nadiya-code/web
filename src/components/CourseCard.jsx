import React from 'react';
import { Clock, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

function CourseCard({ course, index = 0 }) {
  const levelColors = {
    Beginner: 'bg-green-500/10 text-green-700 border-green-500/20',
    Intermediate: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
    Advanced: 'bg-purple-500/10 text-purple-700 border-purple-500/20'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`px-3 py-1 rounded-lg text-xs font-medium border ${levelColors[course.level] || levelColors.Beginner}`}>
          {course.level}
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{course.duration}</span>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-balance group-hover:text-primary transition-colors duration-200">
        {course.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
        {course.description}
      </p>

      <div className="mt-auto">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]">
          Enroll now
        </Button>
      </div>
    </motion.div>
  );
}

export default CourseCard;