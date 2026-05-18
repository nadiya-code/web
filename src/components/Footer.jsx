import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Logo from './Logo.jsx';

function Footer() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed successfully",
        description: "You'll receive our latest updates and courses."
      });
      setEmail('');
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kolanadiya/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/_nadiya_1410/', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/nadiya-code/', label: 'GitHub' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <Logo className="h-10" />
            </Link>
            <p className="text-sm leading-relaxed text-secondary-foreground/80">
              Empowering learners worldwide with high-quality, career-focused education in AI, technology, and digital skills.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Contact</span>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:nadiyakola3@gmail.com" className="hover:text-primary transition-colors duration-200">
                  nadiyakola3@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-95 text-foreground border border-border"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Newsletter</span>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Get the latest courses and updates delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background border-border text-foreground focus-visible:ring-primary"
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © 2026 EduNova. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="#" className="text-secondary-foreground/60 hover:text-primary transition-all duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="text-secondary-foreground/60 hover:text-primary transition-all duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;