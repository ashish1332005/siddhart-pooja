import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RoyalGate from './components/RoyalGate';
import AnnouncementSection from './components/AnnouncementSection';
import WardrobeGuide from './components/WardrobeGuide';
import VenueSection from './components/VenueSection';
import AudioPlayer from './components/AudioPlayer';
import FlyingGuideBird from './components/FlyingGuideBird';

export default function App() {
  const [isGateOpened, setIsGateOpened] = useState(false);
  const [startMusic, setStartMusic] = useState(false);

  const handleGateOpened = () => {
    setIsGateOpened(true);
    setStartMusic(true);
    // Instant reset scroll to top of main content
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative w-full min-h-screen bg-[#f6eee2] text-[#3a080d] select-none font-serif-royal">
      
      {/* Background Audio Player */}
      <AudioPlayer autoPlayTrigger={startMusic} />

      {/* Flying Guide Bird (Scroll-driven animated dove) */}
      {isGateOpened && <FlyingGuideBird />}

      <AnimatePresence mode="wait">
        {!isGateOpened ? (
          /* LANDING GATE SCREEN (Active before opening) */
          <motion.section 
            key="hero-gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            id="hero-section" 
            className="fixed inset-0 z-50 w-full h-screen flex flex-col items-center justify-between overflow-hidden bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('/assets/padam/hero-bg-BoJZa16A.webp')`,
              backgroundSize: '100% 100%'
            }}
          >
            <div className="absolute inset-0 bg-[#f6eee2]/10 pointer-events-none" />

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-between pt-0 pb-1 sm:pb-3">
              <RoyalGate onGateOpened={handleGateOpened} />
            </div>
          </motion.section>
        ) : (
          /* MAIN INVITATION SITE (Clean in-place reveal without top-to-bottom scroll motion) */
          <motion.div 
            key="main-sections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
          >
            {/* SECTION 1: ANNOUNCEMENT & LIVE COUNTDOWN (PROPER UN-CROPPED 100% SCALE) */}
            <section 
              id="announcement-section" 
              className="relative w-full min-h-screen flex flex-col items-center justify-center py-12 px-4 border-b border-[#d4af37]/30 overflow-hidden bg-no-repeat bg-center"
              style={{
                backgroundImage: `url('/assets/padam/families-bg-Bdmrjm8V.webp')`,
                backgroundSize: '100% 100%'
              }}
            >
              <div className="absolute inset-0 bg-[#f6eee2]/10 pointer-events-none" />
              
              <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center justify-center">
                <AnnouncementSection />
              </div>
            </section>

            {/* SECTION 2: WARDROBE GUIDE 3D CAROUSEL */}
            <section 
              id="wardrobe-section" 
              className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 border-b border-[#d4af37]/30 overflow-hidden bg-no-repeat bg-center"
              style={{
                backgroundImage: `url('/assets/padam/schedule-bg-CrjkodkA.webp')`,
                backgroundSize: '100% 100%'
              }}
            >
              <div className="absolute inset-0 bg-[#f6eee2]/10 pointer-events-none" />

              <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
                <WardrobeGuide />
              </div>
            </section>

            {/* SECTION 3: THE VENUE */}
            <section 
              id="venue-section" 
              className="relative w-full min-h-screen min-h-[100dvh] flex flex-col items-center justify-center pt-1 sm:pt-3 pb-6 px-4 border-b border-[#d4af37]/30 overflow-hidden bg-no-repeat bg-center"
              style={{
                backgroundImage: `url('/assets/padam/reception-bg-Bhu2sMue.webp')`,
                backgroundSize: '100% 100%'
              }}
            >
              <div className="absolute inset-0 bg-[#f6eee2]/10 pointer-events-none" />

              <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center justify-center">
                <VenueSection />
              </div>
            </section>

            {/* SECTION 4: FOOTER */}
            <footer 
              id="footer-section" 
              className="relative w-full py-16 px-4 flex flex-col items-center justify-center text-center overflow-hidden bg-no-repeat bg-center"
              style={{
                backgroundImage: `url('/assets/padam/rsvp-bg-I-N3en4m.webp')`,
                backgroundSize: '100% 100%'
              }}
            >
              <div className="absolute inset-0 bg-[#f6eee2]/15 pointer-events-none" />

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center gap-3 max-w-md"
              >
                <div className="w-16 h-16 mb-1">
                  <img 
                    src="/assets/padam/1.png" 
                    alt="PS Logo" 
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>
                
                <div className="w-full max-w-[260px] sm:max-w-[320px] my-1">
                  <img 
                    src="/assets/padam/siddhart-pooja.png" 
                    alt="Siddhart & Pooja" 
                    className="w-full h-auto object-contain filter drop-shadow-sm mx-auto"
                  />
                </div>
                
                <span className="font-serif-royal text-sm text-[#8c6227] tracking-wider uppercase font-semibold">
                  4–5 December 2026 • Udaipur (Raj.)
                </span>

                <p className="font-serif-royal text-xs text-[#5c131a]/80 italic mt-2">
                  "We look forward to celebrating our special moments with you!"
                </p>

                {/* RSVP Mallani Family */}
                <div className="mt-4 pt-4 border-t border-[#8c6227]/25 w-full max-w-xs text-center flex flex-col items-center">
                  <span className="font-serif-royal text-xs uppercase tracking-[0.25em] text-[#8c6227] font-bold">
                    RSVP
                  </span>
                  <span className="font-serif-royal text-lg sm:text-xl font-bold text-[#5c131a] mt-0.5 tracking-wide">
                    Mallani Family
                  </span>
                </div>

              </motion.div>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
