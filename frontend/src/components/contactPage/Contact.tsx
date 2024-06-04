"use client";
import { Link } from "react-router-dom";
import "./contact.scss";
import React, { useState } from "react";
import { createPostsActions } from "../../../redux/actions/postActions.ts";
import { useAppDispatch } from "../../../redux/hook.ts";
export type Props = {
  email: string;
  name: string;
  subject: string;
  message: string;
};
const ContactPage = () => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<Props>({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleShare = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createPostsActions(form));
    setForm({
      name: "",
      email: "",
      message: "",
      subject: "",
    });
  };

  return (
    <div id="contact" className="container-contact">
      <div className="wrapper">
        <div className="__a">
          <h1>Let's Work Together</h1>
          <span>My office:</span>
          <h1>Turkey/Istanbul</h1>
          <hr />
          <span>Call me:</span>
          <h1>+90 535 463 71 78</h1>
          <hr />
          <span>Mail me:</span>
          <h1>utkutoygunbektasoglu@gmail.com</h1>
          <hr />
          <span>Follow me:</span>
          <span className="__d">
            <Link
              to={"https://www.linkedin.com/in/utku-bektasoglu/"}
              target="_blank"
            >
              {" "}
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link to={"https://github.com/utkbkts"} target="_blank">
              {" "}
              <i className="fa-brands fa-github"></i>
            </Link>
          </span>
        </div>
        <div className="__b">
          <form action="">
            <div className="__d">
              <div className="inputBox">
                <input
                  value={form.name}
                  onChange={onChange}
                  type="text"
                  name="name"
                  required
                  id="name"
                />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input
                  value={form.email}
                  onChange={onChange}
                  type="email"
                  name="email"
                  required
                  id="email"
                />
                <span>email</span>
              </div>
            </div>
            <div className="inputBox">
              <input
                value={form.subject}
                onChange={onChange}
                type="text"
                name="subject"
                required
                id="subject"
              />
              <span>subject</span>
            </div>
            <div className="inputBox">
              <textarea
                name="message"
                required
                value={form.message}
                onChange={onChangeTextArea}
                placeholder="message"
                id="message"
              />
            </div>
            <div>
              <button onClick={handleShare} className="btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
