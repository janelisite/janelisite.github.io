import React from "react";
import profilePic from "../Profilepic1.jpg";

export default function BioSection() {
  return (
    <aside className="bio-panel">


      {/* social / scholar links */}
      <div className="bio-links">
        <a href="https://scholar.google.com/citations?user=4_IKIgwAAAAJ&hl=en"   target="_blank"
  rel="noopener noreferrer" className="bio-link">Google Scholar</a>
        <a href="https://www.linkedin.com/in/jane-li-hanqi/"   target="_blank"
  rel="noopener noreferrer" className="bio-link">LinkedIn</a>
        <a href="mailto:jal221@ucsd.edu"   target="_blank"
  rel="noopener noreferrer" className="bio-link">Email</a>
      </div>

      {/* image + bio text */}
      <div className="bio-intro">
        <img src={profilePic} alt="Jane Hanqi Li" className="bio-photo" />
        <div className="bio-text">
          <p>
            I’m Jane, Ph.D. student in Education Studies at UC San Diego,
            studying how people learn, collaborate, and build trust with AI.
          </p>
          <p>
            My work bridges Human–Computer Interaction, Human–AI Interaction,
            Education Innovation, and Trustworthy AI — designing conversational
            and multimodal systems that make learning with AI more empathetic,
            personalized, and equitable.
          </p>
          <p>
            I am also interested in exploring the concepts of AI for creativity.
            Check out my{" "}
            <a href="https://openprocessing.org/user/453261#sketches" className="bio-link"
            target="_blank"
            rel="noopener noreferrer"
            >
              creative coding sketchbook
            </a>.
          </p>
          <p>jal221 [at] ucsd [dot] edu</p>
        </div>
      </div>
    </aside>
  );
}
