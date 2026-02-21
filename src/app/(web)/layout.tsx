import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { absoluteUrl, ogUrl } from "@/lib/utils";
import "@/styles/index.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  title: {
    default: "Shaishav Shah - Solving Complex Problems.",
    template: "%s | Shaishav Shah",
  },
  description:
    "A Portfolio Website and Blog by Shaishav Shah.",
  keywords: [
    "Shaishav Shah",
    "software developer",
    "portfolio",
    "blog",
    "problem solver",
    "data science",
    "full stack developer",
  ],
  authors: [{ name: "Shaishav Shah" }],
  creator: "Shaishav Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Shaishav Shah",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative pb-56 md:pb-36 min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="relative max-w-6xl mx-auto px-5 h-full pt-8 md:py-24">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
