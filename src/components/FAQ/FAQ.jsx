import "./FAQ.css";

const faqs = [
  {
    id: 1,
    question: "Who can receive help from Radiant Plates?",
    answer:
      "Our programmes are open to families and individuals in our community who are in need. If you're not sure whether you qualify, reach out and we'll be glad to talk it through.",
  },
  {
    id: 2,
    question: "How does the feeding programme work?",
    answer:
      "We prepare and share meals on a regular schedule. Message us to find out about the next one and how to take part.",
  },
  {
    id: 3,
    question: "What is the community kitchen?",
    answer:
      "It's a shared space where meals are prepared in bulk for the people we serve. Volunteers and community members cook, learn, and eat together there.",
  },
  {
    id: 4,
    question: "What does family reconciliation involve?",
    answer:
      "It's a supportive, confidential process that helps families work through conflict and find their way back to one another, at a pace that suits them.",
  },
  {
    id: 5,
    question: "How can I volunteer?",
    answer:
      "We welcome volunteers for cooking, serving, and organizing. Get in touch through the Contact section below and tell us how you'd like to help.",
  },
/*
  {
    id: 6,
    question: "How can I support your work?",
    answer:
      "You can give through M-Pesa using the Paybill details in the Support section below, or contact us to talk about other ways to help.",
  },
*/
  {
    id: 6,
    question: "How do I get in touch?",
    answer:
      "Use the WhatsApp or email options in the Contact section below. We'll get back to you as soon as we can.",
  },
];

function Faq() {
  return (
    <section className="section" id="faq">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-title">Frequently asked questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map(({ id, question, answer }) => (
            <details key={id} className="card faq-item">
              <summary>{question}</summary>
              <p className="faq-answer">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;