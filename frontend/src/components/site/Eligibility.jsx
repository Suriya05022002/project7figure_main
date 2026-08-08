import React from "react";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap, Briefcase, Compass, Pause, Users, MessageSquare, MapPin } from "lucide-react";

const CRITERIA = [
  { icon: GraduationCap, title: "Education", body: "Graduated in or before 2023. BE, BTech, Arts and other recognised degrees are eligible." },
  { icon: Briefcase, title: "Experience & Gaps", body: "Minimum 3 years of combined work experience or career gap." },
  { icon: Compass, title: "Career Goals", body: "Seeking a company switch, higher salary, or transitioning into IT from another domain." },
  { icon: Pause, title: "Career Breaks", body: "All breaks accepted — entrepreneurship, exam prep, maternity, personal — eligibility is unaffected." },
  { icon: Users, title: "Employment Status", body: "Open to employed, unemployed, freelance and self-employed professionals." },
  { icon: MessageSquare, title: "Communication", body: "Strong spoken and written English with professional interview confidence." },
  { icon: MapPin, title: "Preferred Location", body: "Choose your preferred job location from multiple available opportunities." },
];

export const Eligibility = () => {
  return (
    <section id="eligibility" data-testid="eligibility-section" className="relative py-28 md:py-36 hairline-t">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 lg:px-16">
        <SectionHeader
          index="04"
          eyebrow="Eligibility Criteria"
          title="Selective by design,"
          italicTitle="not by snobbery."
          kicker="We extend Project 7 Figure to professionals who meet a clear, human standard. Career gaps do not disqualify you. Commitment does."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {CRITERIA.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                data-testid={`eligibility-item-${i}`}
                className="relative pl-14 group"
              >
                <div
                  className="absolute left-0 top-0 w-9 h-9 flex items-center justify-center transition-all group-hover:border-[var(--red-700)]"
                  style={{
                    border: "1px solid rgba(192,26,52,0.35)",
                    background: "linear-gradient(180deg, #ffffff, #faf7f8)",
                    boxShadow: "0 4px 12px rgba(192,26,52,0.06)",
                  }}
                >
                  <Icon size={16} strokeWidth={1.4} className="text-[var(--red-700)]" />
                </div>
                <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--red-700)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display text-2xl text-black">{c.title}</h3>
                <p className="mt-3 text-black/60 leading-relaxed text-[15px]">{c.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 hr-fade" />

        <p className="mt-10 text-center font-display text-2xl md:text-3xl text-black/80">
          <span className="serif-italic text-crimson">Career gaps</span> do not affect eligibility.
        </p>
      </div>
    </section>
  );
};
