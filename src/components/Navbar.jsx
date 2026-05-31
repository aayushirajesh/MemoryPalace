import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <nav className=" fixed top-0 left-0 w-full z-50 px-6 py-5 flex items-center justify-between  text-primaryText">
      {/* LEFT */}
      <Link to="/" className="font-cinzelDecorative text-xl tracking-wide hover:opacity-80 transition">
        ✦ MEMORY PALACE
      </Link>

      {/* RIGHT */}
      <div className="flex items-center gap-6 text-sm font-cinzel">
        <Link to="/" className={`hover:text-white transition
         ${
            location.pathname === "/"
              ? "text-white"
              : "text-primaryText/70"
          }
          `}
        >
          Home
        </Link>
        <Link to="/memory-wall" className={` hover:text-white transition
          ${
            location.pathname === "/memory-wall"
              ? "text-white"
              : "text-primaryText/70"
          }
          `}
        >
          Memories
        </Link>
        <Link to="/write-memory" className=" border  border-borderClr px-4 py-2 rounded-full  hover:bg-white/5 transition " >
          Write Memory
        </Link>
        <button onClick={logout} className="  text-primaryText/70  hover:text-white transition " >
          Logout
        </button>
      </div>
    </nav>
  );
}
