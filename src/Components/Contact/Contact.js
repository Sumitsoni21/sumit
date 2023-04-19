import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2i3ggqm",
      "template_chhtaij",
      form.current,
      "msyF3Eiwm9mqrLW5b"
    );
    alert("Email Sent Successfully");
    e.target.reset();
  };

  return (
    <div className="contact section">
      <div className="contact_container container">
        <h3 className="contact_title">CONTACT ME</h3>
        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="name_email_div">
            <div className="contact_form_div">
              <label className="form_label">Name</label>
              <input
                type="text"
                className="form_input"
                name="name"
                placeholder="Write your name..."
                required
              ></input>
            </div>
            <div className="contact_form_div">
              <label className="form_label">Email</label>
              <input
                type="email"
                className="form_input"
                name="email"
                placeholder="Write your email..."
                required
              ></input>
            </div>
          </div>
          <div className="contact_form_div">
            <label className="form_label">Subject</label>
            <input
              type="text"
              className="form_input"
              name="subject"
              placeholder="Write your subject..."
            ></input>
          </div>
          <div className="contact_form_div textarea_div">
            <label className="form_label">Message</label>
            <textarea
              name="message"
              className="form_input"
              placeholder="write about your project..."
              required
            ></textarea>
          </div>
          <div className="button_container">
            <button className="contact_form_button button">Send Mail</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
