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
            I’m Jane, a Ph.D. student in Education Studies at UC San Diego. I trained as an illustrator before moving into research, and I study human agency in human–AI interaction: what people want to keep doing themselves, and when they want AI to step in.
          </p>
          <p>
            I explore this in two settings. With creative professionals, I study how authorship shapes what they delegate to generative AI. With K–12 students and teachers, I study AI tutoring, AI literacy, and how educators adapt AI to their local classrooms.
          </p>
          <p>I’m always open to collaborations and research conversations. Feel free to reach out at jal221 [at] ucsd [dot] edu.</p>
        </div>
      </div>
    </aside>
  );
}
