import styles from "./services.module.css";
import Cards from "../cards/Cards";
import Image from "next/image";
const Services = () => {
  return (
    <div className={styles.service_container}>
    <div className={styles.services}>
      <div className={styles.left_services}>
        <Cards service="Haircuts and Styling" image = "/assests/scissors.svg"/>
        <Cards service="Hair Coloring and Highlights" image = "/assests/brush.svg"/>
      </div>
      <div className={styles.center_services}> 
        <Image src={"/assests/testimonial_1.jpg"} width={400} height={400} alt="service images" className={styles.service_img}/>  
      </div>
      <div className={styles.right_services}>
        <Cards service="Manicures and Pedicures" image = "/assests/facial.png"/>
        <Cards service="Facials and Skincare" image = "/assests/face.svg"/>
      </div>
    </div>
    <div className={styles.bottom_service}>
        <Cards service="Massage and Relaxation" image = "/assests/massage.png"/>
    </div>
    </div>
  );
};

export default Services;
