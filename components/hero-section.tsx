"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Database, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 👇 This will record a view whenever HeroSection loads
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/views`, {
      method: "POST",
    })
      .then((res) => console.log("✅ View recorded from HeroSection"))
      .catch((err) => console.error("❌ Failed to record view", err));
  }, []);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 z-0"
        ref={heroRef}
      />
      
      <div className="container mx-auto px-4 py-20 pt-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                Innovative Engineering Solutions
              </motion.span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Transforming Ideas into <span className="text-primary">Intelligent Systems</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              Inventbotics Components specializes in cutting-edge technology solutions across IoT, Robotics, Power Systems, and more. We turn complex challenges into elegant, efficient solutions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <a href="#domains">
                  Explore Our Domains <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { 
                icon: <Zap className="h-10 w-10" style={{ color: '#004AAD' }} />, 
                title: "Rapid Prototyping", 
                description: "From concept to prototype in record time" 
              },
              { 
                icon: <Shield className="h-10 w-10" style={{ color: '#004AAD' }} />, 
                title: "Secured Systems", 
                description: "End-to-end encryption and security protocols" 
              },
              { 
                icon: <Database className="h-10 w-10" style={{ color: '#004AAD' }} />, 
                title: "Data Analytics", 
                description: "Transform raw data into actionable insights" 
              },
              { 
                icon: <Cpu className="h-10 w-10" style={{ color: '#004AAD' }} />, 
                title: "Custom Hardware", 
                description: "Tailored solutions for specific requirements" 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-border"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
