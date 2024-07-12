import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.contact}>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:shubhamkumar77660@gmail.com">
            shubhamkumar77660@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/shubham-kumar-02959122b/">
            linkedin.com/shubham-kumar
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Shubhamkr77">github.com/Shubhamkr77</a>
        </li>
        <li className={styles.link}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg"
            alt="instagram icon"
            style={{ width: "50px", height: "50px" }}
          />
          <a href="https://www.instagram.com/shubham.kr77/?igsh=ZDBmYmNhcWdoeTN3&utm_source=qr">
            instagram.com/Shubham.kr77
          </a>
        </li>
      </ul>
    </footer>
  );
};
