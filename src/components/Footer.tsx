import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import ieeeLogoImg from '@/assets/ieee_logo.png';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'Committee', path: '/committee' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'IEEE Fellows', path: '/ieee-fellows' },
  { label: 'Achievements', path: '/achievements' },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Contact Us</h3>
            <div className="text-primary-foreground/80 text-sm space-y-2">
              <p>IEEE Student Chapter</p>
              <p>IIT Tirupati</p>
              <p>Yerpedu – 517619</p>
              <a
                href="mailto:ieeesc@iittp.ac.in"
                className="flex items-center gap-2 mt-3 hover:text-secondary transition-colors"
              >
                <Mail size={16} />
                ieeesc@iittp.ac.in
              </a>
            </div>
          </div>

          {/* Branding */}
          <div className="flex flex-col items-start md:items-end">
            <img src={ieeeLogoImg} alt="IEEE" className="h-16 w-auto brightness-0 invert mb-4" />
            <p className="text-primary-foreground/90 font-semibold">IEEE Student Chapter</p>
            <p className="text-primary-foreground/70 text-sm">IIT Tirupati</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-primary-foreground/60">
          <p>© 2026 IEEE Student Chapter IIT Tirupati. All Rights Reserved.</p>
          <p className="mt-1">Developed by Sree Advaithi & Sri Lasya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
