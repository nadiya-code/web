import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { motion } from 'framer-motion';

function ContactPage() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kolanadiya/', label: 'LinkedIn', color: 'hover:text-[#0077B5]' },
    { icon: Instagram, href: 'https://www.instagram.com/_nadiya_1410/', label: 'Instagram', color: 'hover:text-[#E4405F]' },
    { icon: Github, href: 'https://github.com/nadiya-code/', label: 'GitHub', color: 'hover:text-foreground' }
  ];

  return (
    <>
      <Helmet>
        <title>{`Contact us | EduNova`}</title>
        <meta name="description" content="Get in touch with EduNova. Send us a message and we'll get back to you as soon as possible." />
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
                Get in touch
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-card rounded-2xl p-8 border border-border h-full">
                  <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                  <ContactForm />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="text-2xl font-semibold mb-6">Contact information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <a
                          href="mailto:nadiyakola3@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 break-all"
                        >
                          nadiyakola3@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="text-2xl font-semibold mb-6">Follow us</h2>
                  <p className="text-muted-foreground mb-6">
                    Stay connected with us on social media for the latest updates, courses, and learning tips.
                  </p>
                  <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-95 ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-semibold mb-3">Need immediate help?</h3>
                  <p className="text-white/90 mb-4">
                    Check out our FAQ section or browse our help center for quick answers to common questions.
                  </p>
                  <a
                    href="/courses"
                    className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-all duration-200 active:scale-[0.98]"
                  >
                    Visit help center
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;