import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import preloaderVideo from '@assets/preloader.mov';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hard block scroll while preloader is visible
    if (isLoading) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          data-testid="preloader"
        >
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-[320px] max-w-[80vw]"
          >
            <video
              src={preloaderVideo}
              autoPlay
              muted
              playsInline
              preload="auto"
              className="w-full h-auto rounded-2xl shadow-lg"
              onEnded={() => setIsLoading(false)}
              onError={() => {
                // If the video errors, keep preloader visible (do not open site early)
                // Optionally could attempt a replay:
                // e.currentTarget.load(); e.currentTarget.play().catch(() => {});
              }}
              onLoadedData={(e) => {
                const v = e.currentTarget;
                if (v.paused) {
                  v.play().catch(() => {
                    // If autoplay is blocked, keep preloader until user gesture or video ends
                  });
                }
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
