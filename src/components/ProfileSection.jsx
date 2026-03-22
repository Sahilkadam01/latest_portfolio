import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';


const ProfileSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  // Handle scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation effect for profile image based on scroll
  const scaleEffect = {
    scale: 1 + scrollY * 0.0001,  // Adjust the multiplier for zoom sensitivity
    transition: { duration: 0.2 },
  };

  return (
    <div className="profile-section">
      <div className="left-side">
        <h1>Software Developer</h1>
        <h2>Welcome to My Portfolio</h2>
        <p>
          Hi, I'm a passionate software developer who loves creating beautiful
          and efficient web applications. Check out my work and get in touch!
        </p>
      </div>
      
      <motion.div className="right-side"  animate={controls} style={scaleEffect}>
        <img src="./src\assets\profile-image.jpg" alt="Profile" className="profile-image"/>
      </motion.div>
    </div>
  );
};

export default ProfileSection;