import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-6 md:p-10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-primary opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity" />

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-10 h-10 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  Bachelor of Engineering
                </h3>
                <p className="text-gradient text-lg font-semibold mb-4">
                  Information Technology
                </p>

                <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Gyanmanjari Institute of Technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>2020 - 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Gujarat, India</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Completed Bachelor's degree in Information Technology with focus on 
                  software development, web technologies, and computer science fundamentals. 
                  Gained hands-on experience through various projects and practical assignments.
                </p>
              </div>
            </div>

            {/* Bottom Gradient Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
