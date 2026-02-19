import { motion } from "motion/react";
import { GraduationCap, Search } from "lucide-react";
import { useState } from "react";

export default function Graduates() {
  const [searchQuery, setSearchQuery] = useState("");

  const graduateNames = [
    "Aalam Siddartha Chowdary",
    "Abhisek Hota",
    "Abhishek A B",
    "Abhishek Kumar",
    "Addanki Gayathri",
    "Ameya Kumar Chandrakar",
    "Anala Shanmukha Bhanu Mohan",
    "Ananya G",
    "Ankita Priya",
    "Ankur Kumar",
    "Anurag Verma",
    "Anushree N",
    "Aparna Prakash",
    "Avantika Singh",
    "Ayush Gupta",
    "Bantupalli Manohar",
    "Bina Rai",
    "Chakinarapu Alekh",
    "Charanbir Singh",
    "Daniel Danny Kennedy",
    "Dasari Sai Samrat",
    "Deepak R",
    "Dharnesh K",
    "Geetanjali Singh",
    "Gunjana K E",
    "Harsh Shukla",
    "Jaji Vagdhevi Chinta",
    "Keerthan",
    "Keerthi N",
    "Kunapareddy Sai Srujan",
    "Likitha Sai Conjeevaram",
    "Mallanagouda S N",
    "Manoj Amaladasu",
    "Maria Daniels",
    "Mini Gadhiraju",
    "Mukul Kumar Goel",
    "Nivedhitha N",
    "P Mohammed Sajid",
    "Pavithra D",
    "Piyush kumar singh",
    "Piyush Roy",
    "pragati singh",
    "Rajkumar.R",
    "Ramya Hanamanth Sataraddi",
    "Rithwick V",
    "Roshan A",
    "S Pavani",
    "S.Dixit",
    "Sanjay U",
    "Siva Naga Sai Subash Saka",
    "Sreekumar M",
    "sri lakshmi Srinivas mulakala",
    "Srishti Rupa",
    "Suhel Sharma",
    "Sujit Kumar Panda",
    "Surendiran S",
    "Talapula Mohammed Samreen",
    "Tamilselvan A P",
    "Tirumalasetti Naga Sharvani",
    "Tripathi Abhishek Dharmendra",
    "Varsha Nachiyar V",
    "Vedha Shri S",
    "Yashifa J",
  ];

  const graduates = graduateNames.map((name, index) => ({
    id: index + 1,
    name,
    designation: "Trainee Decision Scientist-1",
  }));

  const filteredGraduates = graduates.filter((graduate) =>
    graduate.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4 text-amber-500">
            <GraduationCap size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Campus 2025- Batch 7</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Graduates
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Celebrating the achievements of {graduates.length} exceptional individuals
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-amber-500/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/40 transition-all"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Graduates List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGraduates.map((graduate, index) => (
            <motion.div
              key={graduate.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 1) }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-slate-800 border border-amber-500/20 rounded-2xl p-6 hover:border-amber-500/40 transition-all">
                <h3 className="text-white font-bold text-xl mb-2">{graduate.name}</h3>
                <p className="text-amber-500 text-sm font-semibold">{graduate.designation}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No results */}
        {filteredGraduates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-slate-600" />
            </div>
            <p className="text-slate-400 text-lg">No graduates found matching your search.</p>
          </motion.div>
        )}

      </div>
    </div>
  );
}
