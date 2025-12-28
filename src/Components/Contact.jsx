import React, { useState } from "react";
import contactCss from "../Component-Style/Contact.module.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    number: "",
    message: "",
    options: {
      spinning: false,
      wrapping: false,
      weaving: false,
    },
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        options: { ...prev.options, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Username is required";
    if (!formData.company.trim()) newErrors.company = "Company Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.number.trim()) newErrors.number = "Contact Number is required";
    else if (formData.number.length < 10) newErrors.number = "Enter correct Number";
    if (!formData.message.trim()) newErrors.message = "Please fill something";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <div className={contactCss.contactUsPage}>
      <Helmet>
        <title>Contact Sowthanya</title>
        <link rel="icon" type="image/png" href="/logo_pto.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </Helmet>

      <form className={contactCss.contactFormContainer} onSubmit={handleSubmit}>
        <h1 className={contactCss.contactTitle}>Contact Us</h1>

        <div className={`${contactCss.inputGroup} ${errors.name ? contactCss.error : formData.name ? contactCss.success : ""}`}>
          <label htmlFor="name" className={contactCss.contactLabel}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={contactCss.contactInput}
            placeholder="Enter First Name"
            value={formData.name}
            onChange={handleChange}
          />
          <div className={contactCss.error}>{errors.name}</div>
        </div>

        <div className={`${contactCss.inputGroup} ${errors.company ? contactCss.error : formData.company ? contactCss.success : ""}`}>
          <label htmlFor="company" className={contactCss.contactLabel}>Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            className={contactCss.contactInput}
            placeholder="Enter Company Name"
            value={formData.company}
            onChange={handleChange}
          />
          <div className={contactCss.error}>{errors.company}</div>
        </div>

        <div className={`${contactCss.inputGroup} ${errors.number ? contactCss.error : formData.number ? contactCss.success : ""}`}>
          <label htmlFor="number" className={contactCss.contactLabel}>Phone Number</label>
          <input
            type="tel"
            id="number"
            name="number"
            className={contactCss.contactInput}
            placeholder="Enter Phone"
            value={formData.number}
            onChange={handleChange}
          />
          <div className={contactCss.error}>{errors.number}</div>
        </div>

        <div className={`${contactCss.inputGroup} ${contactCss.checkboxSection}`}>
          <label className={contactCss.contactLabel}><b>Select your Preference</b></label>
          <div className={contactCss.checkboxOptions}>
            {["spinning", "wrapping", "weaving"].map((option) => (
              <label key={option} className={contactCss.checkboxItem}>
                <input
                  type="checkbox"
                  name={option}
                  checked={formData.options[option]}
                  onChange={handleChange}
                />
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <div className={`${contactCss.inputGroup} ${errors.message ? contactCss.error : formData.message ? contactCss.success : ""}`}>
          <label htmlFor="message" className={contactCss.contactLabel}>Enquiry About</label>
          <textarea
            id="message"
            name="message"
            className={contactCss.contactTextarea}
            rows="4"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className={contactCss.error}>{errors.message}</div>
        </div>

        <div className={contactCss.centerButton}>
          <button type="submit" className={contactCss.contactButton}>
            <i className="fas fa-paper-plane"></i> Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
