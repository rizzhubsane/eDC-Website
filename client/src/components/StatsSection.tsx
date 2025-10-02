import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Calendar } from 'lucide-react';

interface StatCardProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  delay: number;
  inView: boolean;
}

function StatCard({ icon: Icon, value, suffix, label, delay, inView }: StatCardProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        delay,
      });
      return controls.stop;
    }
  }, [inView, count, value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="p-8 text-center hover-elevate">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-5xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent font-mono">
            <motion.span>{rounded}</motion.span>
            {suffix}
          </div>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </Card>
    </motion.div>
  );
}

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: TrendingUp,
      value: 50,
      suffix: '+',
      label: 'Startups Incubated',
    },
    {
      icon: Users,
      value: 10,
      suffix: 'k+',
      label: 'Social Media Reach',
    },
    {
      icon: Calendar,
      value: 100,
      suffix: '+',
      label: 'Events Hosted',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-card" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              delay={index * 0.1}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
