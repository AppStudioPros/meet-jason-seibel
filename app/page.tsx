import { ExternalLink, Phone, Mail, Shield, Award, BookOpen, MapPin, Globe } from "lucide-react";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jason Seibel",
  jobTitle: "Mortgage Strategist & Enrolled Agent",
  description: "Licensed mortgage broker and Enrolled Agent with 20+ years of experience in home lending and tax strategy. Founder of Innovative Home Loan and Sisu Tax & Consulting.",
  url: "https://meetjasonseibel.com",
  sameAs: [
    "https://innovativehomeloan.com",
    "https://sisutax.com",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Portland",
    addressRegion: "OR",
    addressCountry: "US",
  },
  telephone: "+15037203730",
  email: "jason@innovativehomeloan.com",
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "NMLS License #171895",
      credentialCategory: "Mortgage Broker License",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Enrolled Agent",
      credentialCategory: "IRS Authorization",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "MBA — Technology Management",
      credentialCategory: "Graduate Degree",
    },
  ],
  knowsAbout: ["Mortgage Lending", "Tax Strategy", "Forensic Accounting", "Real Estate Finance", "IRS Representation"],
  knowsLanguage: ["English", "Russian"],
  award: "Five Star Professional Award",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 20,
    description: "Years of experience",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Jason Seibel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jason Seibel is a licensed mortgage broker (NMLS #171895) and Enrolled Agent based in the Portland, Oregon area. He is the founder of Innovative Home Loan, a licensed mortgage brokerage, and Sisu Tax & Consulting, a tax advisory and accounting practice. He holds an MBA in Technology Management and has 20+ years of experience in home lending and financial services.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jason Seibel a licensed mortgage broker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jason Seibel holds NMLS license #171895 and is licensed to originate mortgages in 8 states. His license can be verified at the NMLS Consumer Access website at nmlsconsumeraccess.org.",
      },
    },
    {
      "@type": "Question",
      name: "What is Jason Seibel's NMLS number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jason Seibel's individual NMLS number is 171895. This license is publicly verifiable through the NMLS Consumer Access portal.",
      },
    },
    {
      "@type": "Question",
      name: "What is an Enrolled Agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Enrolled Agent (EA) is a federally authorized tax practitioner who has earned the right to represent taxpayers before the Internal Revenue Service. Jason Seibel holds this credential through Sisu Tax & Consulting.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Jason Seibel located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jason Seibel is based in the Portland, Oregon area and serves clients in Oregon, Florida, and additional states. He works with clients nationwide.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── NAV ──────────────────────────────────────────────── */}
      <header style={{ background: "var(--navy)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "16px 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
            Jason Seibel
          </span>
        </div>
      </header>

      <main>
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy2) 60%, #0a3060 100%)", color: "#fff", padding: "80px 0 72px", textAlign: "center" }}>
          <div className="container">
            <div className="tag" style={{ background: "rgba(0,153,214,0.2)", color: "var(--blue-bright)" }}>
              Portland, Oregon
            </div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.02em" }}>
              Jason Seibel
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.75)", marginBottom: 12, fontWeight: 500 }}>
              Mortgage Strategist &amp; Tax Advisor
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Licensed mortgage broker with 20+ years in home lending. Enrolled Agent authorized to practice before the IRS. Founder of two financial services practices in the Portland, OR area.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://innovativehomeloan.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Innovative Home Loan <ExternalLink size={15} />
              </a>
              <a href="https://sisutax.com" target="_blank" rel="noopener noreferrer" className="btn-gold">
                Sisu Tax &amp; Consulting <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* ── WHO IS JASON SEIBEL ───────────────────────────── */}
        <section className="section" style={{ background: "#fff", textAlign: "center" }}>
          <div className="container">
            <div className="tag" style={{ background: "var(--blue-light)", color: "var(--blue)" }}>About</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, marginBottom: 24, color: "var(--navy)" }}>
              Who is Jason Seibel?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.85, maxWidth: 680, margin: "0 auto 20px" }}>
              Jason Seibel is a licensed mortgage broker and federal tax practitioner based in the Portland, Oregon area. He holds NMLS license #171895 and is credentialed as an Enrolled Agent, giving him the federal authority to represent taxpayers before the IRS.
            </p>
            <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.85, maxWidth: 680, margin: "0 auto" }}>
              Over more than two decades, he has worked with homebuyers, real estate professionals, small business owners, and self-employed clients across Oregon, Florida, and additional states. He holds an MBA in Technology Management and brings forensic accounting expertise to both his mortgage and tax practices.
            </p>
          </div>
        </section>

        {/* ── CREDENTIALS ──────────────────────────────────────── */}
        <section className="section" style={{ background: "var(--gray-bg)", textAlign: "center" }}>
          <div className="container">
            <div className="tag" style={{ background: "var(--gold-light)", color: "var(--gold)" }}>Credentials &amp; Licenses</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, marginBottom: 48, color: "var(--navy)" }}>
              Background and qualifications
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { icon: Shield, label: "NMLS #171895", sub: "Individual mortgage broker license — verifiable at nmlsconsumeraccess.org" },
                { icon: Award, label: "Enrolled Agent", sub: "Federally authorized to represent taxpayers before the IRS" },
                { icon: BookOpen, label: "MBA", sub: "Graduate degree in Technology Management" },
                { icon: Award, label: "Five Star Professional", sub: "Multi-year award winner in the Portland market" },
                { icon: Globe, label: "Licensed in 8 States", sub: "Mortgage origination license across multiple U.S. states" },
                { icon: Shield, label: "20+ Years Experience", sub: "Home lending and financial services since the early 2000s" },
                { icon: Globe, label: "English &amp; Russian", sub: "Bilingual — serves English and Russian-speaking clients" },
                { icon: BookOpen, label: "Forensic Accounting", sub: "Financial investigation and litigation support expertise" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="card" style={{ textAlign: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <Icon size={20} color="var(--blue)" />
                  </div>
                  <p style={{ fontWeight: 700, color: "var(--navy)", marginBottom: 8, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: label }} />
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: sub }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INNOVATIVE HOME LOAN ─────────────────────────────── */}
        <section className="section" style={{ background: "#fff", textAlign: "center" }}>
          <div className="container">
            <div className="tag" style={{ background: "var(--blue-light)", color: "var(--blue)" }}>Innovative Home Loan</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, marginBottom: 20, color: "var(--navy)" }}>
              Mortgage lending
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.85, maxWidth: 640, margin: "0 auto 32px" }}>
              Innovative Home Loan is Jason's licensed mortgage brokerage. He works with homebuyers, investors, and real estate professionals to find loan structures that fit their situation, including cases that other lenders have turned down. He offers 24-hour pre-approvals, no prepayment fees, and personal attention from start to close.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 36 }}>
              {["Conventional Loans", "FHA & VA Loans", "Jumbo Loans", "Investment Properties", "Self-Employed Borrowers", "Complex Scenarios"].map((item) => (
                <span key={item} style={{ background: "var(--blue-light)", color: "var(--blue)", padding: "6px 16px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600 }}>{item}</span>
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
          </div>
        </section>

        {/* ── SISU TAX ─────────────────────────────────────────── */}
        <section className="section" style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy2) 100%)", textAlign: "center" }}>
          <div className="container">
            <div className="tag" style={{ background: "rgba(184,146,44,0.2)", color: "#e8b84b" }}>Sisu Tax &amp; Consulting</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, marginBottom: 20, color: "#fff" }}>
              Tax strategy and advisory
            </h2>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 640, margin: "0 auto 32px" }}>
              Sisu Tax & Consulting handles tax planning, IRS representation, bookkeeping, and business advisory for individuals, business owners, and professional practices across Oregon, Florida, and beyond. As an Enrolled Agent, Jason has the federal authority to represent clients directly before the IRS.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 36 }}>
              {["Tax Planning", "Tax Preparation", "IRS Representation", "Bookkeeping", "Forensic Accounting", "Fractional CFO"].map((item) => (
                <span key={item} style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", padding: "6px 16px", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600 }}>{item}</span>
              ))}
            </div>
            <a href="https://sisutax.com" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Visit Sisu Tax &amp; Consulting <ExternalLink size={15} />
            </a>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="section" style={{ background: "var(--gray-bg)", textAlign: "center" }}>
          <div className="container">
            <div className="tag" style={{ background: "var(--blue-light)", color: "var(--blue)" }}>Frequently Asked</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, marginBottom: 48, color: "var(--navy)" }}>
              Common questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 700, margin: "0 auto", textAlign: "left" }}>
              {[
                { q: "Is Jason Seibel a licensed mortgage broker?", a: "Yes. Jason holds NMLS license #171895 and is licensed to originate mortgages in 8 states. This license is publicly verifiable at nmlsconsumeraccess.org." },
                { q: "What states does Jason Seibel originate mortgages in?", a: "Jason is licensed in multiple states including Oregon and Florida. Contact him directly for current state availability, as licensing can change." },
                { q: "What is an Enrolled Agent and what does it mean for clients?", a: "An Enrolled Agent is a federally authorized tax practitioner with the right to represent taxpayers before the IRS in all matters, including audits, collections, and appeals. It is a federal credential, distinct from a state-issued CPA license." },
                { q: "Has Jason Seibel won any professional awards?", a: "Yes. Jason is a Five Star Professional award winner, a recognition given to mortgage professionals in the Portland market based on client satisfaction and professional qualifications." },
                { q: "Does Jason Seibel serve Russian-speaking clients?", a: "Yes. Jason is bilingual in English and Russian and works with Russian-speaking clients in both his mortgage and tax practices." },
              ].map(({ q, a }) => (
                <div key={q} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 10, padding: "24px 28px" }}>
                  <p style={{ fontWeight: 700, color: "var(--navy)", marginBottom: 10, fontSize: "1rem" }}>{q}</p>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", lineHeight: 1.75 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT / VERIFY ─────────────────────────────────── */}
        <section className="section" style={{ background: "#fff", textAlign: "center" }}>
          <div className="container">
            <div className="tag" style={{ background: "var(--gold-light)", color: "var(--gold)" }}>Contact &amp; Verify</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, marginBottom: 16, color: "var(--navy)" }}>
              Get in touch or verify credentials
            </h2>
            <p style={{ color: "var(--text-mid)", marginBottom: 40, maxWidth: 500, margin: "0 auto 40px", lineHeight: 1.75 }}>
              Reach Jason directly or verify his professional licenses through official public registries.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, maxWidth: 720, margin: "0 auto 40px" }}>
              <a href="tel:5037203730" className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "pointer", textDecoration: "none" }}>
                <Phone size={22} color="var(--blue)" />
                <span style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.95rem" }}>(503) 720-3730</span>
                <span style={{ fontSize: "0.82rem", color: "var(--text-light)" }}>Call or text</span>
              </a>
              <a href="mailto:jason@innovativehomeloan.com" className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "pointer", textDecoration: "none" }}>
                <Mail size={22} color="var(--blue)" />
                <span style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.95rem" }}>Email Jason</span>
                <span style={{ fontSize: "0.82rem", color: "var(--text-light)" }}>jason@innovativehomeloan.com</span>
              </a>
              <a href="https://nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/171895" target="_blank" rel="noopener noreferrer" className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "pointer", textDecoration: "none" }}>
                <Shield size={22} color="var(--blue)" />
                <span style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.95rem" }}>Verify NMLS License</span>
                <span style={{ fontSize: "0.82rem", color: "var(--text-light)" }}>NMLS #171895 — official registry</span>
              </a>
              <a href="https://maps.google.com/?q=Portland,OR" target="_blank" rel="noopener noreferrer" className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "pointer", textDecoration: "none" }}>
                <MapPin size={22} color="var(--blue)" />
                <span style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.95rem" }}>Portland, Oregon</span>
                <span style={{ fontSize: "0.82rem", color: "var(--text-light)" }}>Serving clients in OR, FL &amp; more</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer style={{ background: "var(--navy)", color: "rgba(255,255,255,0.55)", padding: "40px 0", textAlign: "center" }}>
        <div className="container">
          <p style={{ fontWeight: 700, color: "#fff", marginBottom: 8, fontSize: "1rem" }}>Jason Seibel</p>
          <p style={{ fontSize: "0.85rem", marginBottom: 16 }}>NMLS #171895 | Enrolled Agent | Portland, Oregon</p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginBottom: 24, fontSize: "0.85rem" }}>
            <a href="https://innovativehomeloan.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue-bright)" }}>Innovative Home Loan</a>
            <a href="https://sisutax.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>Sisu Tax &amp; Consulting</a>
            <a href="https://nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/171895" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.55)" }}>Verify License</a>
          </div>
          <p style={{ fontSize: "0.78rem" }}>
            Innovative Home Loan, LLC | Equal Housing Lender | NMLS #1838984<br />
            Mortgage services subject to state licensing requirements. This website does not constitute financial or tax advice.
          </p>
        </div>
      </footer>
    </>
  );
}
