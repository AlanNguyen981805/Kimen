import { Footer, Header } from "@/core/layouts";
import { notFound } from "next/navigation";

// Can be imported from a shared config
const locales = ["en", "vi"];

export default function LocaleLayout({ children, params }: any) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(params.locale as any)) notFound();

  return (
    <html lang={params.locale}>
      <body>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
