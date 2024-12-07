import { useState, useEffect } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export default function NavbarHomePage() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scroll down - hide navbar
        setIsVisible(true);
      } else {
        // Scroll up - show navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className="">
      <nav
        className={`bg-slate-50 backdrop-blur-3xl border-gray-200  z-50 dark:border-gray-600 dark:bg-gray-900 fixed w-full transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-wrap w-full h-[60px] justify-between items-center mx-auto max-w-screen-xl">
          <a
            href="/"
            className="flex items-center space-x-3 text-2xl font-medium text-emerald-700 rtl:space-x-reverse"
          >
            សកលវិទ្យាល័យ
          </a>

          <div
            id="mega-menu-full"
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  className="block text-[18px] py-2 px-3 mt-2 text-slate-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  ទំព័រដើម
                </a>
              </li>
              <li>
                <a
                  href="/university"
                  className="block text-[18px] py-2 px-3 mt-2 text-slate-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  សកលវិទ្យាល័យ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-[18px] py-2 px-3 mt-2 text-slate-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  អាហារូបករណ៍
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-[18px] py-2 px-3 mt-2 text-slate-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  ព័ត៌មាន
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-[18px] py-2 px-3  mt-2 text-slate-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  ការងារ
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block text-[18px] py-2 px-3  mt-2 text-slate-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  អំពីយើង
                </a>
              </li>
              <div className=" w-[120px] flex justify-end items-center space-x-4">
                  <div className="  rounded-full border border-slate-300">
                  <FaRegBell className="text-xl mr-2 ml-2 mt-2 mb-2" />
                  </div>
                  <div className="  rounded-full border border-slate-300">
                  <FaRegUser className="text-xl mr-2 ml-2 mt-2 mb-2" />
                  </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
