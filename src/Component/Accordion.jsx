// src/components/Accordion.jsx
import { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full py-4 px-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg shadow-md focus:outline-none transition-transform duration-300 ${isOpen ? 'transform scale-105' : ''}`}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span className="text-2xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white text-gray-700 rounded-b-lg shadow-inner transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const faqItems = [
    {
      question: "What materials are your jewelry made of?",
      answer: "Our jewelry is made from high-quality gold, silver, and platinum, sourced ethically from reliable suppliers."
    },
    {
      question: "Do you offer custom designs?",
      answer: "Yes, we offer custom design services. You can work with our designers to create a piece that is uniquely yours."
    },
    {
      question: "How do I take care of my jewelry?",
      answer: "To keep your jewelry looking its best, avoid exposure to chemicals, store it in a dry place, and clean it regularly with a soft cloth."
    },
  ];

  return (
    <div className="max-w-2xl mx-auto my-8">
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;
