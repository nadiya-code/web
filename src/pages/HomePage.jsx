import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, Sparkles, Target, Users, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CourseCard from '@/components/CourseCard.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import StatCard from '@/components/StatCard.jsx';
import BenefitCard from '@/components/BenefitCard.jsx';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { toast } = useToast();

  const stats = [
    { label: 'Students enrolled', value: 12847, suffix: '+' },
    { label: 'Total courses', value: 127, suffix: '' },
    { label: 'Expert mentors', value: 43, suffix: '' },
    { label: 'Success rate', value: 94.7, suffix: '%' }
  ];

  const featuredCourses = [
    {
      id: 1,
      title: 'Full stack web development',
      category: 'Web Development',
      duration: '12 weeks',
      level: 'Intermediate',
      description: 'Master React, Node.js, and modern web technologies to build production-ready applications'
    },
    {
      id: 2,
      title: 'AI & machine learning fundamentals',
      category: 'AI & Machine Learning',
      duration: '10 weeks',
      level: 'Beginner',
      description: 'Learn Python, TensorFlow, and core ML concepts to start your AI journey'
    },
    {
      id: 3,
      title: 'Digital marketing mastery',
      category: 'Digital Marketing',
      duration: '8 weeks',
      level: 'Beginner',
      description: 'Master SEO, social media marketing, and analytics to grow your online presence'
    },
    {
      id: 4,
      title: 'Data science with Python',
      category: 'Data Science',
      duration: '14 weeks',
      level: 'Advanced',
      description: 'Deep dive into data analysis, visualization, and predictive modeling'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Software Engineer at TechCorp',
      content: 'EduNova transformed my career completely. The web development course gave me the skills I needed to land my dream job. The instructors are incredibly supportive and the curriculum is always up-to-date.',
      rating: 5,
      avatar: 'PS'
    },
    {
      id: 2,
      name: 'Raj Malhotra',
      role: 'Data Analyst at Analytics Pro',
      content: 'The data science program exceeded my expectations. Real-world projects and expert mentorship helped me transition from marketing to data analytics in just 6 months.',
      rating: 5,
      avatar: 'RM'
    },
    {
      id: 3,
      name: 'Anika Patel',
      role: 'Digital Marketing Specialist',
      content: 'Best investment in my career. The digital marketing course is comprehensive and practical. I started freelancing within weeks of completing the program.',
      rating: 5,
      avatar: 'AP'
    }
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: 'Industry-relevant curriculum',
      description: 'Learn skills that employers actually need, updated regularly to match market demands'
    },
    {
      icon: Users,
      title: 'Expert mentorship',
      description: 'Get guidance from industry professionals with years of real-world experience'
    },
    {
      icon: Target,
      title: 'Career-focused learning',
      description: 'Build a portfolio of projects that showcase your skills to potential employers'
    },
    {
      icon: Award,
      title: 'Recognized certifications',
      description: 'Earn certificates that add credibility to your resume and LinkedIn profile'
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      toast({
        title: "Subscribed successfully",
        description: "You'll receive our latest updates and courses."
      });
      setNewsletterEmail('');
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>EduNova | Learn Future Skills Online</title>
        <meta name="description" content="Online learning platform for AI, coding, marketing, and data science. Access expert courses and career guidance." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 bg-background text-foreground">
          <div className="absolute inset-0 gradient-radial opacity-40" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2" style={{ letterSpacing: '-0.02em' }}>
                Learn skills that shape your future in the AI era
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Join EduNova to access high-quality courses, expert mentorship, and career-focused learning
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] h-12 px-8">
                  <Link to="/courses">
                    Start learning free
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-8 border-border text-foreground hover:bg-muted transition-all duration-200 active:scale-[0.98]">
                  <Link to="/courses">Explore courses</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Featured courses</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Start your learning journey with our most popular courses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="hover:bg-muted transition-all duration-200 border-border text-foreground">
                <Link to="/courses">View all courses</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why choose EduNova</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're committed to your success with features designed for real career growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What our students say</h2>
              <p className="text-muted-foreground">
                Real stories from learners who transformed their careers
              </p>
            </div>

            <div className="relative">
              <TestimonialCard testimonial={testimonials[currentTestimonial]} />
              
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  onClick={prevTestimonial}
                  variant="outline"
                  size="sm"
                  className="hover:bg-muted transition-all duration-200 border-border"
                >
                  Previous
                </Button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentTestimonial ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  onClick={nextTestimonial}
                  variant="outline"
                  size="sm"
                  className="hover:bg-muted transition-all duration-200 border-border"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Zap className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Stay updated with new courses</h2>
            <p className="text-primary-foreground/80 mb-8">
              Get the latest courses and learning resources delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground"
              />
              <Button type="submit" className="bg-background text-foreground hover:bg-background/90 transition-all duration-200">
                Subscribe
              </Button>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;