import React, { useState } from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import "./SocialIcon.css";

const SocialIcon = () => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => setActive((prev) => !prev);

  const socialLinks = [
    { icon: <FaFacebook />, color: "#1877f2", url: "https://www.facebook.com/edverciitybylivetechskills" },
    { icon: <FaWhatsapp />, color: "#25d366", url: "https://wa.me/8208290537" },
    { icon: <FaLinkedin />, color: "#0a66c2", url: "https://www.linkedin.com/in/edver-livetechskills/" },
    { icon: <FaInstagram />, color: "#c32aa3", url: "https://www.instagram.com/edverciity_livetechskills/" },
    { icon: <FaGithub />, color: "#1b1e21", url: "" },
    { icon: <FaYoutube />, color: "#ff0000", url: "https://www.youtube.com/results?search_query=edverciity" },
  ];

  return (
    <div className={`menu ${active ? "active" : ""}`}>
      {/* Toggle Button */}
      <div className="toggle" onClick={toggleMenu}>
        <IoShareSocial size={32} />
      </div>

      {/* Social Links Circle */}
      <ul>
        {socialLinks.map((link, index) => (
          <li
            key={index}
            style={{ "--i": index, "--clr": link.color }}
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcon;
