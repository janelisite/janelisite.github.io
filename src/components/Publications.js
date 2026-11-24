export default function PubItem() {
  const linkProps = {
    className: "pub-link",
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const highlightAuthors = (authors) =>
    authors
      .split(/(Jane Hanqi Li|Hanqi Li)/g)
      .map((part, idx) =>
        part === "Jane Hanqi Li" || part === "Hanqi Li" ? (
          <span key={`${part}-${idx}`} className="author-self">
            {part}
          </span>
        ) : (
          part
        )
      );

  const pubs = [
    {
      year: "2026",
      linkText: "Accepted with major revisions",
      href: null,
      title:
        "The Authorship Line: How Creative Agency Shapes Delegation to Generative AI. CHI ’27.",
      authors:
        "Jane Hanqi Li, Yuval Chen, Sirui Tao, Amy Eguchi, Steven P. Dow.",
    },
    {
      year: "2026",
      linkText: "PDF",
      href: "https://ceur-ws.org/Vol-4248/paper3.pdf",
      title:
        "“Help Me, But Don’t Track Me”: Intervention Timing and Privacy Boundaries for Process-Aware AI Tutors. HAI-Agency Workshop ’26, CEUR-WS Vol. 4248.",
      authors:
        "Jane Hanqi Li, Yuhong Zhang, Jiaqi Liu, Tzyy-Ping Jung, Amy Eguchi.",
    },
    {
      year: "2026",
      linkText: "PDF",
      href: "https://arxiv.org/pdf/2509.10782",
      title:
        "Do Teachers Dream of GenAI Widening Educational (In)equality? Envisioning the Future of K–12 GenAI Education from Global Teachers’ Perspectives. CHI ’26.",
      authors:
        "Ruiwei Xiao, Qing Xiao, Xinying Hou, Phenyo Phemelo Moletsane, Jane Hanqi Li, Hong Shen, John Stamper.",
    },
    {
      year: "2026",
      linkText: "PDF (Revise and resubmit)",
      href: "https://arxiv.org/pdf/2509.10780",
      title:
        "A Qualitative Interview Study Exploring When Generative AI Supports and Fails Everyday K–12 Teaching Globally. International Journal of Human–Computer Interaction.",
      authors:
        "Ruiwei Xiao, Qing Xiao, Xinying Hou, Jane Hanqi Li, Phenyo Phemelo Moletsane, Hong Shen, John Stamper.",
    },
    {
      year: "2025",
      linkText: "PDF",
      href: "https://ojs.aaai.org/index.php/AAAI/article/view/35187",
      title:
        "From Unseen Needs to Classroom Solutions: Exploring AI Literacy Challenges and Opportunities with a Project-Based Learning Toolkit in K–12 Education. EAAI ’25.",
      authors:
        "Jane Hanqi Li, Ruiwei Xiao, Hsuan Nieu, Ying-Jui Tseng, Guanze Liao.",
    },
    {
      year: "2025",
      linkText: "PDF",
      href: "https://arxiv.org/pdf/2505.08083",
      title:
        "LLMs to Support K–12 Teachers in Culturally Relevant Pedagogy: An AI Literacy Example. AIED ’25.",
      authors:
        "Jiayi Wang, Ruiwei Xiao, Xinying Hou, Jane Hanqi Li, Ying-Jui Tseng, John Stamper, Kenneth Koedinger.",
    },
   /* {
      year: "2024",
      linkText: "PDF",
      href: "https://arxiv.org/pdf/2412.14200",
      title: "ActiveAI: Enabling K–12 AI Literacy Education & Analytics at Scale.",
      authors:
        "Ruiwei Xiao, Ying-Jui Tseng, Jane Hanqi Li, Hsuan Nieu, Guanze Liao, John Stamper, Kenneth Koedinger.",
    },
    */
  ];

  return (
    <section className="pub-item">
      {pubs.map((p, idx) => (
        <div key={`${p.year}-${idx}`}>
          <div className="pub-head">
            <div className="pub-year">{p.year}</div>
            {p.href ? (
              <a href={p.href} {...linkProps}>
                {p.linkText}
              </a>
            ) : (
              <div className="pub-link">{p.linkText}</div>
            )}
          </div>

          <h3 className="pub-title">{p.title}</h3>
          <p className="pub-authors">{highlightAuthors(p.authors)}</p>
        </div>
      ))}
    </section>
  );
}
