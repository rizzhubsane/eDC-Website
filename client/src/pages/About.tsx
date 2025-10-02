import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import TeamSection from '@/components/TeamSection';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To cultivate an entrepreneurial ecosystem that transforms innovative ideas into successful ventures, empowering students to become future business leaders.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be India\'s premier hub for student entrepreneurship, driving innovation and creating sustainable impact on society and economy.',
  },
  {
    icon: Heart,
    title: 'Core Values',
    description: 'Innovation, Integrity, Collaboration, and Excellence guide everything we do. We believe in building a supportive community where ideas flourish.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We champion creative thinking and bold experimentation, encouraging our community to push boundaries and challenge conventional wisdom.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12" data-testid="page-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About E-Cell IIT Delhi
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building India's entrepreneurial future, one innovator at a time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="p-8">
            <CardContent className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Founded in 2010, the Entrepreneurship Development Cell at IIT Delhi has been at the forefront of nurturing entrepreneurial talent in one of India's premier institutions. We are more than just a club – we are a thriving community of dreamers, innovators, and doers who believe in the power of entrepreneurship to change the world.
              </p>
              <p className="text-lg leading-relaxed">
                Over the years, we have successfully incubated over 50 startups, many of which have gone on to raise significant funding and make meaningful impact in their respective domains. Our alumni network spans across industries and geographies, creating a robust ecosystem of support for current and aspiring entrepreneurs.
              </p>
              <p className="text-lg leading-relaxed">
                Through our flagship events, workshops, mentorship programs, and incubation support, we provide a comprehensive platform for students to explore, learn, and execute their entrepreneurial ideas. Whether you're just beginning to explore entrepreneurship or already working on your startup, E-Cell IIT Delhi is here to support your journey.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full hover-elevate">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <TeamSection />
      </div>
    </div>
  );
}
