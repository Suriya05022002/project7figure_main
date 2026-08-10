import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Linkedin,
  Instagram,
} from "lucide-react";

export const Footer = ({ onApply }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      data-testid="site-footer"
      className="relative overflow-hidden bg-white border-t border-gray-200"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 10%, rgba(192,26,52,.05), transparent 35%), radial-gradient(circle at 90% 100%, rgba(192,26,52,.04), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
        {/* Top */}
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Project 7 Figure"
                className="h-14 w-14 object-contain"
              />

              <div>
                <h2 className="text-2xl font-bold tracking-wide text-gray-900">
                  Project 7 Figure
                </h2>

                <p className="mt-1 text-xs uppercase tracking-[5px] text-red-600">
                  GR Networks
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-md text-[15px] leading-8 text-gray-600">
              Premium placement program designed for ambitious professionals.
              Master the right skills, crack interviews and secure high-paying
              opportunities in leading MNCs.
            </p>

            <button
              onClick={onApply}
              className="mt-8 flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-700 to-red-500 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-200"
            >
              Apply Now
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {[
                ["Framework", "#framework"],
                ["Compensation", "#compensation"],
                ["Eligibility", "#eligibility"],
                ["Money Back", "#money-back"],
                ["FAQ", "#faq"],
              ].map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="group flex w-fit items-center text-gray-600 transition hover:text-red-600"
                >
                  {name}

                  <span className="ml-2 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-8" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
         
<div className="lg:col-span-4">
  <h3 className="text-lg font-semibold text-gray-900">Contact</h3>

  <div className="mt-6 space-y-5">
    <div className="flex items-center gap-4">
      <Mail className="text-red-600" size={18} />
      <a
        href="mailto:the7figure.careers@gmail.com"
        className="text-gray-600 hover:text-red-600 transition"
      >
        the7figure.careers@gmail.com
      </a>
    </div>

  
<div className="flex items-center gap-4">
  <Phone className="text-red-600" size={18} />
  <div className="flex flex-col text-gray-600">
    <a href="tel:+919364044833" className="hover:text-red-600 transition">
      +91 93640 44833
    </a>
    <a href="tel:+91XXXXXXXXXX" className="hover:text-red-600 transition">
      +91 97504 17833 
    </a>
  </div>
</div>

    <div className="flex items-center gap-4">
      <MapPin className="text-red-600" size={18} />
      <span className="text-gray-600">Coimbatore, Tamil Nadu</span>
    </div>
  </div>

  <div className="mt-8 flex gap-4">
    <a
      href="#"
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600"
    >
      <Linkedin size={18} />
    </a>

    <a
      href="#"
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600"
    >
      <Instagram size={18} />
    </a>
  </div>
</div>        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* Huge Background Text */}
        {/* <div className="overflow-hidden">
          <h1
            className="font-black uppercase tracking-tight text-gray-100 select-none"
            style={{
              fontSize: "clamp(70px,13vw,190px)",
              lineHeight: ".9",
            }}
          >
            PROJECT 7 FIGURE
          </h1>
        </div> */}

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {year}{" "}
            <span className="font-semibold text-gray-900">
              GR Networks
            </span>
            . All Rights Reserved.
          </p>

          <p>
            Premium Placement Program •
          </p>
        </div>
      </div>
    </footer>
  );
};