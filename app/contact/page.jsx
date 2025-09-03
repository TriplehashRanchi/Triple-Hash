"use client";
import React from "react";
import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section with Address */}
      <section className={styles.section}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <div className={styles.leftPanel}>
            <h1 style={{
            backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
            WebkitBackgroundClip: "text",
          }} className=" text-transparent bg-clip-text">We’re Just a Message Away !</h1>
            <p className={styles.subtext}>We’d love to hear from you. Reach us at.</p>

            <div className={styles.addressFormStyle}>
              <div className={styles.addressGroup}>
                <label><FaMapMarkerAlt /> Address:</label>
                <p>123 Business Street, New Delhi, India</p>
              </div>

              <div className={styles.addressGroup}>
                <label><FaPhoneAlt /> Phone:</label>
                <p>+91 98765 43210, +91 98765 43211</p>
              </div>

              <div className={styles.addressGroup}>
                <label><FaEnvelope /> Email:</label>
                <p>support@company.com, contact@company.com</p>
              </div>

              <div className={styles.addressGroup}>
                <label><FaClock /> Working Hours:</label>
                <p>Mon – Fri: 9 AM – 6 PM,Sat: 10 AM – 4 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Form Section Below */}
      <section className={styles.formSection}>
        <div className={styles.formWrapper}>
          <h2 style={{
            backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
            WebkitBackgroundClip: "text",
          }} className=" text-transparent bg-clip-text">From your mind to our team !</h2>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" id="firstName" name="firstName" placeholder=" " required />
              <label htmlFor="firstName">1. FIRST NAME *</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="lastName" name="lastName" placeholder=" " required />
              <label htmlFor="lastName">2. NAME *</label>
            </div>
            <div className={styles.formGroup}>
              <input type="email" id="email" name="email" placeholder=" " required />
              <label htmlFor="email">3. EMAIL *</label>
            </div>
            <div className={styles.formGroup}>
              <input type="tel" id="phone" name="phone" placeholder=" " />
              <label htmlFor="phone">4. PHONE *</label>
            </div>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <input type="text" id="company" name="company" placeholder=" " />
              <label htmlFor="company">5. COMPANY *</label>
            </div>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <textarea id="message" name="message" placeholder=" "></textarea>
              <label htmlFor="message">YOUR MESSAGE</label>
            </div>
            <div className={styles.buttonGroup}>
              <button type="submit">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
