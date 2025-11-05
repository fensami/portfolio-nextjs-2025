"use client";
import { useState } from "react";
// import ProfileImage from "../assets/img/profile-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

const MainProfile = () => {
  const [copied, setCopied] = useState(false);

  const email = "asadurjamannursabbir@gmail.com";
  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };
  const ProfileImage =
    "https://portfolio-update-2024.vercel.app/assets/profile-img-DRGUVHxp.jpg";
  return (
    <div className="portfolio-global-box">
      <div className="relative portfolio-img ">
        <Image src={ProfileImage} height={270} width={390} alt="profile-img" />
      </div>
      <h1 className="profile-title">Asadur Jaman Nur 👋</h1>
      <h4 className="profile-para">
        I’m a passionate Front-End Developer with 1 year of experience building
        responsive, user-friendly websites. I’ve contributed to commercial
        projects on ThemeForest and am currently focused on improving my skills
        in React, Next.js, and modern UI/UX development.
      </h4>
      {/* <h4 className='profile-para'>A Passionate Front End Developer 🖥️ having 1 years of Experiences.I have experience working at ThemeForest.Now I am working to improve myself.</h4> */}
      <div className="all-btns mt-8">
        <Link
          href="https://drive.google.com/file/d/1iNySfx05c3OUzB3aj-3GUMsx1gys6iKd/view?usp=drive_link"
          target="_blank"
          className="portfolio-btn"
        >
          <span className="btn-icon">
            <FontAwesomeIcon icon={faFilePdf} />
          </span>
          Resume
        </Link>
        <Link href="/" className="portfolio-btn" onClick={handleCopy}>
          <span className="btn-icon">
            <FontAwesomeIcon icon={faClone} />
          </span>
          {copied ? "Copied!" : "Copy Email"}
        </Link>
      </div>
      <div className="social-link">
        <Link
          href="https://www.facebook.com/profile.php?id=100081583921609"
          target="_blank"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link
          href="https://github.com/fensami"
          target="_blank"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faGithubAlt} />
        </Link>
        <Link
          href="https://www.instagram.com/asadurjamannursabbir"
          target="_blank"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/asadur-jaman-nur-494353197"
          target="_blank"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
      </div>
    </div>
  );
};

export default MainProfile;
