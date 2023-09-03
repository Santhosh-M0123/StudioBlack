import styles from "./cards.module.css";
import {BsScissors} from "react-icons/bs"
import Image from "next/image";
const Cards = (props) => {
  return (
    <div className={styles.cards}>
        <div className={styles.icon_cards}>
            {/* <BsScissors className={styles.cards_img}/>
             */}
             <Image src={props.image} width={30} height={30} alt="service image" className={styles.cards_img}/>
        </div>
        <div className={styles.content_cards}>
            <h2>{props.service}</h2>
        </div>
    </div>
  )
}

export default Cards