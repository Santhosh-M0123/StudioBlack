import styles from './Test.module.css'
import Image from 'next/image'

const Test = (props) => {
  return (
    <div className={styles.test_cards}>
        <div className={styles.card_top}>
            <p>{props.feedback}</p>
        </div>
        <div className={styles.card_bottom}>
            <div className={styles.profile}>
                <Image src={props.image} width={40} height={40} alt='profile' className={styles.test_img}/>
            </div>
            <div className={styles.profile_name}>
                <h4>{props.name}</h4>
                <p>{props.email}</p>
            </div>
        </div>
    </div>
  )
}

export default Test