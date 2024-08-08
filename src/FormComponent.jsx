import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./CSS/FormComponent.css";
import bicycle_logo from "./assets/bicycle-logo.svg";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/custom-page", { state: { name, email, linkedin } });
  };

  return (
    <div className="form-main">
      <motion.img
        className="bicycle-logo"
        src={bicycle_logo}
        alt="Bicycle Logo"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.form
        className="form-container"
        onSubmit={handleSubmit}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div>
          <label className="labels">NAME</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputs"
          />
        </div>
        <div>
          <label className="labels">EMAIL</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputs"
          />
        </div>
        <div>
          <label className="labels linkedin">LINKEDIN PROFILE<br /><span className="linkedin-example">(enter name of a retail organization)</span></label>
          <input
            type="text"
            name="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="inputs"
          />
        </div>
        <button className="submit-button" type="submit">
          SUBMIT
        </button>
      </motion.form>
    </div>
  );
};

export default FormComponent;
