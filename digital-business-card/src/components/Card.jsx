import "../App.css";
import Info from "./Info";
import Footer from "./Footer";
import Header from "./Header";

export default function Card() {
  return (
    <main className="card">
      <Header />
      <Info />
      <Footer />
    </main>
  );
}
