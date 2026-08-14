import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const FIELDS = [
  { name: "full_name", label: "Full Name", placeholder: "Your full name", cls: "col-span-12 md:col-span-6" },
  { name: "contact_number", label: "Contact Number", placeholder: "+91 ▸▸▸▸▸▸▸▸▸▸", cls: "col-span-12 md:col-span-6", type: "tel" },
  { name: "native_state", label: "Native / State", placeholder: "e.g. Karnataka", cls: "col-span-12 md:col-span-6" },
  { name: "email", label: "Email Address", placeholder: "you@email.com", cls: "col-span-12 md:col-span-6", type: "email" },
  { name: "degree", label: "Degree", placeholder: "B.E. / B.Tech / Other", cls: "col-span-12 md:col-span-8" },
  { name: "graduation_year", label: "Graduation Year", placeholder: "e.g. 2022", cls: "col-span-12 md:col-span-4" },
  { name: "current_company", label: "Current Company", placeholder: "Company name", cls: "col-span-12 md:col-span-6" },
  { name: "current_ctc", label: "Current CTC (Fixed + Variable)", placeholder: "₹ 0 LPA", cls: "col-span-12 md:col-span-6" },
  { name: "current_role", label: "Current Role / Domain", placeholder: "Software Engineer, etc.", cls: "col-span-12 md:col-span-6" },
  { name: "total_experience", label: "Total Experience", placeholder: "e.g. 4 years", cls: "col-span-12 md:col-span-6" },
  { name: "notice_period", label: "Notice Period", placeholder: "e.g. 30 days", cls: "col-span-12 md:col-span-6" },
  { name: "career_gap", label: "Career Gap Details (if applicable)", placeholder: "Optional", cls: "col-span-12", type: "textarea" },
];

export const ApplyForm = React.forwardRef((_, ref) => {
  const mailSubject = "Application Details - Project 7 Figure";
  const mailBody = 
    "Please fill in your details below:\n\n" +
    "1. Full Name: \n" +
    "2. Contact Number: \n" +
    "3. Native / State: \n" +
    "4. Email Address: \n" +
    "5. Degree: \n" +
    "6. Graduation Year: \n" +
    "7. Current Company: \n" +
    "8. Current CTC: \n" +
    "9. Current Role / Domain: \n" +
    "10. Total Experience: \n" +
    "11. Notice Period: \n" +
    "12. Career Gap Details: \n";

  const mailToUrl = `mailto:the7figure.careers@gmail.com?subject=${encodeURIComponent(
    mailSubject
  )}&body=${encodeURIComponent(mailBody)}`;

  return (
    <section
      id="apply"
      ref={ref}
      data-testid="apply-section"
      className="relative py-12 md:py-36 hairline-t overflow-hidden"
      style={{ background: "var(--bg-soft)" }}
    >
      {/* Mobile-friendlier padding (px-4 for mobile, px-8+ for tablet/desktop) */}
      <div className="mx-auto max-w-[1480px] px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left — Context Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 md:gap-4">
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase" style={{ color: "var(--red-700)" }}>
                07
              </span>
              <span
                className="block w-8 md:w-10 h-px"
                style={{ background: "linear-gradient(90deg, var(--red-600), transparent)" }}
              />
              <span className="label-eyebrow text-xs md:text-sm">Apply for Project 7 Figure</span>
            </div>
        
            <h2 className="huge-type mt-4 md:mt-6 text-silver" style={{ fontSize: "clamp(28px, 5vw, 76px)" }}>
              Step into the <span className="font-serif italic text-crimson">next chapter.</span>
            </h2>
            <p className="mt-3 md:mt-6 text-black/60 leading-relaxed text-sm md:text-lg max-w-[460px]">
              Applications are reviewed selectively. Only candidates meeting our eligibility
              criteria and demonstrating genuine commitment will be considered.
            </p>

            <div className="mt-6 md:mt-10 space-y-4">
              <a
                href={mailToUrl}
                data-testid="email-cta"
                className="group flex items-center justify-between p-4 md:p-5 hairline hover:border-[var(--red-700)] transition-colors bg-white"
              >
                <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                  <Mail size={18} strokeWidth={1.4} className="text-[var(--red-700)] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-black/45">
                      Or email us at
                    </div>
                    <div className="mt-1 text-black text-sm md:text-lg font-display break-all">
                      the7figure.careers@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-black/60 group-hover:text-[var(--red-700)] group-hover:rotate-12 transition-all flex-shrink-0 ml-2"
                />
              </a>

              <div className="p-4 md:p-5 hairline bg-white">
                <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-black/45">
                  After submission
                </div>
                <p className="mt-2 text-black/70 text-[13px] md:text-[15px] leading-relaxed">
                  Only shortlisted candidates will be contacted by our placement team.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form preview with Mobile Responsive Button */}
          <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-black/10 mt-2 lg:mt-0">
            <div
              className="bg-white hairline p-4 sm:p-6 md:p-10"
              style={{ boxShadow: "0 20px 60px rgba(10,10,10,0.05)" }}
            >
              <div className="grid grid-cols-12 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 pointer-events-none opacity-80">
                {FIELDS.map((f) => (
                  <div key={f.name} className={f.cls}>
                    <label
                      htmlFor={f.name}
                      className="block font-mono text-[10px] tracking-[0.2em] md:tracking-[0.24em] uppercase text-black/50 mb-1"
                    >
                      {f.label}
                    </label>
                    {f.type === "textarea" ? (
                      <textarea
                        id={f.name}
                        rows={3}
                        placeholder={f.placeholder}
                        disabled
                        className="input-luxe resize-none bg-gray-50 text-xs md:text-sm w-full"
                      />
                    ) : (
                      <input
                        id={f.name}
                        type={f.type || "text"}
                        placeholder={f.placeholder}
                        disabled
                        className="input-luxe bg-gray-50 text-xs md:text-sm w-full"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Responsive Mail Action Button */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 hairline-t">
                <a
                  href={mailToUrl}
                  className="btn-primary w-full p-3.5 sm:p-4 flex items-center justify-between text-left group hover:bg-[var(--red-700)] transition-all"
                >
                  <span className="text-[11px] sm:text-xs md:text-sm font-medium leading-normal pr-2 break-words">
                    Kindly send all the above details directly to:{" "}
                    <span className="underline font-bold break-all">
                      the7figure.careers@gmail.com
                    </span>
                  </span>
                  <ArrowUpRight size={18} className="flex-shrink-0 ml-1 group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

ApplyForm.displayName = "ApplyForm";