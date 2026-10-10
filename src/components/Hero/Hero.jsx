import { useEffect, useState } from "react";
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  Phone,
  Code2,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "Fullstack Developer",
  "Business Analyst",
  "Project Manager",
];

function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((previousRole) => (previousRole + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center px-6 pt-20"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 py-16 lg:grid-cols-5 lg:gap-16 lg:py-20">
        {/* Left Side */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Rotating Role Tag */}
          <div className="mb-6 inline-flex min-h-9 items-center overflow-hidden rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 text-sm font-medium text-blue-400">
            <motion.span
              key={roles[currentRole]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {roles[currentRole]}
            </motion.span>
          </div>

          {/* Name */}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Ian Gabriel C. Villame
          </h1>

          {/* Short Description */}
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
            I build practical digital solutions that combine thoughtful design,
            technology, and real-world problem solving.
          </p>

          {/* Professional Description */}
          <p className="mt-5 max-w-3xl text-lg leading-7 text-slate-400 sm:text-base">
            Recent Information Technology graduate with experience in fullstack
            web development, system analysis and design, project management,
            business analysis, and multimedia presentation.
            <br />
            Helped develop a Laravel/Vue queuing system for the City Government
            of Ligao to automate and simplify real operational work.
          </p>

          {/* Divider */}
          <hr className="my-8 max-w-3xl border-slate-700/70" /> 

          {/* Personal Information */}
          <div className="mt-8 grid max-w-3xl grid-cols-1 gap-4 text-sm text-slate-400 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-blue-400" />
                <span className="font-medium">Location</span>
              </div>
              <span className="text-sm text-gray-400">Albay, Philippines</span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-blue-400" />
                <span className="font-medium">Email</span>
              </div>
              <a
                href="mailto:iangabrielcvillame@gmail.com"
                className="transition-colors hover:text-white"
              >
                iangabrielcvillame@gmail.com
              </a>
            </div>


            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                <span className="font-medium">Phone</span>
              </div>
              <a
                href="tel:09764758864"
                className="transition-colors hover:text-white"
              >
                09764758864
              </a>
            </div>


            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <ExternalLink className="h-4 w-4 shrink-0 text-blue-400" />
                <span className="font-medium">LinkedIn</span>
              </div>
              <a
                href="https://www.linkedin.com/in/ian-gabriel-villame-491145410/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                LinkedIn Profile
              </a>
            </div>


            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <Code2 className="h-4 w-4 shrink-0 text-blue-400" />
                <span className="font-medium">GitHub</span>
              </div>
              <a
                href="https://github.com/V7igcv"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                V7igcv
              </a>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-8 max-w-3xl border-slate-700/70" />

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-500"
            >
              View Work
              <ArrowDown className="h-4 w-4" />
            </a>

            <a
              href="/Villame-resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-slate-600 hover:bg-slate-800"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-500/40 px-5 py-3 text-sm font-semibold text-blue-400 transition-all hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          className="flex justify-center lg:col-span-2 lg:justify-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-1 rounded-2xl bg-blue-600/20 blur-xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0D1117]">
              <img
                src="/images/Villame_Profile.jpg"
                alt="Ian Gabriel C. Villame"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;