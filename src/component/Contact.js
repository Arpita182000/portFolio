import React, { useRef, useState } from "react";
import Loader from "react-loaders";
import Animate from "./AnimatedLetters/Animate";
import "./Contact.scss";
import "./Layout/index.scss";
import emailjs from "@emailjs/browser";
function Contact() {
  const [letterClass, setLetterclass] = useState("text-animate");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h55nekj', 'template_4halgkp', form.current, {
        publicKey: '7IXSEDeQEIhMHSakm',
      })
      .then(
        () => {
          alert("messege is sent successfully");
          window.location.reload(false)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Animate
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />

                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message"></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Contact;
