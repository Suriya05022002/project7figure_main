import React from "react";
import Marquee from "react-fast-marquee";

const COMPANIES = [
  "Deloitte", "TCS", "KPMG", "Accenture", "IBM", "BOSCH", "NTT Data", "EY",
  "PWC", "Exa AG", "Coforge", "Schneider Electric", "CGI", "Capgemini",
  "Roboxa", "Datamatics", "Now100", "Kaar Tech", "GenPact", "HCL Tech",
  "Infosys", "Wipro", "Birlasoft", "Bristlecone", "Hitachi", "TechM",
  "LTIMindtree", "Mphasis", "Cognizant", "Siemens", "Honeywell", "Shell", "DXC",
];

const chunk = (arr, n) => {
  const out = [];
  const size = Math.ceil(arr.length / n);
  for (let i = 0; i < n; i++) out.push(arr.slice(i * size, (i + 1) * size));
  return out;
};

const ROWS = chunk(COMPANIES, 3);

const Chip = ({ name, i }) => (
  <span className="logo-chip" data-testid={`logo-chip-${i}`}>
    {name}
  </span>
);

export const LogosMarquee = () => {
  return (
    <section
      data-testid="logos-section"
      className="relative py-28 md:py-32 hairline-t overflow-hidden"
    >
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 lg:px-16">
        <div className="flex items-center gap-4">
          <span className="red-dot" />
          <span className="label-eyebrow-red">Trusted Outcomes</span>
        </div>
        <h2 className="huge-type mt-6 text-silver" style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}>
          Our candidates work at{" "}
          <span className="serif-italic text-crimson">the world's top MNCs.</span>
        </h2>
      </div>

      <div className="relative mt-14">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />

        <div className="space-y-5">
          {ROWS.map((row, idx) => (
            <Marquee
              key={idx}
              speed={idx % 2 === 0 ? 35 : 30}
              direction={idx % 2 === 0 ? "left" : "right"}
              gradient={false}
              pauseOnHover
            >
              {row.map((n, i) => (
                <Chip key={n + i} name={n} i={`${idx}-${i}`} />
              ))}
              {row.map((n, i) => (
                <Chip key={n + "x" + i} name={n} i={`${idx}-x-${i}`} />
              ))}
            </Marquee>
          ))}
        </div>
      </div>
    </section>
  );
};
