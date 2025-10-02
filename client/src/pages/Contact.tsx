import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ecell@iitd.ac.in',
    link: 'mailto:ecell@iitd.ac.in',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 11 2659 1000',
    link: 'tel:+911126591000',
  },
  {
    icon: MapPin,
    label: 'Office Location',
    value: 'IIT Delhi Campus, Hauz Khas, New Delhi - 110016',
    link: '#',
  },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-12" data-testid="page-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.label} className="hover-elevate">
                    <CardContent className="p-6">
                      <a
                        href={info.link}
                        className="flex items-start gap-4"
                        data-testid={`contact-${info.label.toLowerCase().replace(' ', '-')}`}
                      >
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Follow Us</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Stay updated with our latest events, initiatives, and success stories on social media.
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="icon"
                        className="w-12 h-12"
                        asChild
                        data-testid={`social-${social.label.toLowerCase()}`}
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <social.icon className="w-5 h-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 10:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
