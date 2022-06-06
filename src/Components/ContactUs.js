import React from "react";

import BreadCrumb from "../UI/BreadCrumb";
import Input from "../UI/Input";

import ContactImg from '../Assets/contact-us.jpg'

import classes from './ContactUs.module.css'

const ContactInfo = () => {
    return (
        <section className={classes.info}>
            <p>Donec mattis consequat pharetra. Pellentesque egestas turpis eget mauris elementum mollis. Nulla interdum semper est, eget aliquet nulla varius hendrerit.</p>
            <div className={classes.contact}>
                <div>
                    <h5>Address</h5>
                    <p>Address Here</p>
                </div>
                <div>
                    <h5>Phone</h5>
                    <p>Phone Here</p>
                </div>
                <div>
                    <h5>Mail</h5>
                    <p>Mail Here</p>
                </div>
            </div>
        </section>
    )
}

const ContactForm = () => {
    return (
        <section className={classes.contact}>
            <h3>SEND a Letter</h3>
            <form className={classes.form}>
                <Input 
                type="text"
                value="Your Name"
                />
                <Input 
                type="email"
                value="Your Email"
                />
                <Input 
                type="text"
                value="Subject"
                />
                <Input 
                type="text"
                value="Your Phone Number"
                />
                <Input 
                type="text"
                value="Your Message"
                />
                <Input 
                type="submit"
                value="Send Message"
                />
            </form>
        </section>
    )
}

const ContactUs = () => {
    return(
        <>
        <BreadCrumb
            img={ContactImg}
            imgAlt='Camera taking a photo of the sunset' 
            pageTitle='Contact Us'
            crumb='Home / Contact Us'
            />
        <ContactInfo />
        <ContactForm />
        </>
        )
}

export default ContactUs;