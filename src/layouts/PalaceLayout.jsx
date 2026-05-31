import Navbar from "../components/Navbar";

export default function PalaceLayout({ children }) {

  return (
    <div className="relative min-h-screen overflow-hidden bg-mainBg">
      <Navbar />
      <main className="relative z-10 pt-24">
        {children}
      </main>
    </div>
  );
}
