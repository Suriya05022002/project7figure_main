import React, { useState } from "react";
import { ArrowDown, CheckCircle2, MoveRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export const OurCommitments = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      num: "01",
      tag: "IDENTITY // BASELINE",
      title: "Working hard. Still waiting.",
      desc: "Effort alone doesn't guarantee premium career growth. Without a calculated tactical strategy, high-leverage opportunities routinely pass by unnoticed.",
    },
    {
      num: "02",
      tag: "DISCOVERY // PROFILE",
      title: "Applying everywhere. Hearing nothing.",
      desc: "A beautifully engineered profile execution paired with a calculated, elite interview framework instantly separates you from the global applicant stack.",
      metrics: "Average metric optimization: 4x inbound visibility within targeted channels.",
    },
    {
      num: "03",
      tag: "EXECUTION // CLOSING",
      title: "Ready for more. Unsure how.",
      desc: "Stop trying to navigate complex compensation loops alone. You need a vetted structural pipeline and expert anchors to systematically guide your trajectory.",
      metrics: "Comp dynamic: Strategic mitigation of baseline market compression blocks.",
    },
  ];

  return (
    <section id="commitments" className="relative py-32 md:py-40 bg-[#ffffff] overflow-hidden grain">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-full pointer-events-none select-none overflow-hidden">
        <motion.div 
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-radial from-[rgba(192,26,52,0.04)] to-transparent opacity-80 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute bottom-[10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-gradient-radial from-[rgba(10,10,10,0.03)] to-transparent opacity-90 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[1px] h-1/2 bg-gradient-to-b from-black/5 via-black/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1260px] px-6 md:px-12 lg:px-16 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-black/15">
          <motion.div 
            className="lg:col-span-8 space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="label-eyebrow-red flex items-center gap-2 font-semibold tracking-widest text-[var(--red-600)] uppercase text-xs">
              <motion.span 
                className="w-1.5 h-1.5 rounded-full bg-[var(--red-600)]"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              The Core Thesis
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-black leading-[1.1] tracking-tight font-bold pt-2">
              The gap isn't talent. <br />
              <span className="serif-italic font-normal text-black/90">It's direction.</span>
            </h2>
          </motion.div>
          <motion.div 
            className="lg:col-span-4 lg:pl-6 opacity-90"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-display text-xl md:text-2xl text-black font-medium tracking-tight leading-[1.6] pt-1">
              You know you're capable of more.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
          
          <motion.div 
            className="lg:col-span-5 lg:sticky lg:top-28 space-y-8 bg-zinc-50 p-8 border border-black/10 glossy-card rounded-md shadow-sm"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
          >
            <div className="space-y-4 font-body text-[16px] text-black font-medium leading-[1.7] tracking-wide">
              {["Maybe interviews never turn into offers.", "Maybe your career feels stuck.", "Or maybe you're still waiting for the breakthrough you've been working towards."].map((text, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <CheckCircle2 size={16} className="text-[var(--red-600)] mt-1 shrink-0 stroke-[2.5]" />
                  <p className="text-black pt-0.5">{text}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-black/15 space-y-4">
              <p className="font-mono text-[11px] tracking-wider text-black/60 uppercase flex items-center gap-2 font-bold">
                <HelpCircle size={12} className="stroke-[2.5]" /> The Diagnosis
              </p>
              <p className="font-display text-2xl text-black">
                Your potential isn’t the problem. Finding the right path is.
              </p>
              <div className="pt-2">
                <motion.span 
                  className="font-mono text-xs tracking-widest font-bold bg-black text-white px-3 py-1.5 rounded-sm inline-flex items-center gap-2 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  PROJECT 7 FIGURE <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <MoveRight size={12} className="text-[var(--red-500)] stroke-[2.5]" />
                  </motion.div>
                </motion.span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.num}
                onClick={() => setActivePillar(idx)}
                className={`tier-card p-8 md:p-10 cursor-pointer rounded-md border ${
                  activePillar === idx 
                    ? "border-[rgba(192,26,52,0.65)] bg-gradient-to-b from-[#ffffff] to-[rgba(192,26,52,0.02)] shadow-xl shadow-[rgba(10,10,10,0.05)]" 
                    : "border-black/10 hover:border-black/30 hover:bg-neutral-50/50"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.15 }}
                whileHover={{ scale: activePillar === idx ? 1 : 1.02 }}
                animate={{
                  scale: activePillar === idx ? 1.01 : 1,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center justify-between md:flex-col md:items-start gap-2 shrink-0">
                    {/* Switched to font-sans here */}
                    <motion.span 
                      className={`font-sans text-[32px] font-bold leading-none ${
                        pillar.num === "01"
                          ? "text-gray-400"
                          : activePillar === idx 
                            ? "text-[var(--red-600)]" 
                            : "text-black/25"
                      }`}
                      animate={{
                        scale: activePillar === idx ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {pillar.num}
                    </motion.span>
                    <span className="font-mono text-[10px] tracking-widest text-[var(--red-700)] font-bold uppercase">
                      {pillar.tag}
                    </span>
                  </div>

                  <div className="space-y-3 flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-black tracking-tight leading-[1.3] pt-1">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-[15px] text-black font-normal leading-[1.7] pt-0.5">
                      {pillar.desc}
                    </p>
                    
                    {pillar.metrics && (
                      <motion.div 
                        initial={false}
                        animate={{
                          height: activePillar === idx ? "auto" : 0,
                          opacity: activePillar === idx ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-black/10 font-mono text-[11px] tracking-wide text-black font-bold bg-black/[0.04] p-2.5 rounded-sm border-l-2 border-[var(--red-600)] leading-[1.6]">
                          {pillar.metrics}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        <motion.div 
          className="mt-24 pt-8 border-t border-black/10 flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-black/60 font-bold">
            Evaluate Outcomes Spectrum
          </span>
          <motion.button 
            onClick={() => document.getElementById("compensation")?.scrollIntoView({ behavior: "smooth" })}
            className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black bg-transparent cursor-pointer"
            aria-label="Scroll down to compensation analysis"
            whileHover={{ 
              borderColor: "var(--red-600)",
              color: "var(--red-700)",
              y: 6,
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <ArrowDown size={16} strokeWidth={2} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};