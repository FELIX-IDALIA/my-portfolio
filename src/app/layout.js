import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/argon-design-system-react.css";
import "../../styles/styles.css";
import "../../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../../styles/vendor/nucleo/css/nucleo.css";

export const metadata = {
  title: "Odhiambo George",
  description: "Odhiambo George Samuel Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
