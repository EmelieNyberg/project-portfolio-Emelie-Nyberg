// About.jsx

import { SocialLinks } from "../../../components/SocialLinks/SocialLinks";
import "./About.css"

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div>
          <h3>
            I am Emelie Nyberg Kedert
          </h3>

          <h1>
            Frontend Developer
          </h1>
        </div>
        <p>
          Emelie is a frontend developer with a strong foundation in JavaScript, React, and modern web technologies, complemented by experience in backend development with Node.js, Express, and MongoDB. With a background in digital transformation and system implementation, she brings both technical expertise and a problem-solving mindset to every project. Passionate about creating intuitive user experiences, she thrives in building interactive applications that blend functionality with great design.
        </p>
      </div>
      <SocialLinks />
    </div>
  );
};