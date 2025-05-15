import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACE CMS",
  description: "ACE CMS",
  keywords: "cms, CMS, ACE CMS, ace cms, ACECMS, acecms, Calibration Management System, calibration tracking software, calibration scheduling system, instrument calibration management, equipment calibration tracking, digital calibration system, cloud-based calibration software, calibration certificate management, automated calibration alerts, calibration audit trail, asset calibration history, multi-device calibration tracking, traceable calibration records, preventive maintenance and calibration, paperless calibration process, best calibration management system, buy calibration software, calibration CMS for manufacturing, calibration tracking software pricing, request a demo calibration system, calibration software with reporting tools, ISO 17025 compliant calibration software, GAMP5 validated calibration system, pharma calibration CMS, calibration system for medical devices, aerospace calibration management software, lab instrument calibration CMS, food industry equipment calibration system, automotive calibration tracking tool, how to manage equipment calibration schedules, what is a calibration management system, benefits of using CMS for instrument calibration, cloud-based calibration vs on-premise systems, best practices in calibration management, software for managing ISO-compliant calibration, calibration CMS software in USA, calibration management system for small businesses, enterprise calibration management tools, SaaS calibration software providers, CMS software for small business,calibration management system with Excel import, seamless Excel data migration for calibration, audit-ready calibration software, calibration system for ISO audits, internal calibration software with auto-fill, parameter-based internal calibration tool, auto-filled calibration results software, MSA 4th edition compliant software, MSA automation tool for quality management, calibration system with QR code generation, barcode stickers for instrument tracking, QR/barcode calibration management system, Android calibration tracking app, mobile calibration software, access calibration records on the go, live calibration status dashboard, calibration overview in real-time, instrument status monitoring software, automated calibration report generation, calibration certificate generator, due list reports for calibration tracking, all-in-one calibration reporting tool, cloud-based calibration management, calibration tool tracking with barcode, real-time calibration notifications, compliant calibration documentation system, paperless calibration records, easy audit-ready calibration data."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
      <link rel="icon" href="/AceLogo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    
  );
}
