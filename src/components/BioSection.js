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
       {/*   <a href="https://openprocessing.org/user/453261#sketches"   target="_blank"
  rel="noopener noreferrer" className="bio-link">OpenProcessing</a>*/}
        <a href="mailto:jal221@ucsd.edu"   target="_blank"
  rel="noopener noreferrer" className="bio-link">Email</a>
      </div>

      {/* image + bio text */}
      <div className="bio-intro">
        <img src={profilePic} alt="Jane Hanqi Li" className="bio-photo" />
        <div className="bio-text">
          <p>
           I’m Jane, a Ph.D. student in Education Studies at UC San Diego, studying how people learn, collaborate, and engage with AI.
          </p>
          <p>
My work bridges Human–Computer Interaction, Human–AI Interaction, and Education Innovation. I explore how AI can observe, interpret, and assist classroom dynamics, understanding what teachers are trying to do, how students are receiving it, and how technology can support instruction in more responsive, human-centered, and effective ways.
          </p>
          <p>I’m always open to collaborations, research conversations, and new project opportunities, feel free to reach out at jal221 [at] ucsd [dot] edu.</p>
        </div>
      </div>
    </aside>
  );
}
