import React, { useState, useEffect } from 'react';
import TypingEffect from "../profile_section/TypingEffect";

const ProfileSection = () => {
  

  return (
    <div className="page-center">
    <div className="profile-section">
      
        <div className="left-side">
        {/* <h1>Software Developer</h1> */}
         <h1 className="text-5xl md:text-6xl font-bold pb-[20px]">
        Hey, I'm SAHIL a <br></br><span className="typing_text mt-[10px] mb-[10px]"><TypingEffect /></span>
      </h1>
        <h2>Welcome to My Portfolio</h2>
        <span className="line"></span><p>
          Hi, I'm a passionate software developer who loves creating beautiful
          and efficient web applications. Check out my work and get in touch!
        </p>
        </div>
      
        <div className="right-side">
        {/* <img src="./src/assets/profile-image.jpg" alt="Profile" className="profile-image"/> */}
    <div class="grid grid-cols-2 gap-6 w-[900px]">

  
  <div class="relative rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-green-400/20
              shadow-[0_0_40px_rgba(0,255,150,0.08)]
              hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(0,255,150,0.25)]
              transition-all duration-500
              animate-float from-left">

    <div class="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>

    <h1 class="text-5xl font-bold text-green-100">$500K</h1>
    <p class="mt-3 text-lg text-green-200/80">
      Saved Through <br/> Resource Optimization
    </p>
  </div>

  
  <div class="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-green-400/20
              hover:scale-105 hover:-translate-y-2 transition-all duration-500
              animate-float from-right delay-1">

    <img src="./src/assets/profile-image.jpg"
         class="w-full h-full object-cover transition duration-500 hover:scale-110"/>

    <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
  </div>

  
  <div class="rounded-2xl p-6 text-center bg-white/5 backdrop-blur-xl border border-green-400/20
              hover:scale-105 hover:-translate-y-2 transition-all duration-500
              animate-float from-bottom delay-2">

    <h2 class="text-3xl font-bold text-green-100">100%</h2>
    <p class="text-green-200/70 mt-1">Code Quality</p>
  </div>

  
  <div class="rounded-2xl p-6 text-center bg-white/5 backdrop-blur-xl border border-green-400/20
              hover:scale-105 hover:-translate-y-2 transition-all duration-500
              animate-float from-top delay-3">

    <h2 class="text-3xl font-bold text-green-100">2+</h2>
    <p class="text-green-200/70 mt-1">Years of Coding</p>
  </div>

</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;