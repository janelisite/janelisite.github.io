// src/App.js
import React from "react";
import BioPanel from "./components/BioSection";
import Header from "./components/Header";
import Publications from "./components/Publications";
import News from "./components/News";
import Footer from "./components/Footer";
import "./App.css";            
import texture from "./texure1.png"; 

export default function App() {
  return (
    <main
      className="page"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundRepeat: "repeat",        // or "no-repeat"
        backgroundSize: "cover",            // try "cover" if you want full-bleed
        backgroundAttachment: "scroll",     // stays fixed while scrolling
        backgroundPosition: "top left",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${texture})`,
        
      }}
      
    >
      {/* LEFT: scrollable content */}
      <section className="col-left" aria-label="Main content">
        <div className="section publications">
          <h2 className="h2">Selected Publications</h2>
          <Publications />
        </div>

        <div className="section news">
          <h2 className="h2">Recent News</h2>
          <News/>
        </div>

      <div className="section">
        <Footer/>
      </div>
      </section>

      {/* RIGHT: sticky header + bio */}
      <aside className="col-right" aria-label="Sidebar">
        <div className="section">
          <Header />
        </div>
        <div className="section bio">
          <BioPanel />
        </div>
      </aside>
    </main>
  );
}
