import React from "react";
import { ShieldCheck, Timer, RefreshCcw, Users } from "lucide-react";

const USPS = [
  { icon: ShieldCheck, metric: "100%", label: "Placement Guaranteed", sub: "In top MNCs, exclusively" },
  { icon: Timer, metric: "30–45", label: "Days to Offer Letter", sub: "From interview process" },
  { icon: RefreshCcw, metric: "100%", label: "Money-Back Policy", sub: "Refund on non-placement" },
  { icon: Users, metric: "10", label: "Candidates / Month", sub: "Selective, invitation-only" },
];

export const USPStrip = () => {
  return (
    <section
      id="usps"
      data-testid="usp-section"
      className="relative dark-section overflow-hidden"
    >
      {/* Ambient red beams */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 400px at 20% 0%, rgba(214,31,60,0.20), transparent 60%), radial-gradient(700px 400px at 90% 100%, rgba(214,31,60,0.15), transparent 60%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 shimmer-red opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-12">
          <span className="red-dot" />
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-white/60">
            Our Commitments · Non-negotiable
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {USPS.map((u, i) => {
            const Icon = u.icon;
            return (
              <div
                key={u.label}
                data-testid={`usp-card-${i}`}
                className="relative group p-8 md:p-10 overflow-hidden transition-all duration-500"
                style={{ background: "#0a0a0a" }}
              >
                <div
                  aria-hidden
                  className="absolute top-0 right-0 w-20 h-20 opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(circle at 100% 0%, rgba(214,31,60,0.35), transparent 60%)",
                  }}
                />

                <div className="relative flex items-start justify-between">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full"
                    style={{
                      border: "1px solid rgba(214,31,60,0.35)",
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(214,31,60,0.20), transparent 70%)",
                    }}
                  >
                    <Icon size={18} strokeWidth={1.4} className="text-[#ff8f9f]" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-10">
                  {/* Changed: Added font-sans, antialiased, font-bold, and tracking-tighter for a sharp look */}
                  <div className="num-display font-sans text-5xl md:text-6xl font-bold tracking-tighter leading-none text-white antialiased">
                    {u.metric}
                  </div>
                  <div className="mt-4 font-display text-xl md:text-2xl text-white/95">
                    {u.label}
                  </div>
                  <div className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-white/40">
                    {u.sub}
                  </div>
                </div>

                <div
                  className="mt-8 h-px w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(214,31,60,0.6), transparent)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};