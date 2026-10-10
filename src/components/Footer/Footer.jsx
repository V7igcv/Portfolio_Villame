import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row lg:px-8">
        <div className="text-center sm:text-left">
          <a
            href="#hero"
            className="text-sm font-semibold text-white transition-colors hover:text-blue-400"
          >
            Ian Gabriel C. Villame
          </a>

          <p className="mt-1 text-xs text-slate-500">
            Information Technology Graduate
          </p>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Ian Gabriel C. Villame. All rights
          reserved.
        </p>

        <motion.a
          href="#hero"
          whileHover={{ y: -2 }}
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-white"
        >
          Back to Top
          <ArrowUp className="h-4 w-4" />
        </motion.a>
      </div>
    </footer>
  );
}

export default Footer;