import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved.</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100085539760798"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.linkedin.com/in/ayushi-verma-9b5029252/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://instagram.com/_verma__ayushi_?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;