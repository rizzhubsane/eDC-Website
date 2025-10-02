import { Link } from 'wouter';
import { Linkedin, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/initiatives', label: 'Initiatives' },
  { href: '/bcon', label: 'BCON' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-chart-2 to-chart-3 flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground font-mono">E</span>
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">E-Cell IIT Delhi</div>
                <div className="text-xs text-muted-foreground">Fostering Innovation</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering the next generation of entrepreneurs through innovation, mentorship, and community.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start h-auto py-1 px-2 text-sm text-muted-foreground hover:text-foreground"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex gap-2 mb-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="w-9 h-9"
                  asChild
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>ecell@iitd.ac.in</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 E-Cell IIT Delhi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
