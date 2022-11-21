import { GrDocumentDownload } from "react-icons/gr";
import sanjay_profile from "../../../src/Assets/sanjay_profile.jpg";
import styles from "./HeroHome.module.css";

function HeroHome() {
  return (
    <div className={styles.herohome}>
      <div>
        <h1><span>I design products</span> that delight and inspire people.</h1>
        <p>Hi! I'm Sanjay, a product designer based in Vadodara. I create user-friendly interfaces for fast-growing start-ups.</p>
        <div className={styles.btns}>
            <div className="book_call">Book a call</div>
            <div className="download_cv">Download CV <GrDocumentDownload /></div>
        </div>
      </div>
      <div className={styles.profile_picture}>
        <img src={sanjay_profile} alt="profile_picture" />
      </div>
    </div>
  );
}

export default HeroHome;
