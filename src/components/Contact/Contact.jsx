import {
  Mail,
  ExternalLink,
  Code2,
  UserRound,
} from "lucide-react";
import { motion } from "framer-motion";
import contactLinks from "../../data/contact";

const iconMap = {
  "Contact by Email": Mail,
  "LinkedIn": ExternalLink,
  "GitHub": Code2,
  "Facebook": UserRound,
};

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800/70 bg-[#050505] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-800 bg-[#0D1117] px-6 py-12 text-center sm:px-10 lg:px-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Get in Touch
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a process that still runs on paper or spreadsheets?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I build Laravel, Vue, and React web applications for teams that
            need clear requirements, reliable systems, and real documentation
            behind them. Let&apos;s turn your manual workflows into something
            your whole office can use.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {contactLinks.map((link) => {
              const Icon = iconMap[link.label];

              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.label === "Contact by Email" ? undefined : "_blank"}
                  rel={
                    link.label === "Contact by Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-[#050505] px-5 py-3 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;