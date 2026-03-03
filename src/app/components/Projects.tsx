import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with real-time inventory, secure payments via Stripe, and an admin dashboard for product management.",
    image:
      "https://images.unsplash.com/photo-1706700392642-dee59f678a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBlY29tbWVyY2UlMjBwcm9qZWN0fGVufDF8fHx8MTc3MjU2NTE2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description:
      "An interactive data visualization dashboard with real-time charts, KPI tracking, and customizable widgets for business intelligence.",
    image:
      "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzI0NzYyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "TypeScript", "Recharts", "PostgreSQL"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    description:
      "A high-converting landing page for a SaaS product with animations, testimonials, pricing tables, and integrated CMS.",
    image:
      "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kaW5nJTIwcGFnZSUyMHdlYnNpdGUlMjBkZXNpZ24lMjBzdGFydHVwfGVufDF8fHx8MTc3MjU2NTE2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Tailwind", "Framer Motion", "Sanity"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "UI Component Library",
    description:
      "A custom React component library with 40+ accessible, themeable components built with Storybook documentation.",
    image:
      "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc3MjU2NTE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "Storybook", "Figma"],
    category: "Design",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Social Media App",
    description:
      "A modern social platform with real-time messaging, posts, stories, and notifications powered by WebSockets.",
    image:
      "https://images.unsplash.com/photo-1663153204638-bfce85406499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcCUyMGludGVyZmFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzI1NjUxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "Socket.io", "Redis"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

const categories = ["All", "Full Stack", "Frontend", "Design"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#FFFDF1] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[#FFCE99]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#FF9644]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p
            className="text-[#FF9644] mb-2"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "0.95rem", letterSpacing: "0.1em" }}
          >
            MY WORK
          </p>
          <h2
            className="text-[#562F00]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
          >
            Featured Projects
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#FF9644] rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[#FF9644] text-[#FFFDF1] shadow-lg shadow-[#FF9644]/30"
                  : "bg-[#562F00]/5 text-[#562F00] hover:bg-[#FFCE99]/50 border border-[#562F00]/10"
              }`}
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "0.88rem" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#FFCE99]/40 shadow-sm hover:shadow-xl hover:shadow-[#562F00]/10 transition-all duration-400 hover:-translate-y-2"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#FF9644] text-[#FFFDF1]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.72rem" }}
                >
                  ★ Featured
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#562F00]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9644] text-[#FFFDF1] hover:bg-[#FFCE99] hover:text-[#562F00] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.82rem" }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF1]/20 text-[#FFFDF1] border border-[#FFFDF1]/30 hover:bg-[#FFFDF1] hover:text-[#562F00] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.82rem" }}
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className="text-[#562F00] group-hover:text-[#FF9644] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.15rem" }}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="shrink-0 ml-2 px-2 py-0.5 rounded-full bg-[#FFCE99]/40 text-[#562F00]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "0.72rem" }}
                  >
                    {project.category}
                  </span>
                </div>

                <p
                  className="text-[#562F00]/60 mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.87rem", lineHeight: 1.7 }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#562F00]/5 text-[#562F00]/70"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "0.75rem" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#562F00] text-[#562F00] hover:bg-[#562F00] hover:text-[#FFFDF1] transition-all duration-300 group"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
          >
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
