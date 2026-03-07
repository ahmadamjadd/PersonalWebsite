import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Brain, Award, BookOpen, Sparkles, Eye } from "lucide-react";

const skills = [
  {
    category: "Cloud Computing / DevOps",
    icon: Cloud,
    description: "AWS Solutions Architect - Associate & Cloud Practitioner Courses, Linux, Docker, Bash Scripting",
    progress: 90,
    color: "from-primary to-cyber-cyan",
  },
  {
    category: "Generative AI / Agentic AI",
    icon: Sparkles,
    description: "LangGraph Multi-Agent Systems, RAG Pipelines, Groq, ChromaDB, n8n Automation",
    progress: 85,
    color: "from-cyber-magenta to-cyber-purple",
  },
  {
    category: "Machine Learning",
    icon: Brain,
    description: "Stanford ML Specialization - Supervised, Unsupervised & Reinforcement Learning",
    progress: 85,
    color: "from-secondary to-cyber-purple",
  },
  {
    category: "Deep Learning",
    icon: Award,
    description: "Deep Learning by CampusX and Deep Learning with Computer Vision by FreeCodeCamp",
    progress: 80,
    color: "from-accent to-cyber-magenta",
  },
];

// Computer Vision skill for the left side
const computerVisionSkill = {
  category: "Computer Vision",
  icon: Eye,
  description: "YOLO, TensorRT, ONNX, Object Detection, Jetson Orin Nano Deployment",
  progress: 75,
  color: "from-primary to-secondary",
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary mb-2 block">// SYSTEM KERNEL</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold section-heading">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio and Computer Vision */}
          <div className="space-y-6">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-xl"
            >
              <div className="terminal mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="ml-4 font-mono text-xs text-muted-foreground">system_profile.sh</span>
                </div>
                <p className="terminal-prompt font-mono text-sm text-muted-foreground">
                  cat bio.txt
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
    Specializing in <span className="text-primary">Cloud Computing</span>, <span className="text-primary">DevOps</span>, <span className="text-secondary">AI</span>, <span className="text-secondary">Agentic AI</span>, and <span className="text-secondary">AI Automations</span>. 
    Currently architecting scalable AWS infrastructure using Terraform and building intelligent multi-agent systems. 
    Also focuses on training, optimizing, and deploying deep learning models for edge devices.
  </p>
            </motion.div>

            {/* Computer Vision Card - Separate from Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-xl group hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                  <computerVisionSkill.icon className="w-6 h-6 text-primary holo-icon" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-mono font-semibold">{computerVisionSkill.category}</h3>
                    <span className="font-mono text-sm text-primary">{computerVisionSkill.progress}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{computerVisionSkill.description}</p>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${computerVisionSkill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className={`skill-bar-fill bg-gradient-to-r ${computerVisionSkill.color}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <div ref={ref} className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl group hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                    <skill.icon className="w-6 h-6 text-primary holo-icon" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-mono font-semibold">{skill.category}</h3>
                      <span className="font-mono text-sm text-primary">{skill.progress}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.progress}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`skill-bar-fill bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
