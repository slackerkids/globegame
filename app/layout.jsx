import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cataclysm",
  description: "Nasa Space App Challenge Hackaton Globe Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
