import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Compass, PenTool, LogIn } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  async function handleLogout() {
    await logout();
  }
  return (
    <header className="w-full flex items-center justify-between px-6 md:px-12 py-6 border-b border-borderClr/20 backdrop-blur-xs relative z-50">
        {/* Title logo branding with Cinzel Typography */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="font-decorative text-[14px] md:text-md text-[#b98a4a] transition-transform duration-700 select-none">
            ✦
          </span>
          <span className="font-decorative text-[13px] md:text-sm text-primaryText tracking-[0.25em] uppercase transition-all duration-700 group-hover:text-primaryText font-medium">
            Memory Palace
          </span>
        </Link>

        {/* Global Toolbar */}
        <nav className="flex items-center gap-4 md:gap-8">
          <Link
            to="/memorywall"
            className="flex items-center gap-1.5 font-cinzel text-[10px] md:text-[11px] text-stone-350 hover:text-primaryText uppercase tracking-widest transition-colors cursor-pointer"
          >
            <Compass className="w-4 h-4 opacity-70" />
            <span>Palace Grounds</span>
          </Link>

          {user ? (
            <>
              {/* Write New Memory Link */}
              <Link
                to="/write"
                className="flex items-center gap-1.5 font-cinzel text-[10px] md:text-[11px] text-primaryText/90 hover:text-primaryText uppercase tracking-widest transition-colors cursor-pointer"
              >
                <PenTool className="w-4 h-4 text-[#b98a4a] stroke-[1.5]" />
                <span className="hidden sm:inline">Write a memory</span>
              </Link>

              {/* Logged in indicator & Logout button */}
              <div className="flex items-center gap-3 border-l border-borderClr/30 pl-4">
                <span className="hidden lg:inline font-mono text-[9px] text-[#b98a4a]/60 uppercase tracking-widest max-w-30 truncate" title={user?.email}>
                  {user?.email?.split('@')[0]}
                </span>
                
                {/* Visual Avatar representative circle matching the mockup icon */}
                <button
                  onClick={handleLogout}
                  className="w-7 h-7 rounded-full border border-borderClr/30 hover:border-borderClr/70 bg-cardBg/50 hover:bg-cardBg flex items-center justify-center transition-all cursor-pointer relative group"
                  title="Depart current session"
                >
                  <span className="font-mono text-[9px] text-primaryText font-semibold uppercase">
                    {(user?.email?.[0] || 'W').toUpperCase()}
                  </span>
                  {/* Subtle Logout Hover Tooltip or floating indicator */}
                  <div className="absolute top-[125%] right-0 bg-stone-950 border border-borderClr/20 px-2 py-1 rounded text-[8px] font-cinzel text-stone-400 uppercase tracking-widest scale-0 group-hover:scale-100 transition-transform origin-top-right shadow-xl">
                    Depart Palace
                  </div>
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-1.5 font-cinzel text-[10px] md:text-[11px] text-primaryText hover:text-primaryText uppercase tracking-widest transition-colors cursor-pointer border border-borderClr/30 px-3 py-1 bg-cardBg rounded"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Enter Registry</span>
              </Link>
            </>
          )}
        </nav>
      </header>
  );
}
