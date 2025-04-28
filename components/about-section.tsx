"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export function AboutSection() {
  const [aboutData, setAboutData] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const nextImage = useCallback(() => {
    if (!isTransitioning && aboutData?.images?.length > 0) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === aboutData.images.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  }, [isTransitioning, aboutData]);

  useEffect(() => {
    fetch("http://localhost:3000/api/about")
      .then((res) => res.json())
      .then((data) => setAboutData(data));
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (inView && aboutData?.images?.length > 0) {
      intervalId = setInterval(nextImage, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [inView, nextImage, aboutData]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleDotClick = (index: number) => {
    if (!isTransitioning && index !== currentImageIndex) {
      setIsTransitioning(true);
      setCurrentImageIndex(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  const images = aboutData?.images || [];
  const features = aboutData?.features || [];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <span className="text-primary font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              {aboutData?.title || "Loading..."}
            </h2>
            <p className="text-muted-foreground">
              {aboutData?.description1 || ""}
            </p>
            <p className="text-muted-foreground">
              {aboutData?.description2 || ""}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((item: string, index: number) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]"
          >
            {images.map((image: string, index: number) => (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentImageIndex === index ? 1 : 0,
                  transition: { duration: 1 },
                }}
              >
                <img
                  src={image}
                  alt={`Mission image ${index + 1}`}
                  className="object-cover w-full h-full rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-semibold">Our Mission</p>
                    <p className="text-sm opacity-90">
                      To empower businesses through innovative technology solutions that drive growth and efficiency.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_: string, index: number) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index ? "w-6 bg-white" : "bg-white/50"
                  }`}
                  onClick={() => handleDotClick(index)}
                  disabled={isTransitioning}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
