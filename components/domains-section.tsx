"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import {
  Wifi, Gauge, Shield, Zap, BarChart, Bot, Cpu,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, JSX.Element> = {
  Wifi: <Wifi className="h-6 w-6" />,
  Gauge: <Gauge className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Zap: <Zap className="h-6 w-6" />,
  BarChart: <BarChart className="h-6 w-6" />,
  Bot: <Bot className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
};

export function DomainsSection() {
  const [domains, setDomains] = useState<any[]>([]);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/domains`)
      .then(res => res.json())
      .then(data => setDomains(data));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="domains" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Specialized Technology Domains
          </h2>
          <p className="text-muted-foreground">
            We excel in multiple technology domains, delivering innovative solutions
            tailored to meet the unique challenges of each field.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {domains.map((domain) => (
            <motion.div
              key={domain._id}
              variants={itemVariants}
              className="group bg-card hover:bg-primary/5 border border-border rounded-xl p-6 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block text-primary">
                {iconMap[domain.icon] || <Zap className="h-6 w-6" />}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {domain.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {domain.description}
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="group-hover:text-primary transition-colors"
                asChild
              >
                <a href={`#projects-${domain._id}`}>
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
