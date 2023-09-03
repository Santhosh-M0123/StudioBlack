import styles from './footer.module.css'
import {AiOutlineInstagram} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
 
const Footer = () => {
    let openUrl = (url) => {
        window.open(url , "_blank")
    }
  return (
    <div className={styles.footer}>
        <p>Follows us on</p>
        <div className={styles.social_icons}>
            <AiOutlineInstagram onClick={() => openUrl("https://instagram.com/__mr.dusky__/")}  style={{cursor: "pointer"}}/>
            <AiFillTwitterCircle onClick={() => openUrl("https://santhosh-m0123.github.io/portfolio/")} style={{cursor: "pointer"}}/>
            <AiOutlineLinkedin onClick={() => openUrl("https://www.linkedin.com/in/santhosh-m-/")} style={{cursor: "pointer"}}/>
            <BsFacebook onClick={() => openUrl("https://github.com/Santhosh-M0123")} style={{cursor: "pointer"}}/>
        </div>
    </div>
  )
}

export default Footer