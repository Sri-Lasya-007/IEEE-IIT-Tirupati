import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ieeeLogoImg from '@/assets/ieee_logo.png';
import iittLogoImg from '@/assets/logo_iitt_new.jpeg';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'Committee', path: '/committee' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'IEEE Fellows', path: '/ieee-fellows' },
  { label: 'Achievements', path: '/achievements' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Left - IEEE Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={ieeeLogoImg} alt="IEEE Logo" className="h-14 w-auto" style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(63%) saturate(3456%) hue-rotate(216deg) brightness(92%) contrast(98%)' }} />
          </Link>

          {/* Center - Nav Links (desktop) */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link-modern px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary bg-primary/[0.08] font-semibold'
                    : 'text-foreground/70 hover:text-primary hover:bg-primary/[0.05]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right - IIT Tirupati Logo + Mobile toggle */}
          <div className="flex items-center gap-3">
            <img src={iittLogoImg} alt="IIT Tirupati" className="h-16 w-auto" />
            <button
              className="lg:hidden text-primary p-1 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border pb-4 animate-fade-in">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary bg-muted'
                    : 'text-foreground/70 hover:text-primary hover:bg-muted/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Marquee */}
      <div className="marquee-container">
        <span className="marquee-text text-sm">
          ✦ Together we Engineer the future. ✦ Together we Engineer the future. ✦ Together we Engineer the future. ✦
        </span>
      </div>
    </>
  );
};

export default Navbar;
