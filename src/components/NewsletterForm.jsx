import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import FormInput from "./FormInput";
import ScrollReveal from "scrollreveal";
import jsonp from "jsonp";

export default function NewsletterForm() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1500,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    });

    sr.reveal(".newsletter-form", { origin: "bottom" });
  });

  const navigate = useNavigate();

  const [newsletterData, setNewsletterData] = useState({
    email: "",
  });

  const [email, setEmail] = useState("");

  function onSubmitForm(e) {
    e.preventDefault();
    const url =
      "https://joaovitorwitt.us21.list-manage.com/subscribe/post?u=4283f06241e2e74cd770cc67e&amp;id=d62d0da44e&amp;f_id=007dd9e6f0";
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      console.log("data", data);
      const { msg } = data;
      console.log(msg);
    });
    navigate("/thankyou");
  }

  function handleNewsletterInputChange(e) {
    const { value } = e.target;
    setNewsletterData((prevData) => ({ ...prevData, email: value }));
  }

  function handleNewsletterForm(e) {
    e.preventDefault();

    console.log(`Form submitted: ${newsletterData}`);

    navigate("/thankyou");
  }

  return (
    <form onSubmit={onSubmitForm} className="newsletter-form">
      <div style={{ display: "none" }}>
        <input type="hidden" name="meta_web_form_id" value="772737528" />
        <input type="hidden" name="meta_split_id" value="" />
        <input type="hidden" name="listname" value="awlist6609873" />
        <input
          type="hidden"
          name="redirect"
          value="https://joaovitorwitt.com/thanks"
          id="redirect_10f1d8217bdab3c638a73541f0499adf"
        />
        <input
          type="hidden"
          name="meta_redirect_onlist"
          value="https://joaovitorwitt.com/newsletter"
        />
        <input type="hidden" name="meta_adtracking" value="My_Web_Form" />
        <input type="hidden" name="meta_message" value="1" />
        <input type="hidden" name="meta_required" value="email" />

        <input type="hidden" name="meta_tooltip" value="email||Email Address" />
      </div>

      <input
        className="email"
        id="awf_field-116178738"
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        tabIndex="500"
        autoComplete="off"
        placeholder="Email Address"
      />

      <input
        name="submit"
        className="newsletter-btn"
        type="submit"
        value="Subscribe"
        tabIndex="501"
      />

      <div style={{ display: "none" }}>
        <img
          src="https://forms.aweber.com/form/displays.htm?id=7OxM7MzsrEwc"
          alt=""
        />
      </div>
    </form>
  );
}
