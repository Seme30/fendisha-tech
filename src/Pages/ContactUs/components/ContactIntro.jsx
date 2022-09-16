import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contactintro.css";
import { ScaleLoader } from "react-spinners";
import Modal from "./Modal";

const ContactIntro = () => {
  const form = useRef();
  const [isSent, setSent] = useState(false);
  const [text, setText] = useState("");

  const [isLoading, setLoading] = useState(false);

  var sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_r9vddxu",
        "template_bpd0k25",
        form.current,
        "UWkR-ddpwCACsJb9N"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          if (response.status == 200) {
            setSent(true);
            setText(response.text);
          }
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    e.target.reset();
  };

  return (
    <section className="section section-contact">
      <div className="container">
        <div className="contact-top">
          <h6 className="subtitle">Contact the Team!</h6>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div class="form-group">
            <label name="firstname">First name*</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              required
              class="form-element"
              placeholder="Abebe"
            />
          </div>
          <div class="form-group">
            <label name="lastname">Last name*</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              required
              class="form-element"
              placeholder="Kebede"
            />
          </div>
          <div class="form-group">
            <label name="email">Email address*</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              class="form-element"
              placeholder="Abebe@example.com"
            />
          </div>
          <div class="form-group">
            <label name="company">Company</label>
            <input
              type="text"
              name="company"
              id="company"
              class="form-element"
              placeholder="Company"
            />
          </div>
          <div class="form-group full">
            <label name="message">What are you looking for?</label>
            <textarea
              name="message"
              id="message"
              class="form-element"
              placeholder="I want a website please..."
            ></textarea>
          </div>
          <div className="hero__btns">
            <button
              className="secondary__btn"
              type="submit">
              Send Message
            </button>
          </div>
          {isSent && (
            <Modal text={text} setIsOpen={setSent} setLoading={setLoading} />
          )}
          {!!(!isSent & isLoading) && (
            <div className="loader">
              <div className="load">
                <ScaleLoader />
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactIntro;
