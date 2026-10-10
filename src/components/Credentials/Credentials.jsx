import {
  GraduationCap,
  BadgeCheck,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  education,
  certifications,
  achievements,
} from "../../data/credentials";

function Credentials() {
  return (
    <section
      id="credentials"
      className="border-t border-slate-800/70 bg-[#050505] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Credentials
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Education & Certifications
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Academic foundation, professional certifications, and achievements
            that support the work showcased throughout this portfolio.
          </p>
        </motion.div>

        {/* Main Credential Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Education */}
          <motion.article
            className="relative overflow-hidden rounded-2xl border border-blue-500/30 bg-[#0D1117] p-7 sm:p-8 lg:col-span-2"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative glow */}
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
                <GraduationCap className="h-7 w-7" />
              </div>

              <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
                Academic Distinction
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
                {education.distinction}
              </h3>

              <p className="mt-3 text-lg font-medium text-slate-200">
                {education.degree}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {education.institution}
              </p>

              <div className="mt-6 h-px bg-slate-800" />

              <p className="mt-5 text-sm leading-7 text-slate-400">
                {education.description}
              </p>

              <p className="mt-5 text-sm font-medium text-slate-300">
                Graduated {education.graduationDate}
              </p>
            </div>
          </motion.article>

          {/* Certifications + Achievements */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            {/* Certifications */}
            {certifications.map((credential, index) => (
              <motion.article
                key={credential.id}
                className="group rounded-2xl border border-slate-800 bg-[#0D1117] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 sm:p-7"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-colors group-hover:border-blue-500/40 group-hover:bg-blue-500/15">
                    <BadgeCheck className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-blue-400">
                      Certification
                    </p>

                    <h3 className="mt-2 text-lg font-semibold leading-7 text-white sm:text-xl">
                      {credential.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {credential.issuer}
                    </p>

                    <p className="mt-3 text-sm font-medium text-slate-500">
                      {credential.year}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Achievements */}
            {achievements.map((achievement, index) => (
              <motion.article
                key={achievement.id}
                className="group rounded-2xl border border-slate-800 bg-[#0D1117] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 sm:p-7"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: (index + certifications.length) * 0.1,
                }}
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-colors group-hover:border-blue-500/40 group-hover:bg-blue-500/15">
                    <Trophy className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-blue-400">
                      Achievement
                    </p>

                    <h3 className="mt-2 text-lg font-semibold leading-7 text-white sm:text-xl">
                      {achievement.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {achievement.issuer}
                    </p>

                    <p className="mt-3 text-sm font-medium text-slate-500">
                      {achievement.year}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Credentials;