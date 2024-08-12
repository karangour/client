import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./CSS/FormComponent.css";
import bicycle_logo from "./assets/bicycle-logo.svg";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orgName, setOrgName] = useState("");
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/custom-page", { state: { name, email, orgName, type, area } });
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
        <div className="custom-container">
          <p className="customisation-title">FOR CUSTOMIZING YOUR PAGE</p>
          <div>
            <label className="labels, orgName">NAME OF BUSINESS</label>
            <input
              type="text"
              name="orgName"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              className="orgName-input"
            />
          </div>
          <div>
            <label className="labels, type">TYPE OF BUSINESS</label>
            <select
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="type-input"
            >
              <option value="" disabled>
                Select a type
              </option>
              <option value="Retail">Retail</option>
              <option value="Fintech">Fintech</option>
              <option value="Banking">Banking</option>
            </select>
          </div>
          <div>
            <label className="labels, area">COUNTRY OF INTEREST</label>
            <select
              name="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="type-input"
            >
              <option value="" disabled>
                Select a country
              </option>
              <option value="USA">U.S.A.</option>
              <option value="Canada">Canada</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
              <option value="Mexico">Mexico</option>
            </select>
          </div>
        </div>
        <button className="submit-button" type="submit">
          SUBMIT
        </button>
      </motion.form>
    </div>
  );
};

export default FormComponent;
