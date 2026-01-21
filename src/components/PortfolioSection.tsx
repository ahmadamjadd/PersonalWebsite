import { motion } from "framer-motion";
import { ExternalLink, Github, Cloud, Brain, Server, Activity } from "lucide-react";

const projects = [
  {
    title: "GikiPool",
    description: "Serverless carpooling platform for university students with real-time matching and secure authentication.",
    // Updated "AWS Lambda" to "AWS"
    tech: ["AWS Lambda", "AWS API Gateaway", "DynamoDB", "Cognito", "Terraform", "React"],
    icon: Cloud,
    category: "Cloud",
    color: "primary",
    // Added GitHub Link
    github: "https://github.com/ahmadamjadd/GikiPool"
  },
  {
    title: "Sehat Fahm",
    description: "Multi-agent medical analysis system with Urdu voice accessibility for rural healthcare.",
    tech: ["LangGraph", "RAG", "ChromaDB", "Streamlit", "Python"],
    icon: Brain,
    category: "AI",
    color: "secondary",
    // Added GitHub Link
    github: "https://github.com/ahmadamjadd/MultiAgents/tree/main/HealthInsightsAgent"
  },
  {
    title: "Automated ECS Pipeline",
    description: "CI/CD pipeline for deploying Python applications on AWS Fargate with zero-downtime deployments.",
    tech: ["Terraform", "AWS CodePipeline", "Docker", "ECS", "Fargate"],
    icon: Server,
    category: "DevOps",
    color: "primary",
    // Added GitHub Link
    github: "https://github.com/ahmadamjadd/Automated-ECS-Fargate-Delivery-Pipeline"
  },
  {
    title: "Oral Cancer Detection",
    description: "Histopathological classification system achieving 95% test accuracy using deep learning.",
    tech: ["TensorFlow", "EfficientNetB3", "Flask", "Python", "OpenCV"],
    icon: Activity,
    category: "ML",
    color: "accent",
    // Added GitHub Link
    github: "https://github.com/ahmadamjadd/Deep-Learning/tree/main/CancerDetection"
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary mb-2 block">// DEPLOYED MODULES</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold section-heading">
            Portfolio
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A collection of projects showcasing cloud architecture, AI/ML applications, 
            and full-stack development.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden group hover:border-primary/30 transition-all"
            >
              {/* Card header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${
                project.color === "primary" ? "from-primary to-cyber-cyan" :
                project.color === "secondary" ? "from-secondary to-cyber-purple" :
                "from-accent to-cyber-magenta"
              }`} />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      project.color === "primary" ? "bg-primary/10" :
                      project.color === "secondary" ? "bg-secondary/10" :
                      "bg-accent/10"
                    }`}>
                      <project.icon className={`w-5 h-5 ${
                        project.color === "primary" ? "text-primary" :
                        project.color === "secondary" ? "text-secondary" :
                        "text-accent"
                      }`} />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-muted-foreground">
                        [{project.category}]
                      </span>
                      <h3 className="font-mono font-bold text-lg">{project.title}</h3>
                    </div>
                  </div>

                  {/* Action buttons - UPDATED */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors cursor-pointer"
                      title="View Code on GitHub"
                    >
                      <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </a>
                    {/* External Link icon removed as requested */}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ahmadamjadd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            View more on GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;