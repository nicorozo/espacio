import Logo from "./Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
      </nav>
    </header>
  );
};

export default Header;
