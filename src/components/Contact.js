import React, { useEffect, useState } from "react";
import styled from "styled-components";
import contactBg from "../img/contact-bg_1.jpg";
import SectionTitle from "./SectionTitle";
import { sectionTitleAnimation } from "../animations/sectionTitleAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faYoutube,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Loader } from "./Loader";
import gsap from "gsap";
import smoothscroll from "smoothscroll-polyfill";

const Wrapper = styled.section`
  position: relative;
  padding: 60px 20px 20px;
  background-image: url(${contactBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 2100px;
  margin: 0 auto;
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgb(4, 5, 25);
  background: linear-gradient(
    180deg,
    rgba(4, 5, 25, 1) 0%,
    rgba(4, 5, 25, 1) 10%,
    rgba(4, 5, 25, 0.7) 30%,
    rgba(4, 5, 25, 0.7) 75%,
    rgba(4, 5, 25, 1) 100%
  );
  ::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    display: none;
    background: rgb(4, 5, 25);
    background: linear-gradient(
      90deg,
      rgba(4, 5, 25, 1) 0%,
      rgba(4, 5, 25, 0) 15%,
      rgba(4, 5, 25, 0) 75%,
      rgba(4, 5, 25, 1) 100%
    );

    @media only screen and (min-width: 1920px) {
      display: block;
    }
  }
`;

const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 60px 20px 0;
`;

const Description = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #f2f2f2;
  font-size: 18px;
  line-height: 1.8;
  font-weight: bold;
  text-align: center;
  visibility: hidden;

  @media only screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const Socials = styled.ul`
  margin: 40px auto;
  list-style: none;
  max-width: 225px;
  padding: 5px 0;
  visibility: hidden;
  @media only screen and (min-width: 1024px) {
    max-width: 264px;
  }
  li {
    margin: 10px 0;
    @media only screen and (min-width: 1024px) {
      padding: 5px 0;
    }
  }
  a,
  p {
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    color: #f2f2f2;
    text-decoration: none;
    cursor: pointer;
    transition: 0.15s color linear;

    @media only screen and (min-width: 1024px) {
      &:hover {
        color: #bf2ac8;
      }
    }

    @media only screen and (min-width: 1024px) {
      font-size: 18px;
    }
    span.icon {
      font-size: 26px;
      width: 50px;
      text-align: center;
      @media only screen and (min-width: 1024px) {
        font-size: 30px;
      }
    }
    span.name {
      margin-left: 15px;
    }
  }
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(5, 7, 27, 0.6);
  padding: 10px;
  margin: 10px auto;
  @media only screen and (orientation: landscape) {
    width: 65%;
  }
  @media only screen and (min-width: 736px) {
    width: 65%;
  }
  @media only screen and (min-width: 1024px) {
    width: 500px;
  }

  div.status {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(2px);
    font-size: 30px;
    color: #f2f2f2;
    flex-direction: column;
    h3 {
      text-align: center;
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      color: #f2f2f2;
      margin-bottom: 25px;
    }
  }

  input[type="text"],
  input[type="email"] {
    margin: 5px 0;
    background: none;
    border: none;
    border: 2px solid #bf2ac8;
    padding: 5px 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    color: #f2f2f2;
    @media only screen and (min-width: 1024px) {
      height: 45px;
    }
  }
  input::placeholder,
  textarea::placeholder {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    color: #f2f2f2;
    @media only screen and (min-width: 1024px) {
      font-size: 14px;
    }
  }
  textarea {
    margin: 5px 0;
    background: none;
    border: 2px solid #bf2ac8;
    padding: 5px 10px;
    resize: none;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    color: #f2f2f2;
  }

  button {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    color: #f2f2f2;
    background: #bf2ac8;
    border: none;
    padding: 5px 0;
    margin: 5px 0;
    width: 100px;
    align-self: center;
    cursor: pointer;
    transition: all 0.15s linear;
    @media only screen and (min-width: 1024px) {
      &:hover {
        color: #bf2ac8;
        background: #f2f2f2;
      }
    }
    @media only screen and (min-width: 1024px) {
      font-size: 16px;
      padding: 10px 15px;
    }
  }

  p.error {
    color: red;
    font-size: 12px;
    @media only screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }
