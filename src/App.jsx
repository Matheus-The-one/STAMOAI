import React from "react";
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter as Router } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => {
  return (
    <ClerkProvider publishableKey="pk_test_Z2xvd2luZy16ZWJyYS00NS5jbGVyay5hY2NvdW50cy5kZXYk">
      
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Hero />
          <Benefits />
          <Collaboration />
          {/* <Services /> */}
          <Pricing />
          {/* <Roadmap /> */}
          <Footer />
        </div>
        <ButtonGradient />
      
    </ClerkProvider>
  );
};

export default App;