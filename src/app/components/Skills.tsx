const skillCategories = [
  {
    title: "Frontend",
    color: "#FF9644",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML & CSS", level: 98 },
    ],
  },
  {
    title: "Backend",
    color: "#562F00",
    skills: [
      { name: "Express.js", level: 82 },
      { name: "NestJS", level: 78 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 72 },
      { name: "PostgreSQL", level: 78 },
    ],
  },
  {
    title: "Tools & Others",
    color: "#FFCE99",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 70 },
      { name: "Figma", level: 80 },
      { name: "Vercel / Netlify", level: 88 },
      { name: "Firebase", level: 76 },
    ],
  },
];

const techBadges = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "Tailwind",
  "GraphQL",
  "Docker",
  "Git",
  "Figma",
  "Firebase",
  "Vercel",
  "Redux",
  "REST API",
  "Jest",
  "AWS",
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[#FFFDF1] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-56 h-56 rounded-full bg-[#FFCE99]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-72 h-72 rounded-full bg-[#FF9644]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#FF9644] mb-2"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: "0.95rem",
              letterSpacing: "0.1em",
            }}
          >
            MY EXPERTISE
          </p>
          <h2
            className="text-[#562F00]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
            }}
          >
            Skills & Technologies
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#FF9644] rounded-full" />
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-7 rounded-2xl bg-white border border-[#FFCE99]/40 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-8 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3
                  className="text-[#562F00]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                  }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span
                        className="text-[#562F00]"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 500,
                          fontSize: "0.88rem",
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-[#FF9644]"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.82rem",
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-[#FFCE99]/40 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${category.color}, #FFCE99)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badges Marquee */}
        <div className="text-center mb-8">
          <p
            className="text-[#562F00]/60"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "0.9rem",
            }}
          >
            Technologies I work with
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-3 flex-wrap justify-center">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-[#562F00]/5 border border-[#562F00]/10 text-[#562F00] hover:bg-[#FF9644] hover:text-[#FFFDF1] hover:border-[#FF9644] transition-all duration-300 cursor-default"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
