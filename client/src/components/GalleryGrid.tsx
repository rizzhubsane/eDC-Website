import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import hackathonImg from '@assets/generated_images/Hackathon_initiative_card_image_3f6face0.png';
import pitchImg from '@assets/generated_images/Pitch_competition_card_image_704b6b0e.png';
import networkingImg from '@assets/generated_images/Networking_event_card_image_b5d6f963.png';
import mentorshipImg from '@assets/generated_images/Mentorship_program_card_image_285eb54b.png';
import incubatorImg from '@assets/generated_images/Incubator_program_card_image_8e1fcf91.png';
import workshopImg from '@assets/generated_images/Workshop_series_card_image_639228ea.png';

// todo: remove mock functionality
const galleryImages = [
  { src: hackathonImg, title: 'Hackathon 2024', category: 'Event' },
  { src: pitchImg, title: 'Pitch Competition Finals', category: 'Competition' },
  { src: networkingImg, title: 'Networking Mixer', category: 'Event' },
  { src: mentorshipImg, title: 'Mentorship Session', category: 'Workshop' },
  { src: incubatorImg, title: 'Incubator Workspace', category: 'Facility' },
  { src: workshopImg, title: 'Entrepreneurship Workshop', category: 'Workshop' },
  { src: hackathonImg, title: 'Team Collaboration', category: 'Event' },
  { src: pitchImg, title: 'Startup Showcase', category: 'Competition' },
  { src: networkingImg, title: 'Industry Connect', category: 'Event' },
];

export default function GalleryGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryImages.map((image, index) => (
        <motion.div
          key={`${image.title}-${index}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <Card className="overflow-hidden hover-elevate transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="relative aspect-video">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{image.title}</h3>
                  <p className="text-xs text-muted-foreground">{image.category}</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
