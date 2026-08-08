import React from "react";
import { ArrowDownRight, Sparkle } from "lucide-react";

export const Hero = ({ onApply }) => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden grain"
      style={{ minHeight: "100vh" }}
    >
      <div aria-hidden className="absolute inset-0 dot-grid opacity-60" />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 700px at 85% 20%, rgba(192,26,52,0.10), transparent 60%), radial-gradient(800px 500px at 10% 90%, rgba(192,26,52,0.06), transparent 60%)",
        }}
      />

      {/* Rotating rings */}
      <div
        aria-hidden
        className="absolute hidden lg:block right-[-260px] top-[80px] rotate-slow"
        style={{
          width: 700,
          height: 700,
          borderRadius: "50%",
          border: "1px solid rgba(192,26,52,0.10)",
        }}
      />
      <div
        aria-hidden
        className="absolute hidden lg:block right-[-180px] top-[160px] rotate-slower"
        style={{
          width: 540,
          height: 540,
          borderRadius: "50%",
          border: "1px dashed rgba(10,10,10,0.08)",
          animationDirection: "reverse",
        }}
      />
      <div
        aria-hidden
        className="absolute hidden lg:block right-[-60px] top-[240px] float"
        style={{
          width: 380,
          height: 380,
          borderRadius: "50%",
          border: "1px solid rgba(192,26,52,0.15)",
          background: "radial-gradient(circle at 30% 30%, rgba(192,26,52,0.06), transparent 70%)",
        }}
      />

      {/* Decorative typographic mark on right */}
      
      <div className="relative mx-auto max-w-[1480px] px-6 md:px-12 lg:px-16 pt-40 md:pt-44 pb-20">
        <div className="flex items-center gap-4 fade-up">
          <span className="red-dot" />
          <span
            className="block w-12 h-px"
            style={{ background: "linear-gradient(90deg, var(--red-600), transparent)" }}
          />
          <span className="label-eyebrow">GR Networks · Premium Placement Program</span>
        </div>

        <h1
          data-testid="hero-headline"
          className="huge-type mt-10 fade-up max-w-[1100px]"
          style={{
            fontSize: "clamp(42px, 7.5vw, 152px)",
            animationDelay: "120ms",
            lineHeight: 0.98,
          }}
        >
          <span className="text-silver">A career worthy of</span>
          <br />
          <span className="serif-italic text-crimson">seven figures.</span>
        </h1>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end fade-up" style={{ animationDelay: "260ms" }}>
          <div className="lg:col-span-8">
            <p className="text-lg md:text-xl text-black/70 leading-relaxed font-light max-w-[720px]">
              An invitation-only, one-month transformation for ambitious IT professionals.
              Master the in-demand stack, refine your pitch, and land an offer letter
              from a top MNC in 30 – 45 days — <span className="text-black font-medium">guaranteed.</span>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button data-testid="hero-apply-btn" onClick={onApply} className="btn-primary">
                Claim Your Seat
                <ArrowDownRight size={16} strokeWidth={1.5} />
              </button>
              <a href="#framework" className="btn-secondary" data-testid="hero-learn-btn">
                <Sparkle size={14} strokeWidth={1.5} />
                See The Framework
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 flex items-center gap-3 text-black/40">
          <div
            className="w-px h-12"
            style={{ background: "linear-gradient(to bottom, var(--red-600), transparent)" }}
          />
          <span className="font-mono text-[10px] tracking-[0.32em] uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
};
