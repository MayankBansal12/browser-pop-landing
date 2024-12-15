import { Ubuntu } from "next/font/google";
import "./globals.css";

export const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '400',
  variable: "--font-ubuntu"
})

export const metadata = {
  title: "browserpop - manage browser activity with ease",
  description: "browserpop is an browser extension focusing on making it easier to manage browser activity. supporting website blocking with more features like browser tracking, activity analysis coming soon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
