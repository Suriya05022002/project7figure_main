import React from "react";

export const SectionHeader = ({
  index,
  eyebrow,
  title,
  italicTitle,
  kicker,
  children,
  align = "left",
  onDark = false,
}) => {
  return (
    <div
      className={`relative ${align === "center" ? "text-center mx-auto" : ""}`}
      style={{ maxWidth: align === "center" ? 880 : "100%" }}
    >
      {/* Top Label */}
      <div
        className={`flex items-center gap-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {index && (
          <span
            className="font-['Inter'] text-[11px] font-semibold tracking-[0.32em] uppercase"
            style={{ color: "var(--red-700)" }}
          >
            {index}
          </span>
        )}

        <span
          className="block w-10 h-px"
          style={{
            background:
              "linear-gradient(90deg, var(--red-600), transparent)",
          }}
        />

        <span
          className="font-['Inter'] text-[11px] font-semibold tracking-[0.32em] uppercase"
          style={{
            color: onDark
              ? "rgba(255,255,255,0.65)"
              : "var(--ink-muted)",
          }}
        >
          {eyebrow}
        </span>
      </div>

      {/* Heading */}
      <h2
        className={`mt-6 font-['Sora'] font-bold leading-[0.95] tracking-[-0.04em] ${
          onDark ? "text-white" : "text-black"
        }`}
        style={{
          fontSize: "clamp(42px,6vw,84px)",
        }}
      >
        {title}

        {italicTitle && (
          <>
            <br className="hidden md:inline" />

            <span
              className="italic font-medium"
              style={{
                color: onDark
                  ? "rgba(255,255,255,0.75)"
                  : "var(--red-700)",
              }}
            >
              {italicTitle}
            </span>
          </>
        )}
      </h2>

      {/* Description */}
      {kicker && (
        <p
          className="mt-7 font-['Inter'] text-[18px] md:text-[20px] leading-9 max-w-[700px]"
          style={{
            color: onDark
              ? "rgba(255,255,255,0.70)"
              : "var(--ink-muted)",
            ...(align === "center"
              ? {
                  marginLeft: "auto",
                  marginRight: "auto",
                }
              : {}),
          }}
        >
          {kicker}
        </p>
      )}

      {children}
    </div>
  );
};