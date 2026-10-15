import "./FAQ.css";

const faqs = [
  { id: 1, question: "Question one?", answer: "Add the answer here." },
  { id: 2, question: "Question two?", answer: "Add the answer here." },
  { id: 3, question: "Question three?", answer: "Add the answer here." },
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