`;
const Contact = () => {
  useEffect(() => {
    const title = document.querySelector(".contact-section-title");
    let executed = false;
    window.addEventListener("scroll", () => {
      const height = window.innerHeight;
      const bottom = title.getBoundingClientRect().bottom;

      if (!executed && height >= bottom) {
        executed = true;
        sectionTitleAnimation(title);
      } else return;
    });
  });
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState(" ");
  const [mailErrorMessage, setMailErrorMessage] = useState(" ");
  const [messageErrorMessage, setMessageErrorMessage] = useState(" ");
  const [status, setStatus] = useState("");

  const resetForm = () => {
    setName("");
    setMail("");
    setMessage("");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const txtarea = document.querySelector("textarea");
    const inputMail = document.querySelector(`input[type="email"]`);
    const inputName = document.querySelector(`input[type="text"]`);

    if (inputName.value.length < 3) {
      setNameErrorMessage("Name should consist of at least 3 letters.");
    }
    if (inputMail.value.length === 0) {
      setMailErrorMessage(`Invalid email address.`);
    }
    if (txtarea.value.length < 3) {
      setMessageErrorMessage(`Hey! So where is your question?`);
    }

    if (
      nameErrorMessage.length === 0 &&
      mailErrorMessage.length === 0 &&
      messageErrorMessage.length === 0
    ) {
      setStatus("sending...");
      const form = e.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          setStatus("Mail has been sent");
          setTimeout(() => {
            resetForm();
            setStatus("");
          }, 2000);
        } else {
          setStatus("Something went wrong. Try again later");
          setTimeout(() => {
            resetForm();
            setStatus("");
          }, 2000);
        }
      };
      xhr.send(data);
    }
  };
  const handleNameBlur = e => {
    if (e.target.value.length > 0) {
      if (e.target.value.length < 3) {
        setNameErrorMessage("Name should consist of at least 3 letters");
      } else setNameErrorMessage("");
    } else setNameErrorMessage("");
  };
  const handleMailBlur = e => {
    if (e.target.value.length > 0) {
      if (e.target.value.indexOf("@") === -1) {
        setMailErrorMessage(
          `"${e.target.value}" address is incomplete. Email address should include "@".`
        );
      } else if (e.target.value.indexOf("@") > -1) {
        if (e.target.value.indexOf("@") + 1 === e.target.value.length) {
          setMailErrorMessage(
            `Invalid email address. "${e.target.value}" address is incomplete.`
          );
        } else setMailErrorMessage("");
      } else setMailErrorMessage("");
    } else setMailErrorMessage("");
  };

  const handleMailClick = () => {
    smoothscroll.polyfill();
    const form = document.querySelector("form");
    const formTitle = document.querySelector(".form-title");
    formTitle.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      const tl = gsap.timeline({ paused: true });
      tl.fromTo(form, { x: 0 }, { x: -10, duration: 0.05 }).fromTo(
        form,
        { x: -10 },
        { x: 10, duration: 0.05 }
      );

      tl.play()
        .yoyo(true)
        .repeat(3);
    }, 500);
  };
  return (
    <Wrapper className="contact">
      <Gradient />
      <SectionTitle className="contact-section-title">contact</SectionTitle>
      <Content>
        <div className="fade-in-container">
          <Description className="second-element-fade-in">
            You can find me online in many places...
          </Description>
        </div>

        <Socials>
          <li className="steps">
            <a href="https://github.com/mikulskee">
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span className="name">mikulskee</span>
            </a>
          </li>
          <li className="steps">
            <a href="https://www.instagram.com/miikulskee/">
              <span className="icon">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className="name">miikulskee</span>
            </a>
          </li>
          <li className="steps">
            <a href="https://www.youtube.com/user/MikulskeeTV/">
              <span className="icon">
                <FontAwesomeIcon icon={faYoutube} />
              </span>
              <span className="name">Mateusz Mikulski</span>
            </a>
          </li>
          <li className="steps">
            <a href="https://www.linkedin.com/in/mikulski-mateusz/">
              <span className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
              <span className="name">Mateusz Mikulski</span>
            </a>
          </li>
          <li className="steps" onClick={handleMailClick}>
            <p>
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="name">m.mikulski@codeverse.pl</span>
            </p>
          </li>
        </Socials>
        <div className="fade-in-container">
          <Description className="second-element-fade-in form-title">
            don't hesitate to write me a message!
          </Description>
        </div>

        <Form
          id="gform"
          onSubmit={handleSubmit}
          action="https://script.google.com/macros/s/AKfycbx8R9YrPa1aLtQD-gMLJwe5vTnLQ4qGlh4-H_7KxNniI9jlBPI/exec"
          method="POST"
          data-email="biuro@codeverse.pl"
          status={status}
        >
          {status.length === 0 ? null : (
            <div className="status">
              <h3>{status}</h3>
              {status === "sending..." ? <Loader /> : null}
            </div>
          )}

          <input
            id="name"
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
              if (e.target.value.length > 2) {
                setNameErrorMessage("");
              }
            }}
            onBlur={handleNameBlur}
          />
          <p className="error name-error">{nameErrorMessage}</p>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="mail"
            value={mail}
            onChange={e => {
              setMail(e.target.value);
              if (e.target.value.indexOf("@") > -1) {
                setMailErrorMessage("");
              }
            }}
            onBlur={handleMailBlur}
          />
          <p className="error mail-error">{mailErrorMessage}</p>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="your message"
            value={message}
            onChange={e => {
              setMessage(e.target.value);
              setMessageErrorMessage("");
            }}
          ></textarea>
          <p className="error message-error">{messageErrorMessage}</p>
          <button type="submit">send</button>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default Contact;
