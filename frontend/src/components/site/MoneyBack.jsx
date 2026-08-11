import React from "react";
import { Check, ShieldAlert, BadgeCheck } from "lucide-react";

const REFUND = [
  "Full completion of all training modules and assignments",
  "Securing an 'A' grade in our mock evaluations",
  "Exhausting all supported interview rounds without getting placed",
];

export const MoneyBack = () => {
  return (
    <section
      id="money-back"
      data-testid="money-back-section"
      className="relative py-28 md:py-36 hairline-t overflow-hidden dark-section"
    >
      {/* Ambient red spotlight */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 700px at 50% 30%, rgba(214,31,60,0.25), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating decorative "7" mark */}
      <div
        aria-hidden
        className="absolute -right-20 top-20 hidden lg:block float opacity-25"
      >
        <div
          className="num-display text-crimson"
          style={{ fontSize: 340, lineHeight: 1 }}
        >
          7
        </div>
      </div>

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-12 lg:px-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 hairline-red">
            <span className="red-dot" />
            <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-[#ff8f9f]">
              Money-Back Policy · Ironclad
            </span>
          </div>

          {/* Heading - Clean White & Sharp Sans Font */}
          <h2
            className="mt-8 text-white font-sans font-bold tracking-tight leading-none"
            style={{ fontSize: "clamp(40px, 6.5vw, 90px)" }}
          >
            If we don't place you,
            <br />
            <span className="text-white font-sans font-bold tracking-tight">
              we refund you.
            </span>
          </h2>

          <p className="mt-8 text-white/75 leading-relaxed text-lg max-w-2xl mx-auto font-sans">
            We are fully invested in your success — and we stand by our process completely.
            This promise is tailored strictly for dedicated professionals who complete the
            journey with us. Bring your commitment. We will deliver your future.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left — Promise Certificate */}
          <div className="lg:col-span-5">
            <div
              className="relative overflow-hidden p-8 md:p-10 h-full min-h-[440px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                border: "1px solid rgba(214,31,60,0.35)",
                boxShadow:
                  "0 30px 80px rgba(214,31,60,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
              }}
              data-testid="money-back-promise"
            >
              <div
                aria-hidden
                className="absolute -right-20 -top-20 w-64 h-64 rotate-slow opacity-50"
                style={{
                  borderRadius: "50%",
                  border: "1px dashed rgba(214,31,60,0.5)",
                }}
              />
              <div
                aria-hidden
                className="absolute -right-16 -top-16 w-56 h-56 rotate-slower opacity-40"
                style={{
                  borderRadius: "50%",
                  border: "1px solid rgba(214,31,60,0.4)",
                  animationDirection: "reverse",
                }}
              />

              <div className="relative flex items-start justify-between">
                <ShieldAlert size={28} strokeWidth={1.4} className="text-[#ff8f9f]" />
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-white/40">
                  Guarantee 01
                </span>
              </div>

              <div className="relative mt-16">
                <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#ff8f9f]">
                  We Promise
                </div>
                
                {/* Updated H3 Font */}
                <h3 className="mt-4 font-sans font-bold text-3xl md:text-4xl text-white tracking-tight leading-snug">
                  A signed offer <span className="text-white">or a full refund.</span>
                </h3>

                <p className="mt-6 text-white/65 leading-relaxed font-sans">
                  Voluntary or early exits for personal or financial reasons are excluded.
                  Additional Job Support can be availed separately, if required.
                </p>
              </div>

              <div
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-px shimmer-red"
              />
            </div>
          </div>

          {/* Right — Checklist */}
          <div className="lg:col-span-7">
            <div
              className="p-8 md:p-10 h-full"
              data-testid="refund-checklist"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BadgeCheck size={20} strokeWidth={1.4} className="text-[#ff8f9f]" />
                  <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-white/70">
                    Refund Eligibility
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-white/40">
                  3 of 3 required
                </span>
              </div>

              <p className="mt-6 text-white/60 leading-relaxed text-[15px] font-sans">
                To qualify for a refund under our Money-Back Policy, the following criteria
                must all be met.
              </p>

              <ul className="mt-10 space-y-8">
                {REFUND.map((r, i) => (
                  <li
                    key={i}
                    className="group flex items-start gap-5 pb-8 border-b border-white/[0.08] last:border-b-0 last:pb-0"
                    data-testid={`refund-item-${i}`}
                  >
                    <div
                      className="mt-1 w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                      style={{
                        border: "1px solid rgba(214,31,60,0.5)",
                        background:
                          "radial-gradient(circle at 30% 30%, rgba(214,31,60,0.25), transparent 70%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
                      }}
                    >
                      <Check size={14} strokeWidth={2} className="text-[#ff8f9f]" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-white/40">
                        Criterion {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="mt-2 text-white text-[17px] md:text-[18px] leading-relaxed font-sans font-medium">
                        {r}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};