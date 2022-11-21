import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import Logo from "../NavBar/Logo";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        <h1>Let's make something together, say Hi</h1>
        <Logo />
        <p><FaHome size={20} />Vadodara, Gujarat</p>
        <p><FaPhoneAlt size={20} />(+91)-845-954-2736</p>
        <p><TfiEmail size={20} />sanjayrathva091@outlook.com</p>
      </div>
      <div className={styles.footer_menus}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>GitHub</li>
        </ul>
      </div>
      <div>All Rights Reserved</div>
    </div>
  );
}

export default Footer;
