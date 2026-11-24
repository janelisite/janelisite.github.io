import React from "react";


export default function News() {
  const items = [
    {
      date: "Nov 2026",
      title: "The Authorship Line accepted at CHI 2027 (with major revisions)",
      sub: "First-author paper on how creative agency shapes what professionals delegate to generative AI.",
    },
    {
      date: "Jul 2026",
      title: "First-author paper published at the HAI-Agency Workshop",
      sub: "“Help Me, But Don’t Track Me”: intervention timing and privacy boundaries for process-aware AI tutors (CEUR-WS Vol. 4248).",
    },
    {
      date: "Feb 2026",
      title: "Joined ProtoLab at UC San Diego",
      sub: "Leading a study with Steven P. Dow on generative AI and creative authorship.",
    },
    {
      date: "Jan 2026",
      title: "Co-authored paper accepted at CHI 2026",
      sub: "“Do Teachers Dream of GenAI Widening Educational (In)equality?”, from our cross-national study of K–12 teachers with CMU & University of Michigan.",
    },
    {
      date: "Sept 2025",
      title: "Started Ph.D. in Education Studies at UC San Diego",
      sub: "Awarded the UCSD EDS First-Year Doctoral Fellowship; joined the Swartz Center for Computational Neuroscience to work on eye-tracking + AI tutoring.",
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
