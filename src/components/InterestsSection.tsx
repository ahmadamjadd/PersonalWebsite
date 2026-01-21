import { motion } from "framer-motion";
import { Cloud, Brain, Cpu, Server, Workflow, Eye, Plane, Microchip } from "lucide-react";

const interests = [
  {
    title: "Cloud Computing",
    icon: Cloud,
    description: "AWS Infrastructure, Serverless (Lambda/Fargate), Terraform (IaC), CI/CD Pipelines",
    color: "primary",
  },
  {
    title: "Artificial Intelligence",
    icon: Brain,
    description: "Computer Vision (YOLO/TensorRT), Deep Learning, Agentic Workflows (LangGraph/RAG)",
    color: "secondary",
  },
  {
    title: "Autonomous Systems",
    icon: Plane,
    description: "Edge AI (Jetson Nano), Drone Navigation (DroneKit), Embedded Systems",
    color: "accent",
  },
];

const techStack = [
  { icon: Server, label: "AWS Lambda" },
  { icon: Cpu, label: "TensorRT" },
  { icon: Workflow, label: "LangGraph" },
  { icon: Eye, label: "YOLO" },
  { icon: Microchip, label: "Jetson Nano" },
  { icon: Cloud, label: "Terraform" },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-secondary mb-2 block">// RESEARCH & TECH</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold section-heading">
            Areas of Interest
          </h2>
        </motion.div>

        {/* Interest Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-xl group hover:border-primary/30 transition-all relative overflow-hidden"
            >
              {/* Holographic glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${interest.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-${interest.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <interest.icon className={`w-8 h-8 text-${interest.color} holo-icon`} />
                </div>
                
                <h3 className="font-mono text-xl font-bold mb-4">{interest.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {interest.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 font-mono text-xs text-muted-foreground/50">
                  [{String(index + 1).padStart(2, '0')}]
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 rounded-xl"
        >
          <p className="font-mono text-xs text-muted-foreground text-center mb-6">
            {"// CORE TECHNOLOGIES"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-primary/10 transition-colors group cursor-default"
              >
                <tech.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsSection;
