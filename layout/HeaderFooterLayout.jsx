import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HeaderFooterLayout({ children }) {
  return (
    <main className="ContentContainer">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
