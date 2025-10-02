import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import hackathonImg from '@assets/generated_images/Hackathon_initiative_card_image_3f6face0.png';
import pitchImg from '@assets/generated_images/Pitch_competition_card_image_704b6b0e.png';
import networkingImg from '@assets/generated_images/Networking_event_card_image_b5d6f963.png';
import mentorshipImg from '@assets/generated_images/Mentorship_program_card_image_285eb54b.png';
import incubatorImg from '@assets/generated_images/Incubator_program_card_image_8e1fcf91.png';
import workshopImg from '@assets/generated_images/Workshop_series_card_image_639228ea.png';

const initiatives = [
  {
    title: 'Hackathons',
    description: 'Intensive coding competitions where innovation meets execution. Build solutions to real-world problems.',
    image: hackathonImg,
  },
  {
    title: 'Pitch Competitions',
    description: 'Showcase your startup ideas to investors and industry experts. Win funding and mentorship.',
    image: pitchImg,
  },
  {
    title: 'Networking Events',
    description: 'Connect with fellow entrepreneurs, investors, and industry leaders to expand your network.',
    image: networkingImg,
  },
  {
    title: 'Mentorship Program',
    description: 'Get personalized guidance from successful entrepreneurs and industry veterans.',
    image: mentorshipImg,
  },
  {
    title: 'Startup Incubator',
    description: 'Access resources, workspace, and support to transform your idea into a thriving business.',
    image: incubatorImg,
  },
  {
    title: 'Workshop Series',
    description: 'Learn essential entrepreneurial skills through hands-on workshops and training sessions.',
    image: workshopImg,
  },
];

export default function InitiativesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background" data-testid="initiatives-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Flagship Initiatives
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive programs designed to support every stage of your entrepreneurial journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover-elevate transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">{initiative.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full gap-2"
                    data-testid={`button-know-more-${initiative.title.toLowerCase().replace(' ', '-')}`}
                  >
                    Know More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
