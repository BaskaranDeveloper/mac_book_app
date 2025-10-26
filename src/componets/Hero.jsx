import React, { useRef, useEffect } from "react";

const Hero = () => {
  // create a video ref
  const videoRef = useRef();

  // useEffect
  useEffect(() => {
    // if (videoRef.current) videoRef.current.playbackRate = 5;
  }, []);

  return (
    <section id="hero">
      {/* title section */}
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Pro" />
      </div>
      {/* video section */}
      <video src="/videos/hero.mp4" autoPlay muted playsInline />
      {/* create a buy button */}
      <button>Buy</button>
    </section>
  );
};

export default Hero;
