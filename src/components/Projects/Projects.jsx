import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";
import projects from "../../data/projects";

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const project = projects[currentProject];

  useEffect(() => {
    setCurrentImage(0);
  }, [currentProject]);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage(
        (previousImage) =>
          (previousImage + 1) % project.images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project]);

  const handlePrevious = () => {
    setCurrentProject(
      (previousProject) =>
        (previousProject - 1 + projects.length) % projects.length
    );
  };

  const handleNext = () => {
    setCurrentProject(
      (previousProject) =>
        (previousProject + 1) % projects.length
    );
  };

  return (
    <section
      id="projects"
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
              Projects
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Proof of Work
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Selected projects demonstrating how I approach real problems,
            from understanding requirements to building and delivering
            practical solutions.
          </p>
        </motion.div>

        {/* Project Display */}
        <motion.div
          className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-[#0D1117]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-5">
            {/* Left Content */}
            <div className="p-6 sm:p-8 lg:col-span-3 lg:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-blue-400">
                    {project.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <span className="shrink-0 text-sm font-medium text-slate-500">
                  {String(currentProject + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
                {project.description}
              </p>

              {/* Context */}
              <div className="mt-7">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Context
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {project.context}
                </p>
              </div>

              {/* My Role */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  My Role
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {project.role}
                </p>
              </div>

              {/* Key Decisions */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Key Decisions
                </h4>

                <ul className="mt-3 space-y-2">
                  {project.decisions.map((decision) => (
                    <li
                      key={decision}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-7">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="mt-8 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-slate-600 hover:bg-slate-800"
                  >
                    <Code2 className="h-4 w-4" />
                    GitHub
                  </a>
                )}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[320px] border-t border-slate-800 bg-[#050505] lg:col-span-2 lg:min-h-full lg:border-l lg:border-t-0">
              <div className="flex h-full items-center justify-center p-6">
                <div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-[#0D1117]">
                  <img
                    src={project.images[currentImage]}
                    alt={`${project.title} screenshot ${currentImage + 1}`}
                    className="block h-auto max-h-[500px] w-full object-contain"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />

                  {/* Image Placeholder */}
                  <div className="absolute inset-0 hidden items-center justify-center p-8 text-center">
                    <div>
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                        <ExternalLink className="h-6 w-6" />
                      </div>

                      <p className="font-medium text-white">
                        Project Screenshot
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Add project images to
                        <br />
                        <span className="text-slate-400">
                          public/images/projects/
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Image Indicators */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full border border-slate-700/80 bg-[#050505]/80 px-3 py-2 backdrop-blur-sm">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          aria-label={`View screenshot ${index + 1}`}
                          onClick={() => setCurrentImage(index)}
                          className={`h-1.5 rounded-full transition-all ${
                            index === currentImage
                              ? "w-6 bg-blue-500"
                              : "w-1.5 bg-slate-600 hover:bg-slate-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation */}
          <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4 sm:px-8">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous project"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex gap-1.5">
              {projects.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`View project ${index + 1}`}
                  onClick={() => setCurrentProject(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentProject
                      ? "w-8 bg-blue-500"
                      : "w-1.5 bg-slate-700 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
            >
              <span className="hidden sm:inline">Next</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;