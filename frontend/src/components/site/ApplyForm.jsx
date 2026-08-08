import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Mail, Loader2 } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

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

const blank = FIELDS.reduce((a, f) => ({ ...a, [f.name]: "" }), {});

export const ApplyForm = React.forwardRef((_, ref) => {
  const [form, setForm] = useState(blank);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (name) => (e) => setForm((p) => ({ ...p, [name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    for (const f of FIELDS) {
      if (f.name === "career_gap") continue;
      if (!form[f.name]?.trim()) {
        toast.error(`Please fill in ${f.label}`);
        return;
      }
    }
    setSubmitting(true);
    try {
      const { data } = await axios.post(`${API}/applications`, form);
      setSubmitted(true);
      toast.success("Application received. Only shortlisted candidates will be contacted.");
      setForm(blank);
      if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      console.log("Application created:", data?.id);
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="apply"
      ref={ref}
      data-testid="apply-section"
      
      className="relative py-16 md:py-36 hairline-t"
      style={{ background: "var(--bg-soft)" }}
    >
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 lg:px-16">
        {/* Adjusted column gap for small displays */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left — context */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase" style={{ color: "var(--red-700)" }}>
                07
              </span>
              <span
                className="block w-10 h-px"
                style={{ background: "linear-gradient(90deg, var(--red-600), transparent)" }}
              />
              <span className="label-eyebrow">Apply for Project 7 Figure</span>
            </div>
        
            <h2 className="huge-type mt-4 md:mt-6 text-silver" style={{ fontSize: "clamp(32px, 6vw, 76px)" }}>
              Step into the <span className="font-serif italic text-crimson">next chapter.</span>
            </h2>
            <p className="mt-4 md:mt-6 text-black/60 leading-relaxed text-base md:text-lg max-w-[460px]">
              Applications are reviewed selectively. Only candidates meeting our eligibility
              criteria and demonstrating genuine commitment will be considered.
            </p>

            <div className="mt-8 md:mt-10 space-y-4">
              <a
                href="mailto:the7figure.careers@gmail.com"
                data-testid="email-cta"
                className="group flex items-center justify-between p-4 md:p-5 hairline hover:border-[var(--red-700)] transition-colors bg-white"
              >
                <div className="flex items-center gap-4">
                  <Mail size={18} strokeWidth={1.4} className="text-[var(--red-700)] flex-shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-black/45">
                      Or email us at
                    </div>
                   
                    <div className="mt-1 text-black text-base md:text-lg font-display break-all">
                      the7figure.careers@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-black/60 group-hover:text-[var(--red-700)] group-hover:rotate-12 transition-all flex-shrink-0"
                />
              </a>

              <div className="p-4 md:p-5 hairline bg-white">
                <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-black/45">
                  After submission
                </div>
                <p className="mt-2 text-black/70 text-[14px] md:text-[15px] leading-relaxed">
                  Only shortlisted candidates will be contacted by our placement team.
                </p>
              </div>
            </div>
          </div>

       
          <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-black/10 mt-4 lg:mt-0">
            {submitted ? (
              <div
                data-testid="apply-success"
               
                className="bg-white hairline px-6 py-12 md:p-12 text-center min-h-[420px] flex flex-col items-center justify-center"
              >
                <div
                  className="w-16 h-16 mb-6 flex items-center justify-center"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid rgba(192,26,52,0.4)",
                    background: "linear-gradient(180deg, #ffffff, #faf7f8)",
                    boxShadow: "0 8px 24px rgba(192,26,52,0.15)",
                  }}
                >
                  <span className="font-display text-3xl text-[var(--red-700)]">✓</span>
                </div>
                <h3 className="font-display text-2xl md:text-4xl text-silver">
                  Application received.
                </h3>
                <p className="mt-4 text-black/60 max-w-md text-sm md:text-base">
                  Your application is under review. If your profile meets the criteria, our team
                  will be in touch shortly.
                </p>
                <button
                  className="btn-secondary mt-8 w-full sm:w-auto"
                  onClick={() => setSubmitted(false)}
                  data-testid="apply-reset-btn"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                data-testid="application-form"
               
                className="bg-white hairline p-4 sm:p-6 md:p-10"
                style={{ boxShadow: "0 20px 60px rgba(10,10,10,0.05)" }}
              >
            
                <div className="grid grid-cols-12 gap-x-6 gap-y-5 md:gap-x-8 md:gap-y-8">
                  {FIELDS.map((f) => (
                    <div key={f.name} className={f.cls}>
                      <label
                        htmlFor={f.name}
                        className="block font-mono text-[10px] tracking-[0.24em] uppercase text-black/50 mb-1.5"
                      >
                        {f.label}
                      </label>
                      {f.type === "textarea" ? (
                        <textarea
                          id={f.name}
                          name={f.name}
                          rows={3}
                          placeholder={f.placeholder}
                          value={form[f.name]}
                          onChange={onChange(f.name)}
                          data-testid={`field-${f.name}`}
                          className="input-luxe resize-none"
                        />
                      ) : (
                        <input
                          id={f.name}
                          name={f.name}
                          type={f.type || "text"}
                          placeholder={f.placeholder}
                          value={form[f.name]}
                          onChange={onChange(f.name)}
                          data-testid={`field-${f.name}`}
                          className="input-luxe"
                        />
                      )}
                    </div>
                  ))}
                </div>

               
                <div className="mt-8 pt-6 hairline-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-black/45 order-2 sm:order-1 text-center sm:text-left">
                    By submitting, you accept selective review.
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="submit-application-btn"
                    className="btn-primary w-full sm:w-auto justify-center order-1 sm:order-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Submitting
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowUpRight size={16} strokeWidth={1.5} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

ApplyForm.displayName = "ApplyForm";