import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.brand}>
            <h3>Studio <span>black</span></h3>
        </div>
        <div className="nav_right"></div>
    </div>
  )
}

export default Navbar