import React, { useState, useEffect } from 'react';
import TypingEffect from "../profile_section/TypingEffect";

const ProfileSection = () => {
  

  return (
    <div className="profile-section">
      <div className="left-side">
        {/* <h1>Software Developer</h1> */}
         <h1 className="text-5xl md:text-6xl font-bold pb-[20px]">
        I'm SAHIL a <br></br><span className="typing_text mt-[10px] mb-[10px]"><TypingEffect /></span>
      </h1>
        <h2>Welcome to My Portfolio</h2>
        <p>
          Hi, I'm a passionate software developer who loves creating beautiful
          and efficient web applications. Check out my work and get in touch!
        </p>
      </div>
      
      <div className="right-side">
        <img src="./src\assets\profile-image.jpg" alt="Profile" className="profile-image"/>
      </div>
    </div>
  );
};

export default ProfileSection;