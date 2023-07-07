import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-900 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <NavBar/>
      <Home/>
      <About/>
      {/*w-full h-screen font-bodyfont text-textcolor bg-gradient-to-b from-black to-gray-900 overflow-hidden */}
      <Portfolio/>
      <Experience/>
      <SocialLinks/>
      <Contact/>
    </div>
  );
}

export default App;
