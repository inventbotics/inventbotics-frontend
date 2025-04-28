export type Domain = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  domainId: string;
};

export type Client = {
  id: string;
  name: string;
  logo: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
};

export const domains: Domain[] = [
  {
    id: "iot",
    name: "IoT",
    description: "Smart devices and connected systems that transform how we interact with technology.",
    icon: "Wifi",
  },
  {
    id: "instrumentation",
    name: "Instrumentation",
    description: "Precision measurement and control systems for industrial applications.",
    icon: "Gauge",
  },
  {
    id: "wireless",
    name: "Secured Wireless Transmission",
    description: "Encrypted data transmission solutions ensuring security and reliability.",
    icon: "Shield",
  },
  {
    id: "power",
    name: "Power Systems",
    description: "Efficient power management and distribution solutions for various applications.",
    icon: "Zap",
  },
  {
    id: "data",
    name: "Data Analytics",
    description: "Transforming raw data into actionable insights through advanced analytics.",
    icon: "BarChart",
  },
  {
    id: "robotics",
    name: "Robotics",
    description: "Autonomous and semi-autonomous robotic systems for diverse applications.",
    icon: "Bot",
  },
  {
    id: "pcb",
    name: "PCB Designing",
    description: "Custom printed circuit board design and prototyping services.",
    icon: "Cpu",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Smart Home Automation System",
    description: "A comprehensive IoT solution for residential automation with voice control and mobile app integration.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "iot",
  },
  {
    id: "2",
    title: "Industrial Monitoring System",
    description: "Real-time monitoring solution for manufacturing facilities with predictive maintenance capabilities.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "iot",
  },
  {
    id: "3",
    title: "Precision Flow Meter",
    description: "High-accuracy digital flow measurement system for critical industrial processes.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "instrumentation",
  },
  {
    id: "4",
    title: "Temperature Control System",
    description: "Precision temperature regulation system for pharmaceutical manufacturing environments.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "instrumentation",
  },
  {
    id: "5",
    title: "Encrypted Data Transmission Module",
    description: "Military-grade encryption for wireless data transmission in sensitive applications.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "wireless",
  },
  {
    id: "6",
    title: "Secure IoT Gateway",
    description: "Edge computing device with built-in security features for IoT deployments.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "wireless",
  },
  {
    id: "7",
    title: "Solar Power Management System",
    description: "Intelligent control system for optimizing solar energy capture and storage.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "power",
  },
  {
    id: "8",
    title: "Micro-Grid Controller",
    description: "Advanced control system for managing distributed energy resources in micro-grid applications.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "power",
  },
  {
    id: "9",
    title: "Predictive Maintenance Platform",
    description: "AI-powered system for predicting equipment failures before they occur.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "data",
  },
  {
    id: "10",
    title: "Manufacturing Analytics Dashboard",
    description: "Real-time visualization of production metrics with actionable insights.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "data",
  },
  {
    id: "11",
    title: "Autonomous Delivery Robot",
    description: "Self-navigating robot for last-mile delivery in urban environments.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "robotics",
  },
  {
    id: "12",
    title: "Robotic Arm for Precision Assembly",
    description: "6-axis robotic arm with vision system for high-precision manufacturing tasks.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "robotics",
  },
  {
    id: "13",
    title: "Custom IoT Sensor Board",
    description: "Multi-sensor PCB design with wireless connectivity for environmental monitoring.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "pcb",
  },
  {
    id: "14",
    title: "High-Power Motor Controller",
    description: "Custom PCB for controlling high-current motors with advanced protection features.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    domainId: "pcb",
  },
];

export const clients: Client[] = [
  {
    id: "1",
    name: "TechCorp Industries",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    testimonial: {
      text: "Inventbotics delivered an exceptional IoT solution that transformed our manufacturing process. Their expertise and attention to detail exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp Industries",
    },
  },
  {
    id: "2",
    name: "GreenEnergy Solutions",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    testimonial: {
      text: "The solar power management system developed by Inventbotics has significantly improved our energy efficiency. Their team's technical knowledge is impressive.",
      author: "Michael Chen",
      position: "Director of Operations, GreenEnergy Solutions",
    },
  },
  {
    id: "3",
    name: "MediTech Innovations",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    id: "4",
    name: "SmartCity Ventures",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: "5",
    name: "Global Logistics Inc.",
    logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/527px-Nvidia_logo.svg.png?20150924223142",
    testimonial: {
      text: "The autonomous delivery robots have revolutionized our warehouse operations. Inventbotics understood our needs perfectly and delivered a solution that works seamlessly.",
      author: "David Rodriguez",
      position: "Head of Innovation, Global Logistics Inc.",
    },
  },
  {
    id: "6",
    name: "NextGen Manufacturing",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Microchip_Technology_logo.svg/1920px-Microchip_Technology_logo.svg.png",
  },
];