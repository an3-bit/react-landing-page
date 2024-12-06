
import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero"; // Import the Hero component

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0); // Keeps track of the current hero section
  const [playStatus, setPlayStatus] = useState(false); // Controls video playback

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000)
  },[])

  return (
    <div>
      {/* Background Component */}
      <Background playStatus={playStatus} heroCount={heroCount} />

      {/* Navbar Component */}
      <Navbar />

      {/* Hero Component */}
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]} // Pass the current heroData based on heroCount
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
