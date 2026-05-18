import React from 'react';
import { Helmet } from 'react-helmet';
import { Video, PlayCircle, MessageCircle, Award, Briefcase, Headphones } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import { motion } from 'framer-motion';

function ServicesPage() {
  const services = [
    {
      icon: Video,
      title: 'Live classes',
      description: 'Join interactive live sessions with expert instructors, ask questions in real-time, and collaborate with fellow learners'
    },
    {
      icon: PlayCircle,
      title: 'Recorded lessons',
      description: 'Access high-quality video lessons anytime, anywhere. Learn at your own pace with lifetime access to course materials'
    },
    {
      icon: MessageCircle,
      title: 'Doubt support',
      description: 'Get your questions answered quickly through our dedicated support channels and community forums'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Earn industry-recognized certificates upon course completion to showcase your skills to employers'
    },
    {
      icon: Briefcase,
      title: 'Career guidance',
      description: 'Receive personalized career counseling, resume reviews, and interview preparation from industry professionals'
    },
    {
      icon: Headphones,
      title: 'Mentorship program',
      description: 'Connect with experienced mentors who provide one-on-one guidance tailored to your career goals'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`Services | EduNova`}</title>
        <meta name="description" content="Discover our comprehensive learning services including live classes, recorded lessons, doubt support, certification, and career guidance." />
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
                Our services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Everything you need to succeed in your learning journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Ready to start learning?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Join thousands of students who are already transforming their careers with EduNova
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/courses"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                >
                  Browse courses
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-border bg-background font-medium hover:bg-muted transition-all duration-200 active:scale-[0.98]"
                >
                  Contact us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;