"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Wifi, Gauge, Shield, Zap, BarChart, Bot, Cpu,
  ExternalLink
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Wifi: <Wifi className="h-5 w-5" />,
  Gauge: <Gauge className="h-5 w-5" />,
  Shield: <Shield className="h-5 w-5" />,
  Zap: <Zap className="h-5 w-5" />,
  BarChart: <BarChart className="h-5 w-5" />,
  Bot: <Bot className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
};

export function ProjectsSection() {
  const [domains, setDomains] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Fetch domains and projects
    Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/domains`).then(res => res.json()),
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects`).then(res => res.json())
    ]).then(([domainsData, projectsData]) => {
      setDomains(domainsData);
      setProjects(projectsData);
      // Set initial filter
      if (domainsData.length > 0) {
        setSelectedDomain(domainsData[0]._id);
        setFilteredProjects(projectsData.filter((p: any) => p.domainId === domainsData[0]._id));
      }
    });
  }, []);

  useEffect(() => {
    if (selectedDomain) {
      setFilteredProjects(
        projects.filter((project) => project.domainId === selectedDomain)
      );
    }
  }, [selectedDomain, projects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Explore our portfolio of innovative solutions across various technology domains.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {domains.map((domain) => (
            <Button
              key={domain._id}
              id={`projects-${domain._id}`}
              variant={selectedDomain === domain._id ? "default" : "outline"}
              size="sm"
              className="mb-2"
              onClick={() => setSelectedDomain(domain._id)}
            >
              <span className="mr-2">{iconMap[domain.icon] || <Zap className="h-5 w-5" />}</span>
              {domain.name}
            </Button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                      >
                        View Details <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
