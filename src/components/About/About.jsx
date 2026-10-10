import {
  FileSearch,
  BarChart3,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

const strengths = [
  {
    title: "Understood Before Built",
    description:
      "I start with the people and the process, not the code. I sit down with the stakeholders, map how the work actually happens, and turn it into requirements, SRS documents, and UML models before building.",
    icon: FileSearch,
  },
  {
    title: "Measured, Not Assumed",
    description:
      "I validate what I build. e-LegTas was evaluated against ISO/IEC 25010 and scored 4.64/5.0, and a security scan found no high or medium-risk vulnerabilities. For Quennect, I ran test case sessions with end users and LGU stakeholders before deployment.",
    icon: BarChart3,
  },
  {
    title: "Built for Public Service",
    description:
      "Government systems need to be clear, secure, and dependable. I design role-based access, real-time monitoring, and reporting that fits how offices already work, and I think ahead to deployment.",
    icon: Building2,
  },
];

function About() {
  return (
    <section
      id="about"
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
              About Me
            </span>
          </div>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            What I Bring
          </h2>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="mt-10 grid gap-8 lg:grid-cols-5 lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="lg:col-span-3">
            <p className="text-lg leading-8 text-slate-300">
              I started in business analysis and project management, then
              moved into full stack development, and now into AI automation.
              Today most of my work sits where requirements meet code:
              Laravel/Vue and React/Node systems built for real government
              offices, backed by clear documentation and tested with the
              people who use them.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              I recently completed TESDA&apos;s AI Prompting for Automation
              Level III and earned the Microsoft Azure AI Fundamentals
              certification, and I&apos;m applying that to the next generation
              of the systems I build.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="border-l-2 border-blue-500/50 pl-6">
              <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
                End-to-End Ownership
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                My strongest signal is end-to-end ownership. I have led a
                GIS-based evacuation management system for Legazpi City&apos;s
                CDRRMO from requirements gathering to a live deployment, and
                built a queuing system adopted across all 24 Citizen&apos;s
                Charter offices of Ligao City Hall, handling the analysis, the
                interfaces, the backend, and the documentation myself.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Strength Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;

            return (
              <motion.article
                key={strength.title}
                className="group rounded-2xl border border-slate-800 bg-[#0D1117] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/15">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {strength.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {strength.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;