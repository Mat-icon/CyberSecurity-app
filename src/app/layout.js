import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CDN",
  description: "|Cyber defense of Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className='flex flex-col h-screen max-h-screen'><Navbar/>
        <div className='overflow-y-auto flex-grow '>{children}</div></div> 
      </body>
    </html>
  );
}
