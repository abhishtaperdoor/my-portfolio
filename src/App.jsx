import { useState } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Education", "Contact"];

const SKILLS = {
  Languages: ["C", "C++", "Python", "JavaScript", "Java"],
  Frontend: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "REST APIs"],
  Tools: ["Git", "GitHub", "VS Code", "Linux"],
};

const PROJECTS = [
  {
    title: "Portfolio Website",
    desc: "A minimal personal portfolio built with React, showcasing projects, skills, and education.",
    tech: ["React", "CSS"],
    link: "#",
  },
  {
    title: "Student Management System",
    desc: "A full-stack web app to manage student records with CRUD operations and authentication.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "#",
  },
  {
    title: "Weather App",
    desc: "A responsive weather app using OpenWeather API to display real-time weather data.",
    tech: ["JavaScript", "API", "HTML/CSS"],
    link: "#",
  },
];

const EDUCATION = [
  {
    degree: "B.E. in Computer Science & Engineering",
    school: "Your University Name",
    period: "2022 – 2026",
    desc: "Relevant coursework: Data Structures, Algorithms, DBMS, OS, Computer Networks, Web Development.",
  },
  {
    degree: "Pre-University (12th Grade)",
    school: "Your College Name",
    period: "2020 – 2022",
    desc: "Science stream with Physics, Chemistry, Mathematics and Computer Science.",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const scrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = () => {
    if (formData.name && formData.email && formData.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", color: "#1a1a1a", background: "#fff", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid #eee", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", height: 60 }}>
        <span style={{ fontWeight: 600, fontSize: 18, letterSpacing: "-0.5px" }}>YourName</span>
        <div style={{ display: "flex", gap: 8 }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: active === l ? 600 : 400, color: active === l ? "#000" : "#666", padding: "6px 12px", borderRadius: 6, transition: "all 0.15s" }}>
              {l}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO / ABOUT */}
      <section id="About" style={{ maxWidth: 720, margin: "0 auto", padding: "6rem 2rem 4rem" }}>
        <div style={{ display: "inline-block", background: "#f5f5f5", color: "#555", fontSize: 13, padding: "4px 12px", borderRadius: 20, marginBottom: 20 }}>
          👋 Open to opportunities
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 16px", letterSpacing: "-1px" }}>
          Hi, I'm <span style={{ color: "#2563eb" }}>Your Name</span>
        </h1>
        <p style={{ fontSize: 18, color: "#444", lineHeight: 1.7, maxWidth: 560, margin: "0 0 32px" }}>
          A Computer Science student passionate about building clean, efficient software. I love solving problems, learning new technologies, and turning ideas into working products.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("Projects")}
            style={{ background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 8, padding: "12px 24px", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
            View Projects
          </button>
          <button onClick={() => scrollTo("Contact")}
            style={{ background: "#fff", color: "#1a1a1a", border: "1.5px solid #ddd", borderRadius: 8, padding: "12px 24px", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
            Contact Me
          </button>
        </div>
      </section>

      {/* SKILLS */}
      <section id="Skills" style={{ background: "#fafafa", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Tag>Skills</Tag>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 40px", letterSpacing: "-0.5px" }}>Technologies I work with</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "20px" }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#888", letterSpacing: 1, textTransform: "uppercase", margin: "0 0 12px" }}>{cat}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map(s => (
                    <span key={s} style={{ background: "#f0f4ff", color: "#2563eb", fontSize: 12, padding: "4px 10px", borderRadius: 6, fontWeight: 500 }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="Projects" style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Tag>Projects</Tag>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 40px", letterSpacing: "-0.5px" }}>Things I've built</h2>
          <div style={{ display: "grid", gap: 20 }}>
            {PROJECTS.map((p, i) => (
              <div key={i} style={{ border: "1px solid #eee", borderRadius: 12, padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", transition: "border-color 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#2563eb"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#eee"}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 8px" }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.6, margin: "0 0 14px" }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tech.map(t => (
                      <span key={t} style={{ background: "#f5f5f5", color: "#444", fontSize: 12, padding: "3px 8px", borderRadius: 4, fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <a href={p.link} style={{ color: "#2563eb", fontSize: 13, fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}>View →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="Education" style={{ background: "#fafafa", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Tag>Education</Tag>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 40px", letterSpacing: "-0.5px" }}>My background</h2>
          <div style={{ display: "grid", gap: 16 }}>
            {EDUCATION.map((e, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "24px", display: "flex", gap: 20 }}>
                <div style={{ width: 4, background: "#2563eb", borderRadius: 4, flexShrink: 0 }} />
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>{e.degree}</h3>
                    <span style={{ fontSize: 13, color: "#888" }}>{e.period}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#2563eb", fontWeight: 500, margin: "0 0 8px" }}>{e.school}</p>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.6, margin: 0 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="Contact" style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Tag>Contact</Tag>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 12px", letterSpacing: "-0.5px" }}>Let's work together</h2>
          <p style={{ color: "#555", fontSize: 15, margin: "0 0 36px", lineHeight: 1.6 }}>
            Whether it's a project, internship, or just a chat about tech — feel free to reach out.
          </p>
          <div style={{ display: "grid", gap: 12, maxWidth: 480 }}>
            <input value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name" style={{ padding: "12px 16px", border: "1px solid #ddd", borderRadius: 8, fontSize: 14, outline: "none", fontFamily: "inherit" }} />
            <input value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
              placeholder="Your email" type="email" style={{ padding: "12px 16px", border: "1px solid #ddd", borderRadius: 8, fontSize: 14, outline: "none", fontFamily: "inherit" }} />
            <textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
              placeholder="Your message" rows={4} style={{ padding: "12px 16px", border: "1px solid #ddd", borderRadius: 8, fontSize: 14, resize: "vertical", outline: "none", fontFamily: "inherit" }} />
            <button onClick={handleSend}
              style={{ background: sent ? "#16a34a" : "#1a1a1a", color: "#fff", border: "none", borderRadius: 8, padding: "13px", fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "background 0.2s" }}>
              {sent ? "Message sent!" : "Send message"}
            </button>
          </div>
          <div style={{ marginTop: 40, display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[["GitHub", "github.com/yourusername"], ["LinkedIn", "linkedin.com/in/yourusername"], ["Email", "you@email.com"]].map(([label, val]) => (
              <div key={label}>
                <p style={{ fontSize: 12, color: "#999", margin: "0 0 4px", fontWeight: 500 }}>{label}</p>
                <p style={{ fontSize: 14, color: "#2563eb", margin: 0 }}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #eee", padding: "24px 2rem", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "#aaa", margin: 0 }}>Built with React · © 2026 Your Name</p>
      </footer>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span style={{ display: "inline-block", background: "#eff6ff", color: "#2563eb", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20, letterSpacing: 0.5 }}>
      {children}
    </span>
  );
}
