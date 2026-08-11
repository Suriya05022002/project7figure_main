import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Cpu, Mic, Sparkles, ShieldCheck } from "lucide-react";

const STEPS = [
  { n: "01", title: "Master the Tech", icon: Cpu,
    body: "Acquire the exact technical capabilities top employers demand through an intensive, hands-on 1-month curriculum." },
  { n: "02", title: "Perfect Your Pitch", icon: Mic,
    body: "Drill with expert-led mock interviews. Communication is sharpened to walk into real rounds fully prepared." },
  { n: "03", title: "Elevate Your Brand", icon: Sparkles,
    body: "Bypass corporate hiring filters with a fully optimised resume and digital footprint engineered to convert." },
  { n: "04", title: "The Placement", icon: ShieldCheck,
    body: "Secure your high-income role with expert salary negotiation and our iron-clad placement guarantee in 30–45 days." },
];

export const Framework = () => {
  return (
    <section id="framework" data-testid="framework-section" className="relative py-28 md:py-36 hairline-t">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 lg:px-16">
        <SectionHeader
          index="02"
          eyebrow="Our Proven Framework"
          title="A protocol,"
          italicTitle="not a course."
          kicker="Four sequential stages engineered with precision. Every step builds on the last — no shortcuts, no fluff."
        />

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-[88px] left-[8%] right-[8%] h-px"
               style={{ background: "linear-gradient(90deg, transparent, rgba(192,26,52,0.3), transparent)" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.n}
                  data-testid={`framework-step-${i}`}
                  className="glossy-card p-8 md:p-10"
                >
                  <div className="relative flex items-start justify-between">
                    <div
                      className="relative w-16 h-16 flex items-center justify-center rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 30%, rgba(192,26,52,0.18), rgba(255,255,255,0.02) 70%)",
                        border: "1px solid rgba(192,26,52,0.35)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
                      }}
                    >
                      <Icon size={22} strokeWidth={1.4} className="text-[#a4162a]" />
                    </div>
                    <span className="num-display text-5xl text-stroke-red">{s.n}</span>
                  </div>

                  <h3 className="relative mt-8 font-display text-2xl md:text-3xl text-black leading-tight">
                    {s.title}
                  </h3>
                  <p className="relative mt-3 text-black/60 leading-relaxed text-[15px]">{s.body}</p>

                  <div className="relative mt-8 pt-6 hairline-t flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-black/40">
                      Phase {s.n}
                    </span>
                    <span
                      className="w-6 h-px transition-all duration-500 group-hover:w-10"
                      style={{ background: "linear-gradient(90deg, var(--red-600), transparent)" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
