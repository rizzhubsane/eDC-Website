import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import maleCoordinator from '@assets/generated_images/Team_coordinator_male_headshot_9fb1b1d3.png';
import femaleCoordinator from '@assets/generated_images/Team_coordinator_female_headshot_8bf1931c.png';

// todo: remove mock functionality
const teamMembers = [
  {
    name: 'Arjun Sharma',
    position: 'Overall Coordinator',
    image: maleCoordinator,
  },
  {
    name: 'Priya Patel',
    position: 'Vice Coordinator',
    image: femaleCoordinator,
  },
  {
    name: 'Rohan Verma',
    position: 'Events Head',
    image: maleCoordinator,
  },
  {
    name: 'Ananya Singh',
    position: 'Marketing Head',
    image: femaleCoordinator,
  },
  {
    name: 'Vikram Kumar',
    position: 'Tech Head',
    image: maleCoordinator,
  },
  {
    name: 'Sneha Reddy',
    position: 'Finance Head',
    image: femaleCoordinator,
  },
];

export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background" data-testid="team-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate individuals driving E-Cell's mission forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
