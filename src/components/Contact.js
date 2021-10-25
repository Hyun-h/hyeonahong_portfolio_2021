import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Button } from "./Button";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "my_gmail",
        "template_mjw60rh",
        form.current,
        "user_RZbryOSZbbjnHF6prl2h6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact__section">
      <div className="contect__wrapper">
        <div className="contect__text">
          <h1>Contect</h1>
          <p>저에게 메일을 보내실 수 있습니다.</p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <ul className="email_form">
            <li>
              <label>Name</label>
            </li>
            <li>
              <input
                type="text"
                name="user_name"
                placeholder="이름을 입력하세요"
              />
            </li>
            <li>
              <label>Email</label>
            </li>
            <li>
              <input
                type="email"
                name="user_email"
                placeholder="이메일을 입력하세요"
              />
            </li>
            <li>
              <label>Message</label>
            </li>
            <li>
              <textarea name="message" placeholder="보낼 말을 입력하세요" />
            </li>
            <li className="contect__btn">
              <Button
                buttonSize="btn--wide"
                buttonColor="blue"
                type="submit"
                value="send"
              >
                Send
              </Button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Contact;
