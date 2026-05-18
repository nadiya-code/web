import React from 'react';
import { Helmet } from 'react-helmet';
import { Target, Eye, TrendingUp } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TeamCard from '@/components/TeamCard.jsx';
import { motion } from 'framer-motion';

function AboutPage() {
  const milestones = [
    { year: '2022', title: 'EduNova founded', description: 'Started with a vision to democratize quality education' },
    { year: '2023', title: 'Reached 5,000 students', description: 'Expanded course offerings to include AI and data science' },
    { year: '2024', title: 'Launched mentorship program', description: 'Connected students with industry experts for personalized guidance' },
    { year: '2025', title: 'International expansion', description: 'Opened virtual classrooms across 15 countries' },
    { year: '2026', title: 'Over 12,000 students', description: 'Became a leading platform for career-focused online education' }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1596496050860-b48b170fc584?w=400&h=400&fit=crop'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Curriculum',
      image: 'https://images.unsplash.com/photo-1662320850401-6e7ed2b7636c?w=400&h=400&fit=crop'
    },
    {
      name: 'Lucia Martinez',
      role: 'Lead Instructor',
      image: 'https://images.unsplash.com/photo-1562893492-afd14ae24913?w=400&h=400&fit=crop'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`About us | EduNova`}</title>
        <meta name="description" content="Learn about EduNova's mission to provide affordable, job-ready education and empower students with future skills." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="pt-32 pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                About EduNova
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're on a mission to make quality education accessible to everyone, everywhere
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Our mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Provide affordable, job-ready education that empowers individuals to build successful careers in technology and digital fields. We believe everyone deserves access to high-quality learning resources, regardless of their background or location.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Our vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Empower students with future skills that prepare them for the rapidly evolving job market. We envision a world where continuous learning is accessible, engaging, and directly aligned with industry needs, creating opportunities for career growth and innovation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From a small startup to a global learning platform
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-card rounded-xl p-6 border border-border ml-16 md:ml-0">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Meet our team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Passionate educators and industry experts dedicated to your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;