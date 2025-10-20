import React from "react";


export default function News() {
  const items = [
    {
      date: "Sept 2025",
      title: "Started Ph.D. in Education Studies (HCI/HAI) at UC San Diego",
      sub: "Began doctoral research focusing on Human–AI Interaction, Education Innovation, and Trustworthy AI.",
      link: "", // optional: e.g. "https://example.com"
    },
    {
        date: "Sept 2025",
        title: "Submitted two full papers to CHI 2026",
        sub: "Led cross-institutional studies with Carnegie Mellon University and the University of Michigan on how global K-12 teachers adopt and envision generative AI in classrooms."
      },
    {
        date: "Sept 2025",
        title: "Joined UCSD Swartz Center for Computational Neuroscience",
        sub: "Collaborating on an eye-tracking study investigating how learners allocate visual attention during problem-solving tasks.",
        link: "",
      },  

    {date: "Mar 2025",
      title: "Presented at EAAI 2025 (Philadelphia, USA)",
      sub: "Presented 'From Unseen Needs to Classroom Solutions' on AI literacy and project-based learning as part of the AAAI/EAAI Symposium."
    },
    {
      date: "Dec 2024",
      title: "Papers accepted to HCII 2025 and LAK 2025",
      sub: "Accepted for publication: 'Exploring AI-Based Character Strengths Chatbot' (HCII) and 'MBTI-Driven Conversational AI for Collaborative Learning' (LAK)."
    },
    {
      date: "Dec 2024",
      title: "First-author paper accepted at EAAI 2025",
      sub: "Paper 'From Unseen Needs to Classroom Solutions: Exploring AI Literacy Challenges & Opportunities with Project-Based Learning Toolkit in K–12 Education' accepted for presentation."
    },
    {
        date: "Aug 2024",
        title: "Joined NYU CREATE Lab as UX Research Intern",
        sub: "Worked with Prof. Xavier Ochoa and Prof. Jan L. Plass on the Loop VR System project, developing and evaluating AI-driven empathy training simulations for social work education."
      },
      
    {
      date: "Apr 2024",
      title: "Awarded the OpenAI Researcher Access Grant",
      sub: "Received funding for the project 'PosiChat: Affective AI Chatbot for Positive Psychology.'"
    }
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