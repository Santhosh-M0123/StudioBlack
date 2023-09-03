import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={styles.title}>
        <h1>{props.name}</h1>
        <p></p>
    </div>
  )
}

export default Title