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
            About EDC IIT Delhi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fostering the entrepreneurial spirit and driving innovation across campus
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
                The Entrepreneurship Development Cell at IIT Delhi is dedicated to nurturing the entrepreneurial mindset among students and young professionals. We believe in the power of innovation and provide a platform for aspiring entrepreneurs to transform their ideas into successful ventures.
              </p>
              <p className="text-base leading-relaxed">
                Through our comprehensive programs including workshops, mentorship sessions, networking events, and our flagship conference BCON, we create an ecosystem that supports every stage of the entrepreneurial journey.
              </p>
              <p className="text-base leading-relaxed">
                Our community has successfully incubated numerous startups, connected thousands of entrepreneurs, and continues to be a driving force in India's startup ecosystem. Join us in shaping the future of innovation.
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
