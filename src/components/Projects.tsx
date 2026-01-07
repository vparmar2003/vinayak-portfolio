import { ExternalLink, Code, Globe, ShoppingCart, Building, CreditCard, UserCheck } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce website with product listings, cart functionality, checkout process, and responsive design across all devices.",
    tech: ["React.js", "Material UI", "NestJS", "REST APIs"],
    icon: ShoppingCart,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Visa Application Portal",
    description:
      "A comprehensive visa application system with multi-step forms, document uploads, status tracking, and admin dashboard for processing applications.",
    tech: ["React.js", "Tailwind CSS", "State Management", "API Integration"],
    icon: Globe,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Corporate IT Website",
    description:
      "Modern corporate website for IT companies featuring service showcases, team sections, testimonials, and contact forms with responsive layouts.",
    tech: ["React.js", "Material UI", "Responsive Design", "Animations"],
    icon: Building,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Admin Dashboard",
    description:
      "Role-based admin dashboard with user management, analytics charts, data tables, and comprehensive CRUD operations for business management.",
    tech: ["React.js", "Tailwind CSS", "Charts", "Role-Based Access"],
    icon: UserCheck,
    color: "from-green-500 to-emerald-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-1/3 h-2/3 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing some of the key projects I've worked on
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Project Header */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                      <Code className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Bar */}
              <div
                className={`h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <Button variant="glass" size="lg" asChild>
            <a href="#contact">Let's Connect</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
