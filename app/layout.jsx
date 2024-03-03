import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SuppotsUEB",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/united/bootstrap.min.css"
        />
      </head>
      <body className={inter.className}>
        <div>{children}</div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
        ></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
      </body>
    </html>
  );
}
