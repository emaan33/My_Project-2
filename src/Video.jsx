import React, { useState } from "react";
import video from "./images/video.mp4";
import Nav from "./Nav";
import Hero from "./Hero";

const Video = () => {
  const [msg, setmsg] = useState(false);
  return (
    <div className=" main">
      <video className="videoo" src={video} autoPlay loop muted />

      <div>
        <Nav />
      </div>

      <div>
        <Hero />
      </div>
    </div>
  );
};

export default Video;
