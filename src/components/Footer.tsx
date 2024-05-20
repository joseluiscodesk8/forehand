'use client'

import React, { useState } from 'react';
import styles from "../styles/index.module.scss";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
    const [showContact, setShowContact] = useState(true);

    const variantsConatc = {
        hidden: { opacity: 0, x: -150 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        },
      };

      const variantsInfo = {
        hidden: { opacity: 0, x: 150 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        },
      };

    return (
        <footer className={styles.pie}>
            <div className={styles.titulos}>
                <h5 onClick={() => setShowContact(true)}>Contactanos</h5>
                <h5 onClick={() => setShowContact(false)}>Informacion</h5>
            </div>
            {showContact ? (
                <motion.section 
                variants={variantsConatc}
      initial="hidden"
      animate="visible"
                className={styles.contact}>
                    <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp /> WhatsApp
                    </a>
                    <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer">
                        <FaFacebook /> Facebook
                    </a>
                    <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
                        <FaInstagram /> Instagram
                    </a>
                    <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
                        <FaTwitter /> Twitter
                    </a>
                </motion.section>
            ) : (
                <motion.aside 
                variants={variantsInfo}
      initial="hidden"
      animate="visible"
                className={styles.info}>
                    <ul>
                        <li>Visita nuestra tienda online</li>
                        <li>Contacta a nuestros vendedores</li>
                        <li>Encuentra nuestros productos en tiendas físicas</li>
                        <li>Soporte al cliente 24/7</li>
                    </ul>
                </motion.aside>
            )}
        </footer>
    );
}

export default Footer;
