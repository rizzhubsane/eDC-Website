import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Award, ArrowRight } from 'lucide-react';
import bconImage from '@assets/generated_images/BCON_flagship_event_banner_0937b7d6.png';

// todo: remove mock functionality
const schedule = [
  { time: '09:00 AM', event: 'Registration & Networking', type: 'General' },
  { time: '10:00 AM', event: 'Opening Keynote by Industry Leader', type: 'Keynote' },
  { time: '11:30 AM', event: 'Panel Discussion: Future of Startups', type: 'Panel' },
  { time: '01:00 PM', event: 'Lunch & Networking', type: 'Break' },
  { time: '02:00 PM', event: 'Startup Pitch Competition Finals', type: 'Competition' },
  { time: '04:00 PM', event: 'Workshop Sessions (Parallel Tracks)', type: 'Workshop' },
  { time: '06:00 PM', event: 'Award Ceremony & Closing', type: 'Ceremony' },
];

const sponsors = [
  { name: 'Tech Corp', tier: 'Platinum' },
  { name: 'Innovation Labs', tier: 'Gold' },
  { name: 'Startup Fund', tier: 'Gold' },
  { name: 'Digital Solutions', tier: 'Silver' },
];

export default function BCON() {
  return (
    <div className="min-h-screen pt-24 pb-12" data-testid="page-bcon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <img
              src={bconImage}
              alt="BCON Event"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end">
              <div className="p-8 lg:p-12">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
                  BCON 2025
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  India's Premier Business & Entrepreneurship Conference
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Date & Time</h3>
                    <p className="text-sm text-muted-foreground">March 15-16, 2025</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Venue</h3>
                    <p className="text-sm text-muted-foreground">IIT Delhi Campus</p>
                    <p className="text-sm text-muted-foreground">Main Auditorium</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Expected Attendance</h3>
                    <p className="text-sm text-muted-foreground">2000+ Participants</p>
                    <p className="text-sm text-muted-foreground">50+ Speakers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">About BCON</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                BCON (Business Conference) is E-Cell IIT Delhi's flagship annual event that brings together thousands of aspiring entrepreneurs, industry leaders, investors, and innovators under one roof. This two-day extravaganza features inspiring keynotes, engaging panel discussions, intense pitch competitions, and valuable networking opportunities.
              </p>
              <p className="leading-relaxed">
                Whether you're a student exploring entrepreneurship, a budding founder seeking guidance, or an established entrepreneur looking to give back, BCON offers something valuable for everyone. Join us for an unforgettable experience of learning, networking, and inspiration.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">Event Schedule</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="w-24 flex-shrink-0">
                      <span className="text-sm font-semibold text-primary font-mono">{item.time}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.event}</h3>
                      <span className="text-xs text-muted-foreground">{item.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{sponsor.name}</h3>
                  <p className="text-sm text-muted-foreground">{sponsor.tier} Sponsor</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Join BCON 2025?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Register now to secure your spot at India's premier entrepreneurship conference. Limited seats available!
              </p>
              <Button size="lg" className="gap-2" data-testid="button-register">
                Register Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
