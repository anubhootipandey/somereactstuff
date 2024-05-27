import React, { useState } from "react";
import "./Accordion.css";
import { questions } from "./Data";

const Accordion = () => {
    const [showAns, setShowAns] = useState(null);

  return (
    <div className="acc-container">
      <div>
        <h1>Frequently Asked Questions</h1>
        <div className="faq-content"> 
          {questions.map((faqItems, i) => {
            return (
              <div className="faq-items">
                 <h2 onClick={() => setShowAns(faqItems.id)}>{faqItems.question}</h2>
                <p className={showAns === faqItems.id ? 'active-ans' : ''}>{faqItems.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
