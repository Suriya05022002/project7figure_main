import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_ITEMS = [
  {
    q: "Is this suitable if I'm already working?",
    a: "Yes. Most candidates continue working while completing the program. The learning plan is structured to fit alongside a full-time job.",
  },
  {
    q: "Do I need to complete the entire training before interviews begin?",
    a: "No. Once you're technically ready and clear the required evaluations, interviews can begin while you continue strengthening your knowledge.",
  },
  {
    q: "What if I have career gaps?",
    a: "Career gaps are evaluated individually. Genuine reasons such as higher studies, entrepreneurship, personal commitments, or upskilling are generally not barriers.",
  },
  {
    q: "My communication skills are average. Can I still join?",
    a: "Yes. Technical preparation is only one part of the journey. Mock interviews and continuous guidance help improve professional communication and interview confidence.",
  },
  {
    q: "I'm currently in a support project. Am I eligible?",
    a: "Yes. Many professionals transition from support environments into better opportunities through structured preparation.",
  },
  {
    q: "How many candidates are selected each month?",
    a: "To maintain personalized mentoring and placement quality, admissions are intentionally limited to 10 candidates per month.",
  },
  {
    q: "When do I pay the success fee?",
    a: "The success fee becomes applicable only after you receive a qualifying offer letter, as per the program terms.",
  },
  {
    q: "What happens if I don't qualify for admission?",
    a: "Project 7 Figure follows a selective admission process. If you don't currently meet the eligibility criteria, you'll receive guidance on what to improve before reapplying.",
  },
  {
    q: "Why don't you accept everyone?",
    a: "Because our focus is quality over volume. Working with a limited number of committed professionals allows us to provide personalized support throughout the placement journey.",
  },
];

const FAQItem = ({ item, index, isOpen, onToggle }) => (
  <motion.div 
    className="border-b border-black/10 last:border-b-0 w-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-6 py-7 text-left hover:text-red-700 transition-all duration-300 group overflow-visible"
      data-testid={`faq-item-${index}`}
    >
      {/* Changed font-display to font-sans font-medium */}
      <span className="font-sans font-medium text-lg md:text-xl text-black leading-[1.6] md:leading-[1.7] w-full pr-4 py-2 group-hover:text-crimson transition-colors block">
        {item.q}
      </span>

      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <ChevronDown
          size={22}
          strokeWidth={1.4}
          className={`flex-shrink-0 transition-colors duration-300 ${
            isOpen ? "text-crimson" : "text-black/40"
          }`}
        />
      </motion.div>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden"
        >
          {/* Added font-sans for paragraph body consistency */}
          <div className="pb-7 pr-12 font-sans text-black/65 leading-[1.8] text-[15px] md:text-base w-full">
            {item.a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-28 md:py-36 hairline-t w-full"
    >
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 lg:px-16 w-full">
        <div className="w-full">
          <motion.div 
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="block w-10 h-px bg-gradient-to-r from-red-600 to-transparent"
            />

            {/* Added font-sans label configuration */}
            <span className="label-eyebrow font-sans">
              Frequently Asked Questions
            </span>
          </motion.div>

          {/* Changed header styling to font-sans and serif-italic to font-serif italic */}
          <motion.h2
  className="mb-16 pt-3 font-['Sora'] font-bold leading-[1.05] tracking-[-0.04em] text-zinc-900"
  style={{ fontSize: "clamp(38px,5vw,68px)" }}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.2 }}
>
  Have questions? We've got{" "}
  <span
    className="font-['Playfair_Display'] italic font-medium"
    style={{ color: "#78142B" }}
  >
    answers.
  </span>
</motion.h2>

          <div className="w-full flex flex-col">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}