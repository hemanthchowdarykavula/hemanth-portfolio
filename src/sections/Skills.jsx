import { motion } from "framer-motion";
import { Brain, ChartPie, Cloud, Code2, Layout, Sparkles } from "lucide-react";
import { SKILLS } from "../constants";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const icons = {
  Brain,
  ChartPie,
  Cloud,
  Code2,
  Layout,
  Sparkles,
};

const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const prefersReduced = usePrefersReducedMotion();

  return (
    <div className="section-shell" ref={ref}>
      <h2 className="section-title mb-10 text-white md:mb-12">
        Skills
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {SKILLS.map((skill) => {
          const Icon = icons[skill.icon];
          return (
            <motion.div
              key={skill.title}
              className="glass rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl md:p-8"
              whileHover={prefersReduced ? undefined : { scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                {Icon && (
                  <Icon className="text-xl text-accent-teal md:text-2xl" />
                )}
                <h3 className="text-lg font-semibold text-white">
                  {skill.title}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 transition hover:border-white/20 md:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
