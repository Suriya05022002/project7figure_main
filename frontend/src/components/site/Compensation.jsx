import React from "react";
import { SectionHeader } from "./SectionHeader";
import { TrendingUp, Zap, Award } from "lucide-react";

const TIERS = [
  {
    exp: "3 Years",
    range: "12 – 14",
    icon: TrendingUp,
    tag: "Strategic Leap",
    desc: "Engineered for early-career professionals stepping into premium product & consulting roles.",
    fillPct: 55,
  },
  {
    exp: "4 Years",
    range: "15 – 18",
    icon: Zap,
    tag: "Acceleration",
    desc: "Designed for mid-level engineers ready to negotiate senior IC compensation at top MNCs.",
    fillPct: 72,
  },
  {
    exp: "5+ Years",
    range: "18+",
    icon: Award,
    tag: "Executive Track",
    desc: "Crafted for seasoned specialists targeting lead, architect and principal-grade offers.",
    fillPct: 90,
  },
];

export const Compensation = () => {
  return (
    <section id="compensation" data-testid="compensation-section" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 lg:px-16">
        <SectionHeader
          index="01"
          eyebrow="Target Compensation Outcomes"
          title="The baseline,"
          italicTitle="not the ceiling."
          kicker="The tiers below reflect the realistic minimum potential of the Project 7 Figure track. Final packages are dynamically optimised against your skills, experience, interview execution and communication."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TIERS.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={t.exp}
                data-testid={`comp-tier-${i}`}
                className="tier-card p-8 md:p-10"
              >
                <div className="relative flex items-center justify-between">
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-full transition-all"
                    style={{
                      border: "1px solid rgba(10,10,10,0.12)",
                      background: "linear-gradient(180deg, #fafafa, #eeeeee)",
                    }}
                  >
                    <Icon size={16} strokeWidth={1.5} className="text-black/80" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-black/45">
                    {t.tag}
                  </span>
                </div>

                <div className="relative mt-10">
                  {/* Experience label styled in DARK color (text-black & font-bold) */}
                  <div className="font-mono text-xs tracking-[0.28em] uppercase text-black font-bold">
                    {t.exp} Experience
                  </div>
                  
                  <div className="mt-3 flex items-baseline gap-3 flex-wrap">
                    <span
                      className="num-display text-silver leading-none"
                      style={{ 
                        fontSize: "clamp(48px, 5.5vw, 76px)",
                        fontFamily: "your-confirmed-font-here, sans-serif" 
                      }}
                    >
                      ₹{t.range}
                    </span>
                    
                    {/* Capitalized "LAKHS / ANNUM" */}
                    <span className="font-mono text-xl md:text-2xl font-bold tracking-[0.1em] text-black/90 uppercase">
                      LAKHS / ANNUM
                    </span>
                  </div>
                </div>

                <p className="relative mt-8 text-black/60 leading-relaxed text-[15px] min-h-[80px]">
                  {t.desc}
                </p>

                {/* Bar meter */}
                <div className="relative mt-8">
                  <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.2em] uppercase text-black/35">
                    <span>Baseline Floor</span>
                    <span>Top Range</span>
                  </div>
                  <div
                    className="mt-2 h-[3px] w-full overflow-hidden"
                    style={{ background: "rgba(10,10,10,0.08)" }}
                  >
                    <div
                      className="h-full transition-all duration-700"
                      style={{
                        width: `${t.fillPct}%`,
                        background:
                          "linear-gradient(90deg, #7f0f1e, #d61f3c)",
                        boxShadow: "0 0 12px rgba(192,26,52,0.35)",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex items-center justify-center gap-3 flex-wrap">
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-black/50">
            Variables that move the number
          </span>
          <span className="text-black/25">·</span>
          {["Core Skills", "Experience", "Interview Execution", "Communication"].map((v, i) => (
            <React.Fragment key={v}>
              <span
                className="font-display text-lg md:text-xl"
                style={{ color: i % 2 === 0 ? "var(--red-700)" : "var(--ink)" }}
              >
                {v}
              </span>
              {i < 3 && <span className="text-black/25">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};