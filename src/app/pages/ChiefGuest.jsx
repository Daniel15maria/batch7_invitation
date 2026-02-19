import { motion } from "motion/react";
import { Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ChiefGuest() {
  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4 text-amber-500">
            <Award size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Guests for the day</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Chief Guest
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We are honored to host a distinguished leader who has inspired us Mu-Sigmans
          </p>
        </motion.div>

        {/* Guest Profile */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-xs sm:max-w-sm mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl blur-2xl"></div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-4 border-amber-500/20 bg-slate-950">
              <ImageWithFallback
                src="/abhimod.jpg"
                alt="Chief Guest"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center"
          >
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">
                Mr.Abhimod K
              </h2>
              <p className="text-amber-500 text-xl font-semibold">
                Leadership- Mu Sigma (Consultant - Learning & Development)
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Guest Photo Placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 gap-6 mb-20 max-w-3xl mx-auto"
        >
          <div className="bg-slate-800 border border-amber-500/20 rounded-xl p-5">
            <div className="aspect-[16/10] rounded-lg overflow-hidden border-2 border-amber-500/40 bg-slate-950 mb-3">
              <ImageWithFallback
                src="/aparna.png"
                alt="Aparna KS"
                className="w-full h-full object-contain object-center"
              />
            </div>
            <h3 className="text-white font-semibold text-base">Aparna KS </h3>
            <p className="text-slate-400 text-xs">Apprentice Leader, Mu Sigma Business Solutions</p>
          </div>

          <div className="bg-slate-800 border border-amber-500/20 rounded-xl p-5">
            <div className="aspect-[16/10] rounded-lg overflow-hidden border-2 border-amber-500/40 bg-slate-950 mb-3">
              <ImageWithFallback
                src="/sowmyadhip.jpg"
                alt="Soumyadip Bhattacharya"
                className="w-full h-full object-contain object-center"
              />
            </div>
            <h3 className="text-white font-semibold text-base">Soumyadip Bhattacharya </h3>
            <p className="text-slate-400 text-xs">Batch Owner, Trainee Decision Scientist @ Mu Sigma Inc.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
