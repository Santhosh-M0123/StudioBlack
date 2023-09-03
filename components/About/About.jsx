"use client"
import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import {GiBeveledStar} from "react-icons/gi";
import {toast} from "react-toastify"

const About = () => {
  const Alert = () => {
    toast.warn("Sorry this service isn't available");
  }
  return (
    <div className={styles.about_content}>
      <div className="abt_left">
        <Image
          src={"/assests/services_3.jpg"}
          width={480}
          height={450}
          alt="Images"
          className={styles.img}
        />
      </div>
      <div className={styles.abt_right}>
        <p>
          At hair studio, we believe that beauty is an art form, and every
          individual is a canvas ready to be adorned with creativity and care.
          Our journey began with a vision to redefine beauty standards and
          empower our clients to embrace their unique charm.Our philosophy
          centers around celebrating your individuality. Whether you're looking
          for a bold transformation or a subtle enhancement, we're here to
          listen, inspire, and bring your vision to life. Your satisfaction and
          confidence are our top priorities.
        </p>
        <div className={styles.btn} onClick={() => Alert()}><span>Membership</span> <GiBeveledStar className={styles.icon}/></div>
      </div>
    </div>
  );
};

export default About;
