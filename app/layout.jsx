import "../styles/globals.css"
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Globe Game",
  description: "Nasa Space App Challenge Hackaton Globe Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
