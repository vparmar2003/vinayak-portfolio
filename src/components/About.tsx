import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      label: "Experience",
      value: "1.5+ Years",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, Gujarat",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "B.E. in IT",
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Open to Work",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Main Card */}
              <div className="glass rounded-3xl p-8 relative z-10">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="text-8xl md:text-9xl font-display font-bold text-gradient">
                      VP
                    </div>
                    <p className="text-muted-foreground mt-4 font-medium">
                      Front End Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl blur-2xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float animation-delay-600" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                I'm a passionate Front End Developer with expertise in building 
                responsive, high-performance web applications. With a strong 
                foundation in React.js, Material UI, and Tailwind CSS, I create 
                beautiful user interfaces that deliver exceptional experiences.
              </p>
              <p>
                I've worked on diverse projects including e-commerce platforms, 
                visa application portals, corporate websites, and role-based 
                admin dashboards. I believe in writing clean, maintainable code 
                and following component-based architecture for scalable solutions.
              </p>
              <p>
                I graduated with a Bachelor of Engineering in Information Technology 
                from Gyanmanjari Institute of Technology (2020-2024). I'm constantly 
                learning and staying updated with the latest web development trends.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-4 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
