import { FaMobileAlt } from "react-icons/fa"; //import { FaMobileAlt, FaCreditCard } from "react-icons/fa";
import "./Support.css";

const methods = [
  {
    id: 1,
    name: "M-Pesa Paybill",
    Icon: FaMobileAlt,
    details: [
      { label: "Paybill number", value: "000000" },
      { label: "Account number", value: "000000" },
    ],
    note: "On M-Pesa, go to Lipa na M-PESA, choose Pay Bill, then enter the numbers above.",
  },
];

function Support() {
  return (
    <section className="section support" id="support">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-eyebrow">Support</p>
          <h2 className="section-title">Support our work</h2>
          <p className="section-sub">
            Your contribution helps us keep serving our community. You can give
            using the details below.
          </p>
        </div>

        <div className="support-grid">
          {methods.map(({ id, name, Icon, details, note }) => (
            <article key={id} className="card support-card">
              <div className="support-card-head">
                <Icon size={22} aria-hidden="true" />
                <h3>{name}</h3>
              </div>

              <div className="support-details">
                {details.map(({ label, value }) => (
                  <div key={label} className="support-row">
                    <span className="support-label">{label}</span>
                    <span className="support-value">{value}</span>
                  </div>
                ))}
              </div>

              <p className="support-note">{note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Support;