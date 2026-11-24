import React from "react";


export default function News() {
  const items = [
    {
      date: "Feb 2026",
      title: "Submitted two full papers to AIED 2026",
      sub: "Submitted two papers on GenAI-supported K–12 math learning (verification & expectations) and process-aware tutoring (timing + privacy boundaries).",
    },
    {
      date: "Sept 2025",
      title: "Started Ph.D. in Education Studies at UC San Diego",
      sub: "Began doctoral research in Human–AI Interaction and classroom-embedded AI for learning.",
    },
    {
      date: "Sept 2025",
      title: "Submitted two full papers to CHI 2026",
      sub: "Led cross-institutional studies (with CMU & University of Michigan) on global K–12 teacher adoption of GenAI.",
    },
    {
      date: "Sept 2025",
      title: "Joined UCSD Swartz Center for Computational Neuroscience",
      sub: "Collaborating on an eye-tracking + AI tutoring system to support learners’ math problem-solving.",
    },
    {
      date: "Mar 2025",
      title: "Presented first-author work at EAAI 2025 (Philadelphia, USA)",
      sub: "Presented “From Unseen Needs to Classroom Solutions” on AI literacy and project-based learning.",
    },
  ];

  return (
    <section className="news-timeline">
      {items.map((n, i) => (
        <article key={i} className="news-item">
          <div className="news-main">
            <span className="news-date">{n.date}</span>
            <span className="news-title">{n.title}</span>
          </div>
          <div className="news-sub">{n.sub}</div>
        </article>
      ))}
    </section>
  );
}
