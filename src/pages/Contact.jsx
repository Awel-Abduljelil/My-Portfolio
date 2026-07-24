import { useState } from "react";
import PageWrapper from "../components/PageWrapper.jsx";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = "Please enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Please enter your last name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!values.message.trim()) errors.message = "Please write a short message.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleBlur(e) {
    const fieldErrors = validate(values);
    setErrors((prev) => ({ ...prev, [e.target.name]: fieldErrors[e.target.name] }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
      setTimeout(() => setSubmitted(false), 5000);
    }
  }

  const inputClass =
    "w-full px-3.5 py-2.5 rounded-lg border border-border-soft bg-bg-panel text-text-primary text-sm " +
    "placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors";

  return (
    <PageWrapper>
      <p className="eyebrow text-center mb-1">// get in touch</p>
      <h2 className="section-title text-center mb-2 mx-auto">Contact Me</h2>
      <p className="section-subtitle text-center mb-10">
        Got a project idea, a question, or just want to say hi? Feel free to
        reach out.
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="max-w-xl mx-auto rounded-2xl border border-border-soft bg-gradient-to-br from-bg-panel to-bg-panel-2 p-7 sm:p-9"
      >
        <p className="font-mono text-sm text-accent mb-5">Send a message</p>

        <div className="flex gap-4 flex-wrap mb-1">
          <div className="flex-1 min-w-[170px]">
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your first name"
              className={inputClass}
            />
            <span className="block font-mono text-xs text-red mt-1 min-h-[16px]">
              {errors.firstName}
            </span>
          </div>
          <div className="flex-1 min-w-[170px]">
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your last name"
              className={inputClass}
            />
            <span className="block font-mono text-xs text-red mt-1 min-h-[16px]">
              {errors.lastName}
            </span>
          </div>
        </div>

        <div className="mb-1">
          <label className="block text-sm font-semibold text-text-secondary mb-1.5 mt-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            className={inputClass}
          />
          <span className="block font-mono text-xs text-red mt-1 min-h-[16px]">
            {errors.email}
          </span>
        </div>

        <div className="mb-1">
          <label className="block text-sm font-semibold text-text-secondary mb-1.5 mt-3">
            Phone (optional)
          </label>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="e.g. 091-234-5678"
            className={inputClass}
          />
        </div>

        <div className="mb-1">
          <label className="block text-sm font-semibold text-text-secondary mb-1.5 mt-3">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="What's on your mind?"
            className={inputClass}
          />
          <span className="block font-mono text-xs text-red mt-1 min-h-[16px]">
            {errors.message}
          </span>
        </div>

        <button type="submit" className="btn-primary mt-2 !mt-2">
          Send Message <i className="fa-solid fa-paper-plane ml-1.5" />
        </button>

        {submitted && (
          <p className="font-mono text-sm text-green font-semibold mt-3">
            Message sent! I'll get back to you soon.
          </p>
        )}
      </form>
    </PageWrapper>
  );
}
