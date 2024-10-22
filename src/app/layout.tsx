import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/variables.css"
import "@fontsource/unbounded";
import '@fontsource/aclonica';
import '@fontsource/inter';
import '@fontsource/montserrat';
import "./globals.css";
import GoogleCaptchaWrapper from "./captcha/google-captcha-wrapper";
import { Providers } from "./providers";
import LanguageChanger from "@/components/LanguageChanger/LanguageChanger";
import { I18nProvider } from "@/i18n-context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "InRealArt",
  description: "Salon Automne 2024",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang='en'>
      <GoogleCaptchaWrapper>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Providers>
            <LanguageChanger />
            {children}
          </Providers>
        </body>
      </GoogleCaptchaWrapper>

    </html>
  );
}
