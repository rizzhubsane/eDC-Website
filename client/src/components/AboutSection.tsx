import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aboutImage from '@assets/generated_images/About_section_team_workshop_41809556.png';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About eDC IIT Delhi?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground">
              <p className="text-base leading-relaxed">
              We empower young minds, early-stage startups, and professionals to think big, innovate fearlessly, and build impactful ventures. We partner in your journey by providing the right blend of learning, mentorship, and opportunities. Through workshops, bootcamps, hackathons, competitions, mentorship programmes and funding avenues, we create a thriving ecosystem to turn ideas into reality. With a strong legacy since 2007, eDC continues to inspire and shape the next generation of changemakers across India.
</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="E-Cell Team Workshop"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary via-chart-2 to-chart-3 rounded-2xl opacity-20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
