import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQsProps {
  title?: string;
  faqs: FAQ[];
}

const FAQs: React.FC<FAQsProps> = ({
  title = "Frequently Asked Questions",
  faqs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white border border-gray-300 rounded-lg shadow-lg mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">{title}</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                className="w-full text-left py-4 px-4 font-semibold text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="float-right">{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="py-2 px-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
