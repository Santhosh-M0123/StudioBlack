import styles from "./visit.module.css";

const Booknow = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.left_map}>
        <h1>Have a look at our site</h1>
        <p>We waiting to change your styles</p>
      </div>
      <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.133598551116!2d77.02459607493763!3d11.103419489065924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f83350b6be39%3A0xd5e7ea7227568ae2!2sSNS%20College%20of%20Engineering%20(Autonomous)!5e0!3m2!1sen!2sin!4v1693758843202!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border: 0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
};

export default Booknow;
