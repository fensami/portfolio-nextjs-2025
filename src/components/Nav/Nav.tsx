"use client";
import { useState, useRef, useEffect } from "react";
import {
  faBlog,
  faHouseChimney,
  faUserTie,
  faCalendarCheck,
  faIdBadge,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/authService";
import { usePathname, useRouter } from "next/navigation";
// import { useUser } from "@/context/UserContext";
// import { getCurrentUser } from "@/services/authService";
export const protectedRoutes = [
  "/login",
  "/create-shop",
  "/admin",
  "/admin/:page",
  "/user",
  "/user/:page",
];
const Nav = () => {
  const userData = useUser();
  const role = userData.user?.role;

  const dashboardPath =
    role === "ADMIN"
      ? "/admin"
      : role === "USER"
      ? "/user/dashboard"
      : "/dashboard";

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", icon: faHouseChimney, label: "Home" },
    { href: "/about", icon: faUserTie, label: "About" },
    { href: "/allProject", icon: faCalendarCheck, label: "Works" },
    { href: "/blog", icon: faBlog, label: "Blog" },
    { href: "/contact", icon: faIdBadge, label: "Contact" },
  ];

  return (
    <header className="pt-6 container mx-auto px-5 xl:px-0">
      <div className=" p-[10px] bg-white header-wrapper-content rounded-md">
        <div className="flex items-center justify-between ">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-xl md:text-2xl text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            <h2>Asad</h2>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex items-center gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="">
                    <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side - Resume & Mobile Menu Button */}
          <div className="lg:flex gap-2 items-center hidden">
            {/* Resume Button */}
            {/* <Link
              href="https://drive.google.com/file/d/1AD_13E_ayPpLe57V0-jgW8FL8bMDulnj/view"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-btn nav-resume"
            >
              Resume
            </Link> */}

            {role ? (
              <Link href={dashboardPath} className="portfolio-btn">
                Dashboard
              </Link>
            ) : (
              <Link className="portfolio-btn" href="/login">
                Login
              </Link>
            )}

            {user ? (
              <button
                className="portfolio-btn cursor-pointer"
                onClick={handleLogOut}
              >
                {" "}
                Logout
              </button>
            ) : null}

            {/* Mobile Menu Button */}
          </div>
          <button
            onClick={handleToggle}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
          onClick={handleClose}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h3 className="text-xl font-bold text-gray-800">Menu</h3>
            <button
              onClick={handleClose}
              className="p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors duration-300"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleClose}
                    className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-lg py-2"
                  >
                    <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}

          <div className="p-6 border-t flex gap-2">
            {role ? (
              <Link href={dashboardPath} className="portfolio-btn">
                Dashboard
              </Link>
            ) : (
              <Link className="portfolio-btn" href="/login">
                Login
              </Link>
            )}

            {user ? (
              <button
                className="portfolio-btn cursor-pointer"
                onClick={handleLogOut}
              >
                {" "}
                Logout
              </button>
            ) : null}
          </div>
          <Link
            href="https://drive.google.com/file/d/1AD_13E_ayPpLe57V0-jgW8FL8bMDulnj/view"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 "
          >
            Download Resume
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
