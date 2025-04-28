export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://github.com/karthikrajask/inventbotics/blob/main/new.png?raw=true" 
              alt="Inventbotics Components" 
              className="h-16 w-15 mb-4"
            />
            <p className="text-primary-foreground/80 mb-4">
              Transforming ideas into intelligent systems through innovative engineering solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Domains", "Projects", "Clients", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Domains</h3>
            <ul className="space-y-2">
              {["IoT", "Instrumentation", "Wireless Security", "Power Systems", "Data Analytics", "Robotics", "PCB Design"].map((domain) => (
                <li key={domain}>
                  <a 
                    href="#domains"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {domain}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-primary-foreground/80 space-y-2">
              <p>26/66E9 Ayyan Thottam</p>
              <p>Kumarapalayam, Namakkal(Dt)</p>
              <p>TamilNadu, India</p>
              <p className="mt-2">inventbotics.io@gmail.com</p>
              <p>+91 9362029708</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} Inventbotics Components. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}