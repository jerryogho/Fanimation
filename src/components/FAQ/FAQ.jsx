import "./FAQ.css";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Most orders within the city are delivered in 2-4 business days. Orders above N50,000 qualify for free delivery; other locations may take a little longer depending on distance.",
  },
  {
    question: "What warranty comes with your fans?",
    answer:
      "Every Fanimation product ships with a 2 year warranty covering manufacturing defects. Accessories such as remote kits and blade packs carry a 6 month warranty.",
  },
  {
    question: "Can I return a product if I change my mind?",
    answer:
      "Yes. Unused items in their original packaging can be returned within 7 days of delivery. Simply contact our support team to arrange a pickup and refund.",
  },
  {
    question: "Do you install the fans, or is it self-install?",
    answer:
      "Ceiling and wall fans include an installation guide, and our support team can recommend a vetted electrician in your area if you'd prefer professional installation.",
  },
  {
    question: "Which fan type is best for a large living room?",
    answer:
      "For larger rooms we generally recommend a high-airflow or luxury ceiling fan, both of which are built to circulate air across wider spaces without extra noise.",
  },
  {
    question: "Do you ship outside the country?",
    answer:
      "We currently deliver worldwide on select product lines. Reach out through the contact form with your location and we'll confirm shipping options and costs.",
  },
];

function FAQ() {
  return (
    <section className="faq-section py-5" id="faq">
      <div className="container">
        <div className="text-center mb-4">
          <h4 className="section-title">
            <HelpCircle size={22} /> Frequently Asked Questions
          </h4>
          <p className="section-subtitle">Everything you need to know before you buy</p>
        </div>

        <div className="accordion faq-accordion" id="faqAccordion">
          {faqs.map((faq, index) => {
            const itemId = `faq-item-${index}`;
            return (
              <div className="accordion-item" key={itemId}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button${index !== 0 ? " collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${itemId}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={itemId}>
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={itemId}
                  className={`accordion-collapse collapse${index === 0 ? " show" : ""}`}
                  data-bs-parent="#faqAccordion">
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
