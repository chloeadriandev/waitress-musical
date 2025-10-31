import "./globals.scss";
import styles from "./layout.module.scss";
import localFont from "next/font/local";
import { Archivo_Narrow } from "next/font/google";
import type { Metadata } from "next";
 
const archivoNarrow = Archivo_Narrow();
 
const canter = localFont({
  src: "../public/fonts/canter.otf"
})

export const metadata: Metadata = {
  title: "Waitress the Musical - UK 10th anniversary tour",
  description: "Every day is the same for Jenna, waitress and expert pie baker at Joe's Pie Diner - that is, until she finds out that she's expecting her sleazy husband's baby. And when her usual gynecologist is replaced by the cute but awkward Dr. Pomatter, things get even more complicated! Thankfully, Jenna can count on her workmates Becky and Dawn to help her overcome the challenges she faces. Who knows, perhaps laughter, love, friendship and a little bit of pie can provide them all the perfect recipe for happiness?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={canter.className + " " + archivoNarrow.className}>
      <body className={styles.body}>
        {children}
      </body>
    </html>
  );
}
