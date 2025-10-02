import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import InitiativesSection from '@/components/InitiativesSection';
import SpeakersSection from '@/components/SpeakersSection';

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="page-home">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <InitiativesSection />
      <SpeakersSection />
    </div>
  );
}
