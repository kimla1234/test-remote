import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import { Menu, X } from "lucide-react"; // Using lucide-react for icons
import { FaRegBell } from "react-icons/fa";

// Your navigation links
const navLinks = [
  { href: "/", label: "ទំព័រដើម" },
  { href: "/university", label: "គ្រឹស្ថានសិក្សា" },
  { href: "/jobs", label: "ការងារ" },
  { href: "/new", label: "ព័ត៌មាន" },
  { href: "/about-us", label: "អំពីយើង" },
];

export default function NavbarPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu state
  const [userUUID] = useState(""); // Replace with actual state if needed for user data
  const pathname = window.location.pathname; // To check the current page path for styling

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-slate-50">
      <header
        className={`flex items-center justify-between py-4 px-4 md:px-6 lg:px-8 mx-auto w-full fixed top-0 left-0 z-50 bg-white shadow-md transition-all duration-300 ${
          isSticky ? "bg-opacity-90" : "bg-opacity-100"
        }`}
      >
        {/* Logo and Navigation Links */}
        <div className="flex items-center space-x-6 lg:space-x-8">
          {/* Logo */}
          {userUUID === "" ? (
            <Link to="/" className="text-lg lg:text-xl text-green-700">
              សាកលវិទ្យាល័យ
            </Link>
          ) : (
            <div>
              <img
                src="/logo.png"
                alt="Logo"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
          )}

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base lg:text-lg ${
                  pathname === link.href
                    ? "text-green-700 font-bold border-green-700"
                    : "text-gray-800 hover:text-green-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Language Selector and Sign-in */}
        <div className="hidden md:block lg:flex items-center space-x-6">
          {/* Sign in button */}
          <div className="flex space-x-4">
            <div className="w-[120px] flex justify-end items-center space-x-4">
              <div className="rounded-full border border-primary">
                <FaRegBell className="text-xl mr-2 ml-2 mt-2 mb-2" />
              </div>
            </div>
            <Link
              to="/login"
              className="bg-emerald-500 text-white text-base lg:text-lg rounded-xl lg:px-5 lg:py-2 md:px-4 md:py-1 px-5 py-2"
            >
              ចុះឈ្មោះ
            </Link>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`w-full md:hidden fixed  left-0 right-0 mt-14 px-4 py-4 bg-white shadow-md z-50`}
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base ${
                  pathname === link.href
                    ? "text-green-700 font-bold"
                    : "text-gray-800 hover:text-green-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-4 justify-end">
            <div className="w-[120px] flex justify-end items-center space-x-4">
              <div className="rounded-full border border-primary">
                <FaRegBell className="text-xl mr-2 ml-2 mt-2 mb-2" />
              </div>
            </div>
            <Link
              to="/login"
              className="bg-emerald-500 text-white text-base lg:text-lg rounded-xl lg:px-5 lg:py-2 md:px-4 md:py-1 px-5 py-2"
            >
              ចុះឈ្មោះ
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
