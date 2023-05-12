import { SessionProvider } from "@/components/SessionProvider";
import "./globals.css";
import { getServerSession } from "next-auth/next";

import QueryWrapper from "@/components/QueryWrapper";
import { AuthOptions } from "@/pages/api/auth/[...nextauth]";
import Nav from "@/components/Nav";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session: any = await getServerSession(AuthOptions);
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider>
          <QueryWrapper>
            <div
              className={`flex flex-col ${montserrat.variable} h-screen font-montserrat`}
            >
              <Nav />
              <div className="flex-1">{children}</div>
            </div>
          </QueryWrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
