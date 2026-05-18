import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo.jsx';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center group">
            <Logo className="h-8 md:h-10 transition-transform duration-200 group-hover:scale-105" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 active:scale-[0.98]">
              <Link to="/courses">Start Learning</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col gap-2 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? 'text-accent bg-accent/10'
                  : 'text-foreground/80 hover:text-foreground hover:bg-muted'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-accent text-accent-foreground mt-4 h-12">
            <Link to="/courses">Start Learning</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;