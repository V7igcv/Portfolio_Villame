import {
  Code2,
  Server,
  Database,
  Wrench,
  Palette,
  BriefcaseBusiness,
  ClipboardList,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";

const technicalSkills = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "Vue.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "PHP",
      "Laravel",
      "Inertia.js",
      "Node.js",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "MySQL Workbench",
      "pgAdmin",
      "Vercel",
    ],
  },
  {
    title: "Design & Collaboration",
    icon: Palette,
    skills: [
      "Figma",
      "Canva",
      "Jira",
    ],
  },
];

const professionalCompetencies = [
  {
    title: "Business Analysis",
    icon: BriefcaseBusiness,
    skills: [
      "Requirements Gathering",
      "Stakeholder Communication",
      "Business Process Analysis",
      "Functional Documentation",
      "System Analysis & Design",
      "UML Modeling",
    ],
  },
  {
    title: "Project Management",
    icon: ClipboardList,
    skills: [
      "Project Planning",
      "Team Coordination",
      "Rapid Application Development",
      "Project Documentation",
    ],
  },
  {
    title: "Software Development",
    icon: Layers3,
    skills: [
      "Full Stack Development",
      "RESTful APIs",
      "CRUD Applications",
      "Database Design",
      "Relational Database Modeling",
      "UI Prototyping",
    ],
  },
];

function SkillCard({ skillGroup, index }) {
  const Icon = skillGroup.icon;

  return (
    <motion.article
      className="group rounded-2xl border border-slate-800 bg-[#0D1117] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
    >
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/15">
          <Icon className="h-5 w-5" />
        </div>

        <h3 className="text-lg font-semibold text-white">
          {skillGroup.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skillGroup.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-blue-500/40 hover:text-blue-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function CompetencyCard({ competency, index }) {
  const Icon = competency.icon;

  return (
    <motion.article
      className="group rounded-2xl border border-slate-800 bg-[#0D1117] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
    >
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/15">
          <Icon className="h-5 w-5" />
        </div>

        <h3 className="text-lg font-semibold text-white">
          {competency.title}
        </h3>
      </div>

      <ul className="space-y-3">
        {competency.skills.map((skill) => (
          <li
            key={skill}
            className="flex items-start gap-3 text-sm leading-6 text-slate-400"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function Skills() {
  return (
    <section
      id="skills"
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
              Skills
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Technical Arsenal
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Skills and tools I use to analyze, design, build, test, and
            deliver practical digital solutions.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mt-12">
          <h3 className="mb-6 text-xl font-semibold text-white">
            Technical Skills
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technicalSkills.map((skillGroup, index) => (
              <SkillCard
                key={skillGroup.title}
                skillGroup={skillGroup}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Professional Competencies */}
        <div className="mt-16">
          <h3 className="mb-6 text-xl font-semibold text-white">
            Professional Competencies
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {professionalCompetencies.map((competency, index) => (
              <CompetencyCard
                key={competency.title}
                competency={competency}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;