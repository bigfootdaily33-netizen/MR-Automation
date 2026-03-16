import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { Play, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black">
              <Play className="w-4 h-4 fill-current" />
            </div>
            MR Automation
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Contact
            </Link>
            <Button href="/contact" size="sm">Book a Call</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-zinc-950 pt-16"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="text-lg font-medium text-zinc-300 hover:text-white p-4 rounded-xl hover:bg-zinc-900 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-zinc-800 my-2" />
              <Link 
                to="/contact"
                className="text-lg font-medium text-zinc-300 hover:text-white p-4 rounded-xl hover:bg-zinc-900 transition-colors"
              >
                Contact
              </Link>
              <Button href="/contact" className="w-full mt-4">Book a Call</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight mb-4">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                MR Automation
              </Link>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We build, manage, and scale profitable faceless YouTube channels for entrepreneurs and investors.
              </p>
            </div>
            
            <div>
              <h3 className="font-display font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-zinc-500 hover:text-white text-sm transition-colors">About Us</Link></li>
                <li><Link to="/case-studies" className="text-zinc-500 hover:text-white text-sm transition-colors">Case Studies</Link></li>
                <li><Link to="/pricing" className="text-zinc-500 hover:text-white text-sm transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="text-zinc-500 hover:text-white text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-zinc-500 hover:text-white text-sm transition-colors">Services</Link></li>
                <li><Link to="/process" className="text-zinc-500 hover:text-white text-sm transition-colors">Our Process</Link></li>
                <li><Link to="/faq" className="text-zinc-500 hover:text-white text-sm transition-colors">FAQ</Link></li>
                <li><Link to="/blog" className="text-zinc-500 hover:text-white text-sm transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold mb-4">Free Guide</h3>
              <p className="text-zinc-500 text-sm mb-4">
                Get our free guide on the 7 most profitable faceless YouTube niches.
              </p>
              <Button href="/free-guide" variant="secondary" size="sm" className="w-full">
                Download Guide
              </Button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 text-sm">
              &copy; {new Date().getFullYear()} MR Automation. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-600 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-600 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
