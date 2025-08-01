'use client'

import Footer from "./components/Footer/page";
import Hero from "./components/Hero/page";
import Message from "./components/Message/page";
import Navbar from "./components/Navbar/page";
import TrelloFeature from "./components/TrelloFeature.tsx/page";

export default function Home() {
  return (
    
      <div className="min-h-screen">
      <Navbar />
      <Hero/>  
      <Message/>
     <TrelloFeature/>   
      <Footer/>   
     </div>
  );
}

