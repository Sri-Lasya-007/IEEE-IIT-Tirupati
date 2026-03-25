import LightRays from './LightRays';
import ieeeLogoImg from '@/assets/ieee_logo.png';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0A2666' }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#4a90d9"
        raysSpeed={0.8}
        lightSpread={1.2}
        rayLength={2.5}
        pulsating
        fadeDistance={1.2}
        saturation={0.8}
        followMouse
        mouseInfluence={0.08}
        noiseAmount={0.05}
        distortion={0.1}
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="animated-gradient-text with-border">
          <div className="gradient-overlay" />
          <div className="flex items-center gap-4 md:gap-6">
            <img
              src={ieeeLogoImg}
              alt="IEEE Logo"
              className="h-20 md:h-28 lg:h-32 w-auto brightness-0 invert"
            />
            <div className="flex flex-col">
              <span className="text-gradient text-3xl md:text-5xl lg:text-6xl font-bold leading-tight hero-glow">
                IEEE Student Branch
              </span>
              <span className="text-gradient text-xl md:text-3xl lg:text-4xl font-light tracking-wider text-center mt-1 hero-glow">
                IIT Tirupati
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
