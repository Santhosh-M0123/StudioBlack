import styles from "./testimonial.module.css";
import Test from "../Test_cards/Test";

const testimonials = () => {
  let data = [
    {
      id: 1,
      name: "Antonio",
      email: "antonia@gmail.com",
      image: "/assests/testimonial_1.jpg",
      feedback:
        "Really awesome customer experiences. Nice welcome and hair stylish are really great..!",
    },
    {
      id: 2,
      name: "Harold Das",
      email: "das_harlod@gmail.com",
      image: "/assests/testimonial_2.jpg",
      feedback:
      "Hair cuts and body massage experts are really awesome nice place to have a style...!",
    },
    {
      id: 3,
      name: "Ishu",
      email: "Ishu@gmail.com",
      image: "/assests/testimonial_3.jpg",
      feedback:
      "Interiors are looks great. Experts are appointed to take care of customers is really awesome",
    },
  ];
  return (
    <div className={styles.testimonials}>
      <div className={styles.test_content}>
        <p>
          Our customer loves us! Read what they have to say below.
          <br /> Visit our site you will be also love us
        </p>
      </div>
      <div className={styles.testmonials_cards_container}>
        {data.map((i, index) => (
          <Test key={index} name={i.name} image={i.image} email={i.email} feedback = {i.feedback}/>
        ))}
      </div>
    </div>
  );
};

export default testimonials;
