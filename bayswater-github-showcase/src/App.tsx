import React, { useState } from "react";
import { BayswaterLogo } from "./components/BayswaterLogo";
import { OUR_APPROACH, TEAM_MEMBERS } from "./data";
import { motion } from "motion/react";
import { 
  Mail, 
  CheckCircle,
  Loader2,
  MapPin,
  Building2
} from "lucide-react";

export default function App() {
  // Simple Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    setSubmitted(false);
  };

  // Reusable scroll animation settings
  const slideFadeConfig = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800 font-sans antialiased relative selection:bg-brand-blue/10 selection:text-brand-blue flex flex-col justify-between">
      
      {/* Background Graphic Grid Elements */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none -z-10 opacity-60"></div>
      
      {/* Ambient background glow dots */}
      <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-sky-100/30 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Main Content Area */}
      <div className="w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 space-y-16">
          
          {/* Header section (without the top logo, centered and elegant) */}
          <motion.section 
            {...slideFadeConfig}
            className="text-center space-y-6"
            id="hero-header"
          >
            <div className="space-y-3 max-w-lg mx-auto">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight">
                Bayswater Research
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Bayswater is a premier quantitative asset research group designing systematic statistical arbitrage strategies and advanced pricing risk intelligence models.
              </p>
            </div>
          </motion.section>

          {/* Narrative & Consolidated Sections: Who We Are & What Do We Do (Flat Minimalist Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 pt-6">
            
            {/* Who We Are Block */}
            <motion.section 
              {...slideFadeConfig}
              className="space-y-6"
              id="who-we-are"
            >
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xs sm:text-sm text-brand-dark tracking-widest uppercase">
                  Who We Are
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Bayswater is a quantitative research group founded by mathematicians and engineers. We operate at the intersection of rigorous science and dynamic execution, specializing in identifying structural anomalies in global volatility markets.
                </p>
              </div>

              <div className="pt-4 space-y-3">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue">
                  Core Researchers
                </h4>
                <div className="space-y-3.5 text-xs">
                  {TEAM_MEMBERS.map((member) => (
                    <div key={member.id} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand-blue"></span>
                        <span className="font-display font-bold text-brand-dark">{member.name}</span>
                        <span className="text-gray-400 font-mono text-[9px]">— {member.role.split(" & ")[0]}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 pl-3 leading-relaxed">
                        {member.education}. Specializes in {member.specialty.toLowerCase()}.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* What Do We Do Block */}
            <motion.section 
              {...slideFadeConfig}
              className="space-y-6"
              id="what-do-we-do"
            >
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xs sm:text-sm text-brand-dark tracking-widest uppercase">
                  What Do We Do
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  We build active systematic strategies to capture market volatility inefficiencies. Our research loops construct delta-neutral factor exposures and continuous-time price discovery models across diverse global asset classes.
                </p>
              </div>

              <div className="pt-4 space-y-4">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue">
                  Research Pillars
                </h4>
                <div className="space-y-3">
                  {OUR_APPROACH.map((item, idx) => (
                    <div key={idx} className="space-y-1 text-xs">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-display font-bold text-brand-dark">{item.title}</span>
                        <span className="text-[9px] font-mono text-gray-400">{item.subtitle}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

          </div>

          {/* Contact Form Section (Flat Layout) */}
          <motion.section 
            {...slideFadeConfig}
            className="pt-10 border-t border-slate-200/50 space-y-6"
            id="contact-block"
          >
            <div className="text-center max-w-md mx-auto space-y-1">
              <h3 className="font-display font-bold text-xs sm:text-sm text-brand-dark tracking-widest uppercase">Get in Touch</h3>
              <p className="text-xs text-gray-500">
                For quantitative research alignments and system collaborations.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleContactSubmit} className="max-w-lg mx-auto space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="E.g. Dr. Jane"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-gray-200/80 rounded-md py-2 px-3 text-xs bg-white focus:outline-none focus:border-brand-blue transition-all duration-150"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="E.g. jane@bayswater.research"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-200/80 rounded-md py-2 px-3 text-xs bg-white focus:outline-none focus:border-brand-blue transition-all duration-150"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Message / Inquiry</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Outline details or share a collaborative research concept..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-gray-200/80 rounded-md py-2 px-3 text-xs bg-white focus:outline-none focus:border-brand-blue transition-all duration-150"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-dark text-white rounded-md py-2 text-xs font-semibold hover:bg-brand-dark/95 transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs border border-brand-dark"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5 text-brand-light-blue" />
                      Transmit message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3 max-w-sm mx-auto">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-sm text-brand-dark">Transmission Received</h4>
                <p className="text-[11px] text-gray-500 leading-normal">
                  Thank you. Your message has been routed to our core quantitative operations loop. We will reply shortly.
                </p>
                <button
                  onClick={handleResetForm}
                  className="text-xs text-brand-blue font-medium hover:underline cursor-pointer pt-2 block mx-auto"
                >
                  Send another message
                </button>
              </div>
            )}
          </motion.section>

        </div>
      </div>

      {/* Styled Footer - premium dark visually separated container */}
      <footer className="w-full bg-[#0b0f19] border-t border-slate-900 mt-20 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Footer Bottom Left: Static Logo configured for dark mode */}
            <div className="flex flex-col items-start space-y-4 md:col-span-1">
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/60 shadow-sm">
                <BayswaterLogo size="sm" theme="dark" className="!items-start" />
              </div>
            </div>

            {/* Footer Middle & Right: Primary Global Offices */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-400">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 font-display font-semibold text-slate-100 text-[11px] tracking-wider uppercase">
                  <Building2 className="w-3.5 h-3.5 text-brand-blue" />
                  London Headquarters
                </div>
                <p className="leading-relaxed pl-5 font-sans text-slate-400">
                  125 Old Broad Street<br />
                  London, EC2N 1AR<br />
                  United Kingdom
                </p>
                <div className="pl-5 pt-1">
                  <span className="inline-block text-[9px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">
                    Europe Research Hub
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1.5 font-display font-semibold text-slate-100 text-[11px] tracking-wider uppercase">
                  <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                  Singapore Desk
                </div>
                <p className="leading-relaxed pl-5 font-sans text-slate-400">
                  10 Collyer Quay<br />
                  Ocean Financial Centre, Level 32<br />
                  Singapore 049315
                </p>
                <div className="pl-5 pt-1">
                  <span className="inline-block text-[9px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">
                    Asia-Pacific Ingestion Desk
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Centered flat copyright notice */}
          <div className="pt-6 border-t border-slate-900 text-center">
            <p className="text-[10px] font-mono text-slate-500 tracking-wide">
              © 2026 Bayswater Research LLC. Quant Trading Systems & Systematic Portfolios. All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
