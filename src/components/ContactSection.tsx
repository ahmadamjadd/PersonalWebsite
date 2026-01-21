import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Terminal, Loader2, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // ✅ ENDPOINT UPDATED HERE
      const response = await fetch("https://formspree.io/f/meeenoqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear form
        setTimeout(() => setStatus("idle"), 5000); // Reset button after 5 seconds
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muhammadahmadamjad0@gmail.com",
      href: "mailto:muhammadahmadamjad0@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 (310) 7696477",
      href: "tel:+923107696477",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Faisalabad, Pakistan",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute right-1/4 top-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary mb-2 block">// UPLINK</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold section-heading">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Terminal-style contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="terminal">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-4 font-mono text-xs text-muted-foreground">contact.sh</span>
              </div>

              {/* Terminal content */}
              <div className="space-y-4">
                <p className="font-mono text-sm">
                  <span className="text-primary">$</span>{" "}
                  <span className="text-muted-foreground">./init_connection</span>
                </p>
                <p className="font-mono text-xs text-muted-foreground">
                  {">"} Establishing secure uplink...
                </p>
                <p className="font-mono text-xs text-primary">
                  {">"} Connection established. Ready for transmission.
                </p>
              </div>

              <div className="border-t border-border mt-6 pt-6 space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-muted">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-mono text-sm text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-mono text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="border-t border-border mt-6 pt-6">
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  {"// SOCIAL PROTOCOLS"}
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/muhammad-ahmad-amjad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://github.com/ahmadamjadd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors group"
                  >
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm text-muted-foreground">
                  new_transmission.msg
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="font-mono text-xs text-muted-foreground block mb-2">
                    {"// SENDER_ID"}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-muted rounded-lg font-mono text-sm border border-border focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-muted-foreground block mb-2">
                    {"// RETURN_ADDRESS"}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-muted rounded-lg font-mono text-sm border border-border focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-muted-foreground block mb-2">
                    {"// MESSAGE_PAYLOAD"}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-4 py-3 bg-muted rounded-lg font-mono text-sm border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full cyber-button inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-cyber text-primary-foreground rounded-lg font-mono font-semibold shadow-neon-cyan hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Transmitting...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Transmission Successful
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Transmit Message
                    </>
                  )}
                </button>
                
                {status === "error" && (
                  <p className="text-red-500 text-xs font-mono text-center">
                    Error: Transmission failed. Please try again later.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;