import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact__container">
        <h2 className="title">Message Me!</h2>
        <p>If you have any thing to talk with me, please contact me!</p>
        <form action="" id="Contact__Form">
          <input type="hidden" />
          <input type="hidden" />
          <div className="contact__fields">
            <div className="field">
              <input
                type="text"
                className="field__input"
                autoComplete="name"
                id="ContactForm-name"
                placeholder="Name"
              />
              <label className="field__label" for="ContactForm-name">
                Name
              </label>
            </div>
            <div className="field field--with--error">
              <input
                type="text"
                className="field__input"
                autoComplete="email"
                id="ContactForm-email"
                placeholder="Email"
              />
              <label className="field__label" for="ContactForm-email">
                Email<span>*</span>
              </label>
            </div>
          </div>
          <div className="field">
            <input
              className="field__input"
              type="tel"
              name="contact"
              id="ContactForm-phone"
              autoComplete="tel"
            />
            <label className="field__label" for="ContactForm-phone" />
          </div>
          <div className="field">
            <textarea
              className="text-area field__input"
              name="contact"
              id="ContactForm-body"
              cols="30"
              rows="10"
            />
            <label
              className="form__label field__label"
              for="ContactForm-body"
            />
          </div>
          <div className="contact__button">
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact
