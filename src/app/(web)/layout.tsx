import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { absoluteUrl, ogUrl } from "@/lib/utils";
import "@/styles/index.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://outstatic.com"),
  title: {
    default: "Shaishav Shah - Solving Complex Problems.",
    template: "%s | Shaishav Shah - Solving Complex Problems."
  },
  description:
    "A Portfolio Website and Blog by Shaishav Shah.",
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
