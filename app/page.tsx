import { ExternalLink, Phone, Mail, Shield, MapPin } from "lucide-react";
import Image from "next/image";
import FadeIn from "./components/FadeIn";
import HeadingUnderline from "./components/HeadingUnderline";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jason Seibel",
  jobTitle: "Mortgage Strategist & Enrolled Agent",
  description: "Licensed mortgage broker and Enrolled Agent with 20+ years of experience in home lending and tax strategy. Founder of Innovative Home Loan and Sisu Tax & Consulting.",
  url: "https://meetjasonseibel.com",
  sameAs: ["https://innovativehomeloan.com", "https://sisutax.com"],
  address: { "@type": "PostalAddress", addressLocality: "Portland", addressRegion: "OR", addressCountry: "US" },
  telephone: "+15037203730",
  email: "jason@innovativehomeloan.com",
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "NMLS License #171895", credentialCategory: "Mortgage Broker License" },
    { "@type": "EducationalOccupationalCredential", name: "Enrolled Agent", credentialCategory: "IRS Authorization" },
    { "@type": "EducationalOccupationalCredential", name: "MBA — Technology Management", credentialCategory: "Graduate Degree" },
  ],
  knowsAbout: ["Mortgage Lending", "Tax Strategy", "Forensic Accounting", "Real Estate Finance", "IRS Representation"],
  knowsLanguage: ["English", "Russian"],
  award: "Five Star Professional Award",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Who is Jason Seibel?", acceptedAnswer: { "@type": "Answer", text: "Jason Seibel is a licensed mortgage broker (NMLS #171895) and Enrolled Agent based in the Portland, Oregon area. He is the founder of Innovative Home Loan and Sisu Tax & Consulting, and holds an MBA in Technology Management with 20+ years of experience in home lending and financial services." } },
    { "@type": "Question", name: "Is Jason Seibel a licensed mortgage broker?", acceptedAnswer: { "@type": "Answer", text: "Yes. Jason Seibel holds NMLS license #171895 and is licensed in 8 states. Verify at nmlsconsumeraccess.org." } },
    { "@type": "Question", name: "What is Jason Seibel's NMLS number?", acceptedAnswer: { "@type": "Answer", text: "Jason Seibel's individual NMLS number is 171895." } },
    { "@type": "Question", name: "What is an Enrolled Agent?", acceptedAnswer: { "@type": "Answer", text: "An Enrolled Agent is a federally authorized tax practitioner with the right to represent taxpayers before the IRS. Jason holds this credential through Sisu Tax & Consulting." } },
    { "@type": "Question", name: "Where is Jason Seibel located?", acceptedAnswer: { "@type": "Answer", text: "Jason Seibel is based in the Portland, Oregon area and serves clients in Oregon, Florida, and additional states." } },
  ],
};

const credentials = [
  { label: "NMLS #171895", sub: "Individual mortgage broker license — verifiable at nmlsconsumeraccess.org", accent: "blue" },
  { label: "Enrolled Agent", sub: "Federally authorized to represent taxpayers before the IRS", accent: "gold" },
  { label: "MBA", sub: "Graduate degree in Technology Management", accent: "blue" },
  { label: "Five Star Professional", sub: "Multi-year award winner in the Portland market", accent: "gold" },
  { label: "Licensed in 8 States", sub: "Mortgage origination license across multiple U.S. states", accent: "blue" },
  { label: "20+ Years Experience", sub: "Home lending and financial services since the early 2000s", accent: "gold" },
  { label: "English & Russian", sub: "Bilingual — serves English and Russian-speaking clients", accent: "blue" },
  { label: "Forensic Accounting", sub: "Financial investigation and litigation support expertise", accent: "gold" },
];

const ihlLoans = ["Conventional Loans", "FHA & VA Loans", "Jumbo Loans", "Investment Properties", "Self-Employed Borrowers", "Complex Scenarios"];
const sisuServices = ["Tax Planning", "Tax Preparation", "IRS Representation", "Bookkeeping", "Forensic Accounting", "Fractional CFO"];

