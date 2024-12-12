
import "./globals.css";
import ProviderWrapper from "./store/providerWrap";
import "./style.css"



export const metadata = {
  title: "Ella",
  description: "Clothing Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <ProviderWrapper>
        {children}
        </ProviderWrapper>
      </body>
    </html>
  );
}
