'use client'
import React from "react";
import css from "./about.module.css";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    
    <div className={css.fullpage}>
      <motion.h1
        initial={{ opacity: 0, y: 0 , x:10 }} // Start state
        animate={{ opacity: 1.5, y: 0, scale: 1.1 }} // End state
        transition={{ duration: 1 }}
        className={css.heading}
      >
        ABOUT ME
      </motion.h1>{" "}
      <hr className={css.line} />
      <p className={css.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut
        eligendi velit, eum soluta quod deleniti aspernatur enim! Excepturi ipsa
        eum ullam obcaecati, inventore minima deserunt repudiandae beatae
        laboriosam reiciendis fugiat dolores unde dicta soluta nam sunt vitae
        repellat non voluptate voluptates vel enim maxime eaque! Vitae excepturi
        minima nisi ullam unde illum, corporis ipsum! Quis, obcaecati quae qui
        animi ipsum magnam nihil eos illum. Ullam perspiciatis perferendis eius
        at fugiat cupiditate doloremque consequatur animi amet, aperiam id
        blanditiis iste excepturi rem odit, impedit sint ratione commodi ut esse
        accusantium?
      </p>
    </div>
    
   

  );
};

export default AboutPage;
