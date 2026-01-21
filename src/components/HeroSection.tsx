import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-block mb-4">
              <span className="font-mono text-sm text-primary px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
                &lt;/&gt; Cloud Architect & AI Engineer
              </span>
            </div>

            <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Architecting the Future</span>
              <br />
              <span className="text-foreground">with </span>
              <span className="text-gradient-cyber">Cloud & AI</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Muhammad Ahmad Amjad | AWS Solutions Architect & Deep Learning Engineer. 
              Building intelligent systems that scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#portfolio"
                className="cyber-button inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-cyber text-primary-foreground rounded-lg font-mono font-semibold shadow-neon-cyan hover:shadow-lg transition-all"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="cyber-button inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-mono font-semibold hover:bg-primary/10 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <span className="font-mono text-sm text-muted-foreground">Connect:</span>
              <a
                href="https://linkedin.com/in/muhammad-ahmad-amjad"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card rounded-lg hover:border-primary/50 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/ahmadamjadd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card rounded-lg hover:border-primary/50 transition-all group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Glowing rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse scale-110" />
              <div className="absolute inset-0 rounded-full border border-secondary/20 animate-pulse scale-125" style={{ animationDelay: "0.5s" }} />
              
              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden glow-pulse">
                <div className="absolute inset-0 bg-gradient-cyber opacity-20" />
                <img
                  src={profilePhoto}
                  alt="Muhammad Ahmad Amjad"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-lg"
              >
                <span className="font-mono text-sm text-primary">AWS Certified</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-primary rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
