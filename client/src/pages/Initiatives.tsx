import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, TrendingUp, Users, GraduationCap, Rocket, Briefcase } from 'lucide-react';
import hackathonImg from '@assets/generated_images/Hackathon_initiative_card_image_3f6face0.png';
import pitchImg from '@assets/generated_images/Pitch_competition_card_image_704b6b0e.png';
import networkingImg from '@assets/generated_images/Networking_event_card_image_b5d6f963.png';
import mentorshipImg from '@assets/generated_images/Mentorship_program_card_image_285eb54b.png';
import incubatorImg from '@assets/generated_images/Incubator_program_card_image_8e1fcf91.png';
import workshopImg from '@assets/generated_images/Workshop_series_card_image_639228ea.png';

const initiatives = [
  {
    icon: Code,
    title: 'Venture Studio',
    description: 'Intensive 24-48 hour coding competitions where teams build innovative solutions to real-world problems. Participants get to work with cutting-edge technologies, collaborate with talented peers, and showcase their technical prowess.',
    image: hackathonImg,
    features: ['Cash prizes up to ₹1 Lakh', 'Mentorship from industry experts', 'Networking opportunities', 'Free food and swag'],
  },
  {
    icon: TrendingUp,
    title: 'Industry Connect',
    description: 'Platform for aspiring entrepreneurs to present their startup ideas to a panel of investors, industry veterans, and successful entrepreneurs. Winners receive funding, mentorship, and invaluable feedback.',
    image: pitchImg,
    features: ['Seed funding opportunities', 'Investor connections', 'Media coverage', 'Incubation support'],
  },
  {
    icon: Users,
    title: 'Genesis',
    description: 'Regular meetups, panel discussions, and social events designed to connect students with entrepreneurs, investors, and industry leaders. Build your professional network in a relaxed, engaging environment.',
    image: networkingImg,
    features: ['Meet successful founders', 'Industry insights', 'Career opportunities', 'Collaborative partnerships'],
  },
  {
    icon: GraduationCap,
    title: 'Kinesis',
    description: 'Get paired with experienced entrepreneurs and industry professionals who provide personalized guidance on your startup journey. From ideation to scaling, our mentors have been there and done that.',
    image: mentorshipImg,
    features: ['1-on-1 mentoring sessions', 'Expert guidance', 'Strategic planning help', 'Long-term support'],
  },
  {
    icon: Rocket,
    title: 'Startup Incubator',
    description: 'Comprehensive support system for early-stage startups including workspace, resources, funding connections, and operational guidance. Transform your idea into a viable business with our incubation program.',
    image: incubatorImg,
    features: ['Co-working space', 'Legal & financial support', 'Tech infrastructure', 'Funding assistance'],
  },
  {
    icon: Briefcase,
    title: 'Workshop Series',
    description: 'Hands-on training sessions covering essential entrepreneurial skills like business planning, financial modeling, marketing, product development, and more. Learn from practitioners and apply concepts immediately.',
    image: workshopImg,
    features: ['Expert instructors', 'Practical learning', 'Certificates', 'Networking sessions'],
  },
];

export default function Initiatives() {
  return (
    <div className="min-h-screen pt-24 pb-12" data-testid="page-initiatives">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Initiatives
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programs designed to support every stage of your entrepreneurial journey
          </p>
        </motion.div>

        <div className="space-y-12">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover-elevate">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  </div>
                  <div className="p-8 lg:p-12">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center">
                          <initiative.icon className="w-7 h-7 text-primary" />
                        </div>
                        <CardTitle className="text-3xl">{initiative.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {initiative.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {initiative.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="gap-2" data-testid={`button-learn-more-${initiative.title.toLowerCase().replace(' ', '-')}`}>
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
