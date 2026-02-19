import { motion } from "motion/react";
import { Clock, Music, Award, Camera, Coffee, Users, Trophy, Heart } from "lucide-react";

export default function Program() {
  const schedule = [
    {
      time: "Item 01",
      title: "Welcome Address & Opening Note",
      description: "Opening remarks to begin the graduation ceremony.",
      icon: Users,
    },
    {
      time: "Item 02",
      title: "Introduction of Dignitaries",
      description: "Introduction of invited dignitaries and honored guests.",
      icon: Users,
    },
    {
      time: "Item 03",
      title: "Address by the Chief Guest",
      description: "Special address by Mr. Abhimod K.",
      icon: Award,
    },
    {
      time: "Item 04",
      title: "Address by MSU Leadership",
      description: "Leadership message by Ms. Aparna KS and Mr. Soumyadip Bhattacharjee.",
      icon: Users,
    },
    {
      time: "Item 05",
      title: "MSU Journey - Short Film Screening",
      description: "Screening of the journey and milestones of the batch.",
      icon: Music,
    },
    {
      time: "Item 06",
      title: "Interactive Q&A Session",
      description: "Interactive session with leaders and guests.",
      icon: Heart,
    },
    {
      time: "Item 07",
      title: "Red Tag & Certificate Ceremony",
      description: "Formal red tag and certificate presentation.",
      icon: Trophy,
    },
    {
      time: "Item 08",
      title: "Group Photograph & Refreshments",
      description: "Official group photo followed by refreshments.",
      icon: Camera,
    },
  ];

  const highlights = [
    {
      title: "Chief Guest Address",
      description: "Ar. (Prof.) Abhimod K",
      icon: Award,
      color: "from-amber-400 to-amber-600",
    },
    {
      title: "MSU Leadership Address",
      description: "Ms. Aparna KS",
      icon: Users,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "MSU Leadership Address",
      description: "Mr. Soumyadip Bhattacharjee",
      icon: Users,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Closing",
      description: "Group Photograph & Refreshments",
      icon: Coffee,
      color: "from-green-400 to-green-600",
    },
  ];

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
            <Clock size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Schedule</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Event Program
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A carefully curated program to celebrate our graduates and their achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Time */}
                  <div className="flex-shrink-0 w-24 sm:w-32 text-right">
                    <span className="text-amber-500 font-bold text-lg">{item.time}</span>
                  </div>

                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                      <item.icon size={24} className="text-slate-900" />
                    </div>
                    {index < schedule.length - 1 && (
                      <div className="absolute top-12 left-1/2 w-0.5 h-12 bg-amber-500/20 -translate-x-1/2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="bg-slate-800 border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/40 transition-all">
                      <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Special Highlights
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all`}></div>
                <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-amber-500/40 transition-all">
                  <div className={`w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mb-4`}>
                    <highlight.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-slate-400 text-sm">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-800 to-slate-800/50 border border-amber-500/20 rounded-2xl p-8"
        >
          <h3 className="text-white font-bold text-2xl mb-6 text-center">
            Important Information
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 text-slate-300">
            <div>
              <h4 className="text-amber-500 font-semibold mb-3">Dress Code</h4>
              <p className="text-sm">Formal attire is recommended. Graduates must wear academic regalia provided by the university.</p>
            </div>
            <div>
              <h4 className="text-amber-500 font-semibold mb-3">Seating</h4>
              <p className="text-sm">Reserved seating for graduates. General seating is first-come, first-served for guests.</p>
            </div>
            <div>
              <h4 className="text-amber-500 font-semibold mb-3">Photography</h4>
              <p className="text-sm">Professional photographers will be present. Personal photography is allowed but no flash during ceremony.</p>
            </div>
            <div>
              <h4 className="text-amber-500 font-semibold mb-3">Parking</h4>
              <p className="text-sm">Complimentary parking available at the university main lot. Please arrive 30 minutes early.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
