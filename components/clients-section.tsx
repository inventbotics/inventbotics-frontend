"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ClientsSection() {
  const [clients, setClients] = useState<any[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/clients")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  const testimonials = clients.filter((client) => client.testimonial);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: false,
    variableWidth: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">Our Clients</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">
            We've partnered with forward-thinking companies across various industries
            to deliver innovative technology solutions.
          </p>
        </div>

        {/* Clients Logo Carousel */}
        <div ref={ref} className="mb-16">
          {clients.length > 1 ? (
            <Slider
              dots={false}
              infinite={clients.length > 3}
              speed={500}
              autoplay={true}
              autoplaySpeed={2500}
              slidesToShow={clients.length >= 4 ? 4 : clients.length}
              slidesToScroll={1}
              centerMode={clients.length > 2}
              responsive={[
                { breakpoint: 1024, settings: { slidesToShow: Math.min(clients.length, 3) } },
                { breakpoint: 768, settings: { slidesToShow: Math.min(clients.length, 2) } },
                { breakpoint: 480, settings: { slidesToShow: 1 } },
              ]}
            >
              {clients.map((client) => (
                <div key={client._id} className="flex items-center justify-center px-2">
                  <div className="w-32 h-20 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="object-contain h-full w-full"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            // ✅ if only 1 client, NO carousel — just show logo
            <div className="flex justify-center items-center">
              <div className="w-32 h-20">
                <img
                  src={clients[0]?.logo}
                  alt={clients[0]?.name}
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
          )}
        </div>



        {/* Testimonials Section */}
        {testimonials.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-10">
              What Our Clients Say
            </h3>

            <div className="relative">
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-10">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>

              <div className="overflow-hidden">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-lg"
                >
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <p className="text-lg md:text-xl italic mb-6">
                    "{testimonials[activeTestimonial].testimonial?.text}"
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold">
                        {testimonials[activeTestimonial].testimonial?.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[activeTestimonial].testimonial?.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-10">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeTestimonial === index
                      ? "bg-primary w-6"
                      : "bg-primary/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
