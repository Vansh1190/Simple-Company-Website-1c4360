import React from "react";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;