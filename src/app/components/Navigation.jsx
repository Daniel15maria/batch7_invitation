import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { path: "/home", label: "Home" },
    { path: "/chief-guest", label: "Guests" },
    { path: "/program", label: "Program" },
    { path: "/graduates", label: "Graduates" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <img
              src="data:image/jpeg;base64,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"
              alt="Company logo"
              className="w-10 h-10 rounded-full object-contain bg-white p-1"
            />
            <span className="text-white font-semibold text-lg hidden sm:block">
              Graduation-Batch 7
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  location.pathname === link.path
                    ? "bg-amber-500 text-slate-900 font-medium"
                    : "text-slate-300 hover:text-white hover:bg-slate-900/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/85 border-t border-amber-500/20 backdrop-blur-sm"
          >
            <div className="px-4 py-2 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    location.pathname === link.path
                      ? "bg-amber-500 text-slate-900 font-medium"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
