import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const openTeamsCalendar = () => {
    const teamsAppUrl = "msteams://teams.microsoft.com/l/calendar/0/0";
    window.location.href = teamsAppUrl;
  };

  const eventDetails = [
    {
      icon: Calendar,
      label: "Date",
      value: "20th February 2026",
    },
    {
      icon: Clock,
      label: "Time",
      value: "12:00 PM - 3:00 PM",
    },
    {
      icon: MapPin,
      label: "Venue",
      value: "L-14 Board Room",
    },
  ];

  return (
    <div className="h-screen bg-slate-900 overflow-hidden">
      <div className="h-[50vh] relative">
        <ImageWithFallback
          src="/grouppic.jpeg"
          alt="Graduation ceremony"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-[50vh] bg-black px-4 py-6 flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center justify-center space-x-2 mb-2 text-amber-500">
              <Sparkles size={18} />
              <h1 className="text-xl sm:text-2xl font-semibold uppercase tracking-wider">Event Details</h1>
              <Sparkles size={18} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid md:grid-cols-3 gap-5"
          >
            {eventDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.12 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                {detail.label === "Date" ? (
                  <button
                    type="button"
                    onClick={openTeamsCalendar}
                    className="relative w-full text-left bg-slate-900 border border-amber-500/30 rounded-2xl p-6 hover:border-amber-500/45 transition-all cursor-pointer"
                    title="Open Microsoft Teams Calendar"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                      <detail.icon size={24} className="text-slate-900" />
                    </div>
                    <h3 className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-2">{detail.label}</h3>
                    <p className="text-white text-2xl font-bold">{detail.value}</p>
                  </button>
                ) : (
                  <div className="relative bg-slate-900 border border-amber-500/30 rounded-2xl p-6 hover:border-amber-500/45 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                      <detail.icon size={24} className="text-slate-900" />
                    </div>
                    <h3 className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-2">{detail.label}</h3>
                    <p className="text-white text-2xl font-bold">{detail.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
