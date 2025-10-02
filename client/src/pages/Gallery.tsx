import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import GalleryGrid from '@/components/GalleryGrid';

// todo: remove mock functionality
const categories = ['All', 'Events', 'Workshops', 'Competitions', 'Networking'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="min-h-screen pt-24 pb-12" data-testid="page-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Capturing moments of innovation, collaboration, and inspiration
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  console.log(`Filtered to: ${category}`);
                  setActiveCategory(category);
                }}
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GalleryGrid />
        </motion.div>
      </div>
    </div>
  );
}
