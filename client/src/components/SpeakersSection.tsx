import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';

// todo: remove mock functionality
const speakers = [
  { name: 'Kunal Shah', company: 'CRED' },
  { name: 'Ritesh Agarwal', company: 'OYO' },
  { name: 'Bhavish Aggarwal', company: 'Ola' },
  { name: 'Falguni Nayar', company: 'Nykaa' },
  { name: 'Vijay Shekhar Sharma', company: 'Paytm' },
  { name: 'Deepinder Goyal', company: 'Zomato' },
];

export default function SpeakersSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-card" data-testid="speakers-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Past Speakers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from the best entrepreneurs and industry leaders
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-start"
              >
                <Card className="min-w-[280px] p-6 hover-elevate">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary font-mono">
                        {speaker.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{speaker.name}</h3>
                      <p className="text-sm text-muted-foreground">{speaker.company}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
