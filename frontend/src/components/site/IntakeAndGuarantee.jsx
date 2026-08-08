import React from "react";

export const IntakeAndGuarantee = () => {
  return (
    <>
      {/* Limited Intake */}
      <section
        id="intake"
        data-testid="intake-section"
        className="relative py-20 md:py-36 hairline-t overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(1000px 600px at 50% 50%, rgba(192,26,52,0.08), transparent 60%)",
          }}
        />

        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-slower hidden md:block"
          style={{
            width: 560,
            height: 560,
            borderRadius: "50%",
            border: "1px dashed rgba(192,26,52,0.18)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-3">
            <span
              className="block w-8 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--red-600))",
              }}
            />

            <span className="label-eyebrow-red">
              Limited Intake
            </span>

            <span
              className="block w-8 h-px"
              style={{
                background:
                  "linear-gradient(90deg, var(--red-600), transparent)",
              }}
            />
          </div>

          <div
            className="huge-type mt-6"
            style={{
              fontSize: "clamp(42px,9vw,120px)",
              lineHeight: 1,
            }}
          >
            <span className="text-silver">Only </span>

            <span className="num-display text-crimson">
              10 seats
              {" "}<br/>
            </span>

            <span className="serif-italic text-black/85">
              
               per cohort.
            </span>
          </div>

          <p className="mt-8 text-black/65 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            We work with a maximum of ten candidates per month to ensure
            personalised attention and high-quality outcomes. Our focus is on
            quality, commitment and career transformation — not volume.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 hairline">
            <span className="red-dot" />

            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-black/70">
              Seats filling for next cohort
            </span>
          </div>
        </div>
      </section>

      {/* Placement Guarantee */}
      <section
        id="guarantee"
        data-testid="guarantee-section"
        className="relative py-20 md:py-36 hairline-t"
        style={{ background: "var(--bg-soft)" }}
      >
        <div className="mx-auto max-w-[1480px] px-5 md:px-12 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 flex justify-center">
              <CreativeSeal />
            </div>

            <div className="lg:col-span-7">

              <div className="label-eyebrow-red">
                Post-Placement Policy
              </div>

              <h2
                className="huge-type mt-4 text-silver"
                style={{
                  fontSize: "clamp(30px,5vw,60px)",
                }}
              >
                Placed at top MNCs{" "}
                <span className="serif-italic text-crimson">
                  — exclusively.
                </span>
              </h2>

              <p className="mt-6 text-black/65 leading-relaxed text-base md:text-lg max-w-[640px]">
                We guarantee placement exclusively in top MNCs — never random
                startups. While we secure the opportunity, your long-term
                success depends on your on-the-job performance and adherence to
                employer expectations.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6 max-w-[520px]">
                {[
                  ["Top", "MNCs Only"],
                  ["30-45", "Days To Offer"],
                  ["1:1", "Mentorship"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="num-display text-silver text-3xl md:text-4xl">
                      {n}
                    </div>

                    <div className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-black/50">
                      {l}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 hairline">
                <span
                  className="block w-2 h-2"
                  style={{ background: "var(--red-600)" }}
                />

                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-black/70">
                  Additional job support available separately
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};/* ---------- Creative Seal ---------- */

const CreativeSeal = () => {
  const size = 360;
  const cx = size / 2;
  const cy = size / 2;
  const rText = size / 2 - 22;

  const text =
    "PLACEMENT GUARANTEE · IRONCLAD · GR NETWORKS · ";

  return (
    <div
      className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] mx-auto"
      data-testid="guarantee-seal"
    >
      {/* Outer Ring */}
      <div
        className="absolute inset-0 rotate-slow rounded-full"
        style={{
          border: "1px dashed rgba(192,26,52,0.45)",
        }}
      />

      {/* Curved Text */}
      <svg
        className="absolute inset-0 rotate-slower"
        viewBox={`0 0 ${size} ${size}`}
        style={{
          animationDirection: "reverse",
          animationDuration: "60s",
        }}
      >
        <defs>
          <path
            id="sealArc"
            d={`M ${cx},${cy}
            m -${rText},0
            a ${rText},${rText} 0 1,1 ${rText * 2},0
            a ${rText},${rText} 0 1,1 -${rText * 2},0`}
          />
        </defs>

        <text
          fontFamily="'JetBrains Mono', monospace"
          fontSize="9"
          letterSpacing="4"
          fill="rgba(192,26,52,.85)"
        >
          <textPath href="#sealArc">
            {text.repeat(2)}
          </textPath>
        </text>
      </svg>

      {/* Tick Marks */}
      <svg
        className="absolute inset-0"
        viewBox={`0 0 ${size} ${size}`}
      >
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = (i * 360) / 60;
          const major = i % 5 === 0;

          const inner = major
            ? rText - 22
            : rText - 14;

          const outer = rText - 4;

          const rad = (angle * Math.PI) / 180;

          const x1 =
            cx + Math.cos(rad) * inner;

          const y1 =
            cy + Math.sin(rad) * inner;

          const x2 =
            cx + Math.cos(rad) * outer;

          const y2 =
            cy + Math.sin(rad) * outer;

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={
                major
                  ? "rgba(192,26,52,.55)"
                  : "rgba(10,10,10,.15)"
              }
              strokeWidth={major ? 1.5 : 1}
            />
          );
        })}
      </svg>

      {/* Inner Ring */}
      <div
        className="absolute rounded-full"
        style={{
          left: "12%",
          top: "12%",
          right: "12%",
          bottom: "12%",
          border:
            "1px solid rgba(192,26,52,.35)",
        }}
      />

      {/* Core */}
      <div
        className="absolute rounded-full flex flex-col items-center justify-center text-center"
        style={{
          left: "18%",
          top: "18%",
          right: "18%",
          bottom: "18%",
          background:
            "radial-gradient(circle at 35% 30%, #fff 0%, #faf3f4 45%, #f2e0e3 100%)",
          border:
            "1px solid rgba(192,26,52,.45)",
          boxShadow:
            "0 25px 60px rgba(192,26,52,.18), inset 0 2px 0 rgba(255,255,255,.9)",
        }}
      >        {/* Top Label */}
        <div className="flex items-center gap-1 mb-1">
          <span
            className="block h-px"
            style={{
              width: 18,
              background:
                "linear-gradient(90deg,transparent,var(--red-700))",
            }}
          />

          <span className="font-mono text-[6px] sm:text-[8px] tracking-[0.3em] uppercase text-[var(--red-700)]">
            Certified
          </span>

          <span
            className="block h-px"
            style={{
              width: 18,
              background:
                "linear-gradient(90deg,var(--red-700),transparent)",
            }}
          />
        </div>

        {/* 100% */}
        <div
          className="num-display text-crimson leading-none"
          style={{
            fontSize: "clamp(48px,11vw,78px)",
            textShadow:
              "0 2px 4px rgba(192,26,52,.15)",
          }}
        >
          100

          <span
            className="serif-italic"
            style={{
              fontSize: "clamp(24px,6vw,42px)",
              verticalAlign: "top",
              marginLeft: 2,
            }}
          >
            %
          </span>
        </div>

        {/* Placement */}
        <div className="mt-1 font-display text-sm sm:text-lg text-black leading-tight">
          Placement
        </div>

        {/* Guarantee */}
        <div className="font-display italic text-sm sm:text-lg text-[var(--red-700)] leading-tight">
          Guarantee
        </div>

        {/* Stars */}
        <div className="mt-2 flex items-center gap-2 text-[var(--red-700)]">
          <span className="text-[8px] sm:text-[10px]">✦</span>
          <span className="text-[6px] sm:text-[8px]">✦</span>
          <span className="text-[8px] sm:text-[10px]">✦</span>
        </div>
      </div>
    </div>
  );
};