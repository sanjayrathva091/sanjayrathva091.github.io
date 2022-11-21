import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import styles from "./NavBar.module.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.nav}>
      <Logo />
      <span className={isOpen ? styles.open : styles.close}><MenuItem /></span>
      <span className={styles.grclose} onClick={handleClickMenu}>
        {isOpen ? <GrClose size="2rem" />:<GiHamburgerMenu size="2rem" />}</span>
    </div>
  );
}

export default NavBar;
