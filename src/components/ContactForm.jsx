import { useState } from "react";
import { useRef } from "react";
import FormInput from "./FormInput";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const form = useRef();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function handleInputChange(e) {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  }

  async function handleContactForm(e) {
    e.preventDefault();

    const newErrors = {
      name: formData.name ? "" : "Name is required",
      email: formData.email
        ? validateEmail(formData.email)
          ? ""
          : "Invalid email"
        : "Email is required",
      message: formData.message ? "" : "Message is required",
    };

    setFormErrors(newErrors);

    // if there is no errors, submit the form
    if (Object.values(newErrors).every((error) => error === "")) {
      // send email using Emailjs
      try {
        await emailjs.send(
          "service_xn1h6gg",
          "template_vyuqux5",
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "TmEXwwcTa2EpTjKpw"
        );
        // clear form data after sending the email
        setFormData({
          name: "",
          email: "",
          message: "",
          // TODO -- redirect the user to another page
        });
        navigate("/thanks");
      } catch (error) {
        console.log(`Error sending email: ${error}`);
      }
    }
  }

  return (
    <form
      ref={form}
      onSubmit={handleContactForm}
      action=""
      className="contact-form"
      method="post"
    >
      <div className="input-group">
        <div className="input">
          <FormInput
            type={"text"}
            autocomplete={"off"}
            id={"name"}
            value={formData.name}
            action={handleInputChange}
          />

          <label htmlFor="name" className="input-label">
            Name <span className="required-field">*</span>
          </label>
          <div className="error-message">{formErrors.name}</div>
        </div>

        <div className="input">
          <FormInput
            type={"text"}
            autocomplete={"off"}
            id={"email"}
            value={formData.email}
            action={handleInputChange}
          />
          <label htmlFor="email" className="input-label">
            Email <span className="required-field">*</span>
          </label>
          <div className="error-message">{formErrors.email}</div>
        </div>
      </div>

      <div className="input">
        <FormInput
          type={"text"}
          id={"message"}
          autocomplete={"off"}
          value={formData.message}
          action={handleInputChange}
        />
        <label htmlFor="message" className="input-label">
          Message<span className="required-field">*</span>
        </label>
        <div className="error-message">{formErrors.message}</div>
      </div>

      <button type="submit" className="button form-button button-fill">
        Send Message
      </button>
    </form>
  );
}
