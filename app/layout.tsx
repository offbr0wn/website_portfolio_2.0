import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { cn } from "./utils/cn";
import Footer from "./components/footer";
import { Providers } from "./providers";
import LocalFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: { default: "Shashank Ravikumar", template: "%s | Shashank Ravikumar" },
  description: "Developer, Designer, and creator",

  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  twitter: {
    title: "Shashank Ravikumar",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-cal",
  // weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth",
        [inter.variable, calSans.variable].join(" ")
      )}
    >
      <body className="bg-gradient-to-tl from-black via-zinc-400/20 to-black">
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col min-h-screen">
            <Providers>
              <main className="flex-auto   flex-col  dark text-foreground px-6 py-12 md:px-12 md:py-20">
                {children}
              </main>
            </Providers>
            <Footer />
          </div>
        </Suspense>
      </body>
    </html>
  );
}
