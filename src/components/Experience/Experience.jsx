import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import experiences from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-slate-800/70 bg-[#050505] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
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
              Experience
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Role Timeline
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            A timeline of roles and projects where I applied analysis,
            development, project management, and creative skills to real-world
            work.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Timeline Line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-slate-800 sm:left-[15px]" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.id}
                className="relative pl-10 sm:pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/40 bg-[#050505] sm:h-8 sm:w-8">
                  <div className="h-2 w-2 rounded-full bg-blue-500 sm:h-2.5 sm:w-2.5" />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl border border-slate-800 bg-[#0D1117] p-6 transition-all duration-300 hover:border-blue-500/40 sm:p-8">
                  {/* Date */}
                  <p className="text-sm font-medium text-blue-400">
                    {experience.date}
                  </p>

                  {/* Role */}
                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    {experience.role}
                  </h3>

                  {/* Type */}
                  <p className="mt-1 text-sm font-medium text-slate-400">
                    {experience.type}
                  </p>

                  {/* Organization + Location */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
                    <span className="font-medium text-slate-300">
                      {experience.organization}
                    </span>

                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-400" />
                      {experience.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
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

export default Experience;