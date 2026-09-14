import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jason Seibel | Mortgage Strategist & Tax Advisor | Portland, OR",
  description: "Jason Seibel is a licensed mortgage broker (NMLS #171895) and Enrolled Agent based in Portland, OR. Founder of Innovative Home Loan and Sisu Tax & Consulting. 20+ years in lending and tax strategy.",
  keywords: "Jason Seibel, Jason Seibel mortgage broker, Jason Seibel Portland, Jason Seibel NMLS 171895, Jason Seibel Innovative Home Loan, Jason Seibel Sisu Tax, Jason Seibel enrolled agent",
  openGraph: {
    title: "Jason Seibel | Mortgage Strategist & Tax Advisor",
    description: "Licensed mortgage broker and Enrolled Agent with 20+ years of experience. Founder of Innovative Home Loan and Sisu Tax & Consulting.",
    url: "https://meetjasonseibel.com",
    siteName: "Meet Jason Seibel",
    type: "profile",
  },
  alternates: {
    canonical: "https://meetjasonseibel.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
