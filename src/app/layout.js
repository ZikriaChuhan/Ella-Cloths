import "./globals.css";
import "./style.css"

export const metadata = {
  title: "Ella",
  description: "Clothing Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
