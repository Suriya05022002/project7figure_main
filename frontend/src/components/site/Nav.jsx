import React, { useEffect, useState } from "react";

export const Nav = ({ onApply }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.55)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        borderBottom: scrolled ? "1px solid rgba(10,10,10,0.08)" : "1px solid transparent",
      }}
    >
      {/* Changed: px-3 sm:px-6 for tighter mobile padding */}
      <div className="mx-auto max-w-[1480px] px-3 sm:px-6 md:px-12 lg:px-16 flex items-center justify-between py-3 md:py-4">
        
        {/* Changed: gap-2 on mobile */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src="/logo.png"
            alt="Project 7 Figure"
            /* Changed: Responsive sizing for mobile vs desktop */
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
          />
          <div className="flex flex-col leading-tight">
            {/* Changed: Mobile-la text size reduced so it doesn't push the button */}
            <span className="font-mono text-[14px] sm:text-[18px] md:text-[22px] font-semibold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-black">
              Project 7 Figure
            </span>

            {/* Changed: Mobile-la subtext proportionated appropriately */}
            <span className="font-mono text-[10px] sm:text-[13px] md:text-[18px] tracking-[0.2em] sm:tracking-[0.28em] uppercase text-black/60">
              GR Networks
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {[
            ["Framework", "#framework"],
            ["Outcomes", "#compensation"],
            ["Eligibility", "#eligibility"],
            ["Guarantee", "#money-back"],
            ["Apply", "#apply"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              data-testid={`nav-link-${label.toLowerCase()}`}
              className="font-mono text-[11px] tracking-[0.24em] uppercase text-black/55 hover:text-black transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Changed: Padding fixed for button on smaller screens */}
        <button
          data-testid="nav-apply-btn"
          onClick={onApply}
          className="btn-primary !py-2 !px-3 sm:!py-2.5 sm:!px-5 text-[9px] sm:text-[10px] whitespace-nowrap"
        >
          Apply Now
        </button>
      </div>
    </header>
  );
};