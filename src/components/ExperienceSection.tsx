import { motion } from "framer-motion";
import { Briefcase, Award, Code2 } from "lucide-react";

const experiences = [
  {
    title: "Head, SDES Subteam",
    company: "Team Foxtrot GIKI",
    period: "Sept 2024 - Present",
    description: "Leading autonomous drone software development by training and optimizing custom YOLO models and implementing real-time navigation logic using Python and DroneKit.",
    achievement: "🏆 1st Place at National PakUAS 2024 and 11th at International Teknofest Türkiye.",
    tech: ["Python", "DroneKit", "TensorRT", "Computer Vision"],
    icon: Award,
    current: true,
  },
  {
    title: "Software Engineering Intern",
    company: "Carbonteq",
    period: "June 2025 - Aug 2025",
    description: "Engineered the official library documentation platform using React and Fumadocs, implementing interactive code testing and scrollycoding features to enhance developer onboarding.",
    tech: ["React", "TypeScript", "Fumadocs", "Technical Writing"],
    icon: Briefcase,
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-accent mb-2 block">// MISSION LOG</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold section-heading">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              } pl-20 md:pl-0`}
            >
              {/* Timeline node */}
              <div
                className={`absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full ${
                  exp.current ? "bg-primary" : "bg-secondary"
                } timeline-node`}
              />

              {/* Content card */}
              <div
                className={`glass-card p-6 rounded-xl hover:border-primary/30 transition-all ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                {/* Header */}
                <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`p-3 rounded-lg ${exp.current ? "bg-primary/10" : "bg-secondary/10"}`}>
                    <exp.icon className={`w-5 h-5 ${exp.current ? "text-primary" : "text-secondary"}`} />
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <span className="font-mono text-xs text-muted-foreground block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="font-mono font-bold text-lg">{exp.title}</h3>
                    <p className="text-primary text-sm">{exp.company}</p>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-muted-foreground text-sm mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.description}
                </p>

                {/* Achievement badge */}
                {exp.achievement && (
                  <div className={`inline-block px-3 py-1 bg-primary/10 rounded-full mb-4 ${index % 2 === 0 ? "md:float-right md:ml-2" : ""}`}>
                    <span className="font-mono text-xs text-primary">{exp.achievement}</span>
                  </div>
                )}

                {/* Tech tags */}
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
