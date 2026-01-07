import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Front End Developer",
    company: "TECHNITHUNDER",
    location: "Ahmedabad, Gujarat",
    period: "December 2024 - January 2026",
    description: [
      "Developed and maintained large-scale, production-ready web applications using React.js, Material UI (MUI), and Tailwind CSS.",
      "Built responsive and high-performance front-end interfaces for business platforms including E-commerce websites, Visa application portals, IT company corporate websites, and Role-based admin dashboards.",
      "Implemented component-based architecture in React to improve code reusability and scalability.",
      "Integrated front-end applications with NestJS-based backend APIs, ensuring smooth data flow and secure communication.",
      "Focused on UI consistency, performance optimization, and cross-device compatibility.",
      "Collaborated with designers and backend developers in an agile development environment.",
    ],
  },
  {
    title: "Front End Developer",
    company: "NSITE WEB",
    location: "Bhavnagar, Gujarat",
    period: "July 2024 - August 2024",
    description: [
      "Developed responsive and mobile-first websites using HTML, CSS, Bootstrap, and JavaScript.",
      "Implemented media queries and interactive UI components to ensure seamless user experience across devices.",
      "Enhanced website functionality by adding dynamic elements and client-side logic.",
      "Worked on cross-browser compatibility and layout optimization.",
      "Applied analytical thinking and problem-solving skills to real-world web development tasks.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey as a Front End Developer
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent/50" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center glow-primary">
                <div className="w-2 h-2 bg-primary-foreground rounded-full" />
              </div>

              {/* Content Card */}
              <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-gradient">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-foreground">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
