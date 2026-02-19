import { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Note: Using a placeholder audio URL. Replace with actual graduation music */}
      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowControls(!showControls)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg flex items-center justify-center text-slate-900 hover:shadow-xl transition-shadow"
        >
          <Music size={24} />
        </motion.button>

        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-16 right-0 bg-slate-800 rounded-lg shadow-xl p-3 flex items-center space-x-2 border border-amber-500/20"
            >
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-amber-500 text-slate-300 hover:text-slate-900 transition-colors flex items-center justify-center"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={toggleMute}
                className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-amber-500 text-slate-300 hover:text-slate-900 transition-colors flex items-center justify-center"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
