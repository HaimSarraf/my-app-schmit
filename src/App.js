import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Pizza from "./components/Pizza";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center my-10 gap-y-24">
      <Header />
      <Pizza />
      <Footer />
    </div>
  );
}
