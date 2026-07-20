import "./Contact.css";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const CONTACT_INFO = [
  { icon: <MapPin size={20} />, title: "Showroom", text: "14 Niger Street, Onitsha, Anambra" },
  { icon: <Phone size={20} />, title: "Phone", text: "+234 803 000 0000" },
  { icon: <Mail size={20} />, title: "Email", text: "support@fanimation.example" },
  { icon: <Clock size={20} />, title: "Working Hours", text: "Mon - Sat, 9am - 6pm" },
];

const EMPTY_FORM = { name: "", email: "", message: "" };

function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (values) => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) nextErrors.message = "Please enter a message.";
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // No backend in this project - the interaction itself (validation +
      // confirmation state) is what's being demonstrated here.
      setSubmitted(true);
      setForm(EMPTY_FORM);
    }
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <div className="text-center mb-4">
          <h4 className="section-title">Get In Touch</h4>
          <p className="section-subtitle">Questions about a product or an order? Send us a message.</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="contact-info-box">
              {CONTACT_INFO.map((item) => (
                <div className="contact-info-item" key={item.title}>
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <h6>{item.title}</h6>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-8">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {submitted && (
                <div className="contact-success">
                  <CheckCircle2 size={18} />
                  Thanks! Your message has been received - we'll get back to you shortly.
                </div>
              )}

              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="contact-name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className={`form-control${errors.name ? " is-invalid" : ""}`}
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="col-md-6">
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className={`form-control${errors.email ? " is-invalid" : ""}`}
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="col-12">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    className={`form-control${errors.message ? " is-invalid" : ""}`}
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-success px-4">
                    <Send size={16} className="me-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