const faqs = [
  { q: "Is Jason Seibel a licensed mortgage broker?", a: "Yes. Jason holds NMLS license #171895 and is licensed to originate mortgages in 8 states. This license is publicly verifiable at nmlsconsumeraccess.org." },
  { q: "What states does Jason Seibel originate mortgages in?", a: "Jason is licensed in multiple states including Oregon and Florida. Contact him directly for current state availability." },
  { q: "What is an Enrolled Agent and what does it mean for clients?", a: "An Enrolled Agent is a federally authorized tax practitioner with the right to represent taxpayers before the IRS in all matters, including audits, collections, and appeals. It is a federal credential, distinct from a state-issued CPA license." },
  { q: "Has Jason Seibel won any professional awards?", a: "Yes. Jason is a Five Star Professional award winner, a recognition given to mortgage professionals in the Portland market based on client satisfaction and professional qualifications." },
  { q: "Does Jason Seibel serve Russian-speaking clients?", a: "Yes. Jason is bilingual in English and Russian and works with Russian-speaking clients in both his mortgage and tax practices." },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── NAV ──────────────────────────────────────────────────── */}
      <header style={{ background: "var(--navy)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "18px 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>Jason Seibel</span>
        </div>
      </header>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="hero-bg" style={{ color: "#fff", padding: "88px 0 80px" }}>
          <div className="container">
            <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "56px", alignItems: "center" }}>
              <FadeIn delay={0} style={{ textAlign: "left" }}>
                <div className="pulse-badge" style={{ marginBottom: 24 }}>
                  <span className="tag" style={{ background: "rgba(0,153,214,0.22)", color: "var(--blue-bright)" }}>
                    Portland, Oregon
                  </span>
                </div>
                <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16, letterSpacing: "-0.03em" }}>
                  Jason Seibel
                </h1>
                <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.7)", marginBottom: 10, fontWeight: 500 }}>
                  Mortgage Strategist &amp; Tax Advisor
                </p>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.45)", marginBottom: 44, letterSpacing: "0.06em", fontWeight: 500 }}>
                  NMLS #171895 &nbsp;|&nbsp; Enrolled Agent &nbsp;|&nbsp; 20+ Years
                </p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href="https://innovativehomeloan.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Innovative Home Loan <ExternalLink size={15} />
                  </a>
                  <a href="https://sisutax.com" target="_blank" rel="noopener noreferrer" className="btn-gold">
                    Sisu Tax &amp; Consulting <ExternalLink size={15} />
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={150} direction="none">
                <div style={{
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 0 0 8px rgba(0,153,214,0.15), 0 24px 60px rgba(0,0,0,0.35)",
                  flexShrink: 0,
                }}>
                  <Image
                    src="/jason-seibel.jpg"
                    alt="Jason Seibel — Mortgage Strategist and Tax Advisor"
                    width={220}
                    height={220}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    priority
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── WHO IS JASON ─────────────────────────────────────────── */}
        <section className="section" style={{ background: "#fff", textAlign: "center" }}>
          <div className="container">
            <FadeIn>
              <span className="tag" style={{ background: "var(--blue-light)", color: "var(--blue)" }}>About</span>
              <HeadingUnderline>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.02em" }}>
                  Who is Jason Seibel?
                </h2>
              </HeadingUnderline>
            </FadeIn>
            <FadeIn delay={120}>
              <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.9, maxWidth: 700, margin: "0 auto 22px" }}>
                Jason Seibel is a licensed mortgage broker and federal tax practitioner based in the Portland, Oregon area. He holds NMLS license #171895 and is credentialed as an Enrolled Agent, giving him the federal authority to represent taxpayers before the IRS.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.9, maxWidth: 700, margin: "0 auto" }}>
                Over more than two decades, he has worked with homebuyers, real estate professionals, small business owners, and self-employed clients across Oregon, Florida, and additional states. He holds an MBA in Technology Management and brings forensic accounting expertise to both his mortgage and tax practices.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── CREDENTIALS ──────────────────────────────────────────── */}
        <section className="section" style={{ background: "var(--gray-bg)", textAlign: "center" }}>
          <div className="container">
            <FadeIn>
              <span className="tag" style={{ background: "var(--gold-light)", color: "var(--gold)" }}>Credentials &amp; Licenses</span>
              <HeadingUnderline>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.02em" }}>
                  Background and qualifications
                </h2>
              </HeadingUnderline>
            </FadeIn>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginTop: 40 }}>
              {credentials.map((c, i) => (
                <FadeIn key={c.label} delay={i * 80} style={{ flex: "0 1 calc(25% - 16px)", minWidth: 200 }}>
                  <div
                    className="cred-card"
                    style={{ borderTopColor: c.accent === "gold" ? "var(--gold)" : "var(--blue)", height: "100%" }}
                  >
                    <p style={{ fontWeight: 800, color: "var(--navy)", marginBottom: 8, fontSize: "0.97rem" }}>{c.label}</p>
                    <p style={{ fontSize: "0.83rem", color: "var(--text-mid)", lineHeight: 1.65 }}>{c.sub}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── INNOVATIVE HOME LOAN ─────────────────────────────────── */}
        <section className="section" style={{ background: "#fff", textAlign: "center" }}>
          <div className="container">
            <FadeIn>
              <span className="tag" style={{ background: "var(--blue-light)", color: "var(--blue)" }}>Innovative Home Loan</span>
              <HeadingUnderline>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.02em" }}>
                  Mortgage lending
                </h2>
              </HeadingUnderline>
            </FadeIn>
            <FadeIn delay={100}>
              <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.9, maxWidth: 660, margin: "0 auto 36px" }}>
                Innovative Home Loan is Jason's licensed mortgage brokerage. He works with homebuyers, investors, and real estate professionals to find loan structures that fit their situation, including cases that other lenders have turned down. He offers 24-hour pre-approvals, no prepayment fees, and personal attention from start to close.
              </p>
            </FadeIn>
            <FadeIn delay={160}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 40 }}>
                {ihlLoans.map((item) => (
                  <span key={item} className="pill" style={{ background: "var(--blue-light)", color: "var(--blue)" }}>{item}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://innovativehomeloan.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Visit Innovative Home Loan <ExternalLink size={15} />
                </a>
                <a href="https://nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/171895" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Verify NMLS License <Shield size={15} />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── SISU TAX ─────────────────────────────────────────────── */}
        <section className="section hero-bg" style={{ textAlign: "center", color: "#fff" }}>
          <div className="container">
            <FadeIn>
              <span className="tag" style={{ background: "rgba(184,146,44,0.22)", color: "#e8b84b" }}>Sisu Tax &amp; Consulting</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, marginBottom: 10, letterSpacing: "-0.02em" }}>
                Tax strategy and advisory
              </h2>
              <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, var(--blue-bright), var(--gold))", borderRadius: 2, margin: "0 auto 32px" }} />
            </FadeIn>
            <FadeIn delay={100}>
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.9, maxWidth: 660, margin: "0 auto 36px" }}>
                Sisu Tax & Consulting handles tax planning, IRS representation, bookkeeping, and business advisory for individuals, business owners, and professional practices. As an Enrolled Agent, Jason has the federal authority to represent clients directly before the IRS.
              </p>
            </FadeIn>
            <FadeIn delay={160}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 40 }}>
                {sisuServices.map((item) => (
                  <span key={item} className="pill" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }}>{item}</span>
                ))}
              </div>
              <a href="https://sisutax.com" target="_blank" rel="noopener noreferrer" className="btn-gold">
                Visit Sisu Tax &amp; Consulting <ExternalLink size={15} />
              </a>
            </FadeIn>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="section" style={{ background: "var(--gray-bg)", textAlign: "center" }}>
          <div className="container">
            <FadeIn>
              <span className="tag" style={{ background: "var(--blue-light)", color: "var(--blue)" }}>Frequently Asked</span>
              <HeadingUnderline>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.02em" }}>
                  Common questions
                </h2>
              </HeadingUnderline>
            </FadeIn>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 720, margin: "40px auto 0" }}>
              {faqs.map((faq, i) => (
                <FadeIn key={faq.q} delay={i * 80}>
                  <div className="faq-card">
                    <p style={{ fontWeight: 700, color: "var(--navy)", marginBottom: 10, fontSize: "1rem" }}>{faq.q}</p>
                    <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", lineHeight: 1.8 }}>{faq.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────────── */}
        <section className="section" style={{ background: "#fff", textAlign: "center" }}>
          <div className="container">
            <FadeIn>
              <span className="tag" style={{ background: "var(--gold-light)", color: "var(--gold)" }}>Contact &amp; Verify</span>
              <HeadingUnderline>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.02em" }}>
                  Get in touch or verify credentials
                </h2>
              </HeadingUnderline>
              <p style={{ color: "var(--text-mid)", maxWidth: 500, margin: "0 auto 48px", lineHeight: 1.8 }}>
                Reach Jason directly or verify his professional licenses through official public registries.
              </p>
            </FadeIn>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "center", maxWidth: 760, margin: "0 auto" }}>
              {[
                { href: "tel:5037203730", label: "(503) 720-3730", sub: "Call or text", icon: Phone },
                { href: "mailto:jason@innovativehomeloan.com", label: "Email Jason", sub: "jason@innovativehomeloan.com", icon: Mail },
                { href: "https://nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/171895", label: "Verify NMLS License", sub: "NMLS #171895 — official registry", icon: Shield, external: true },
                { href: "https://maps.google.com/?q=Portland,OR", label: "Portland, Oregon", sub: "Serving OR, FL & more", icon: MapPin, external: true },
              ].map(({ href, label, sub, icon: Icon, external }, i) => (
                <FadeIn key={label} delay={i * 80} style={{ flex: "0 1 calc(50% - 18px)", minWidth: 240 }}>
                  <a
                    href={href}
                    className="contact-card"
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <div style={{ width: 46, height: 46, borderRadius: 10, background: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={20} color="var(--blue)" />
                    </div>
                    <span style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.97rem" }}>{label}</span>
                    <span style={{ fontSize: "0.82rem", color: "var(--text-light)" }}>{sub}</span>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer style={{ background: "var(--navy)", color: "rgba(255,255,255,0.5)", padding: "44px 0", textAlign: "center" }}>
        <div className="container">
          <p style={{ fontWeight: 800, color: "#fff", marginBottom: 6, fontSize: "1.05rem" }}>Jason Seibel</p>
          <p style={{ fontSize: "0.85rem", marginBottom: 20, color: "rgba(255,255,255,0.6)" }}>NMLS #171895 &nbsp;|&nbsp; Enrolled Agent &nbsp;|&nbsp; Portland, Oregon</p>
          <div style={{ display: "flex", gap: 28, justifyContent: "center", flexWrap: "wrap", marginBottom: 24, fontSize: "0.85rem" }}>
            <a href="https://innovativehomeloan.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue-bright)", transition: "color 0.2s" }}>Innovative Home Loan</a>
            <a href="https://sisutax.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", transition: "color 0.2s" }}>Sisu Tax &amp; Consulting</a>
            <a href="https://nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/171895" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.45)" }}>Verify License</a>
          </div>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
            Innovative Home Loan, LLC &nbsp;|&nbsp; Equal Housing Lender &nbsp;|&nbsp; NMLS #1838984<br />
            Mortgage services subject to state licensing requirements. This website does not constitute financial or tax advice.
          </p>
        </div>
      </footer>
    </>
  );
}
