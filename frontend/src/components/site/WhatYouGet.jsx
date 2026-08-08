import React from "react";
import { SectionHeader } from "./SectionHeader";
import { FileText, UserCog, CalendarClock, Headphones, Handshake, ScrollText, Rocket } from "lucide-react";

const SERVICES = [
  { icon: FileText, num: "I", title: "ATS-Optimised Resume", body: "Engineered to clear automated filters and land on recruiter desks." },
  { icon: UserCog, num: "II", title: "Profile Optimisation", body: "LinkedIn, GitHub and digital footprint refined for conversion." },
  { icon: CalendarClock, num: "III", title: "Interview Scheduling", body: "We line up the opportunities. You walk in and execute." },
  { icon: Headphones, num: "IV", title: "Live Interview Assistance", body: "Strategic real-time guidance during your most critical rounds." },
  { icon: Handshake, num: "V", title: "Salary Negotiation", body: "We translate your value into the highest offer the market will pay." },
  { icon: ScrollText, num: "VI", title: "Offer Evaluation", body: "Side-by-side analysis so you accept the right offer — not just any offer." },
];

export const WhatYouGet = () => {
  return (
    <section
      id="what-you-get"
      data-testid="services-section"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "var(--bg-soft)" }}
    >
      <div className="relative mx-auto max-w-[1480px] px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <SectionHeader
              index="03"
              eyebrow="What You Get"
              title="Comprehensive"
              italicTitle="career support."
              kicker="Six precision services running in parallel — engineered to convert preparation into a signed offer letter."
            />

            <div
              className="mt-10 p-6 md:p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #ffffff, #faf7f8)",
                border: "1px solid rgba(192,26,52,0.30)",
                boxShadow: "0 20px 40px rgba(192,26,52,0.08)",
              }}
            >
              <div className="absolute -top-4 -right-4 opacity-10 rotate-slower">
                <Rocket size={110} strokeWidth={0.6} className="text-[var(--red-700)]" />
              </div>
              <div className="relative">
                <div className="label-eyebrow-red">Strategic Guarantee</div>
                <p className="mt-4 font-display text-xl md:text-2xl text-black leading-snug">
                  Interview guidance designed to maximise performance & offer outcomes —
                  turning challenging technical rounds into{" "}
                  <span className="serif-italic text-crimson">guaranteed</span> job offers
                  through personalised, real-time feedback.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    data-testid={`service-card-${i}`}
                    className="glossy-card p-7 md:p-8"
                  >
                    <div className="relative flex items-start justify-between">
                      <div
                        className="w-11 h-11 flex items-center justify-center rounded-full"
                        style={{
                          border: "1px solid rgba(10,10,10,0.10)",
                          background: "linear-gradient(180deg, #ffffff, #f5f5f4)",
                          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 8px rgba(10,10,10,0.04)",
                        }}
                      >
                        <Icon size={16} strokeWidth={1.5} className="text-black/80" />
                      </div>
                      <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-black/35">
                        {s.num}
                      </span>
                    </div>

                    <h3 className="relative mt-8 font-display text-xl md:text-2xl text-black">
                      {s.title}
                    </h3>
                    <p className="relative mt-3 text-black/55 text-[14px] leading-relaxed">{s.body}</p>

                    <div
                      className="relative mt-8 h-px w-8 transition-all"
                      style={{ background: "linear-gradient(90deg, var(--red-600), transparent)" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
