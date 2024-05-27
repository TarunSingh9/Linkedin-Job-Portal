import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-jobs", title: "Post A Job" },
    { path: "/Carrier-graph", title: "Career Graph" },
    { path: "/News-feed", title: "News Feed" },
  ];

  return (
    <div>
      <header className={`max-w-screen-2xl container mx-auto xl:px-24 px-4 ${isSticky ? 'sticky top-0 bg-white shadow-md z-50' : ''}`}>
        <nav className="flex justify-between items-center py-4">
          <a href="/" className='flex items-center gap-2 text-2xl text-black'>
            <img
              className="h-18 w-18 rounded-full object-cover object-center"
              src="https://img.icons8.com/?size=64&id=IuI5Yd3J3qcC&format=png"
              alt="Logo image"
            />
            <span>LinkedinJob</span>
          </a>

          {/* nav items for large devices */}
          <ul className="hidden md:flex gap-12">
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-primary">
                <NavLink
                  to={path}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* signup and login btn */}
          <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
            <Link to="/login" className="py-2 px-5 border rounded">Log in</Link>
            <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">Sign up</Link>
          </div>

          {/* mobile menu */}
          <div className="md:hidden block">
            <button onClick={handleMenuToggler}>
              {isMenuOpen ? <FaXmark className="w-5 h-5 text-primary" /> : <FaBarsStaggered className="w-5 h-5 text-primary" />}
            </button>
          </div>
        </nav>

        {/* navitems for mobile */}
        <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
          <ul>
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-white first:text-white py-1">
                <NavLink
                  to={`contacts/${path}`}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {title}
                </NavLink>
              </li>
            ))}
            <li className="text-white py-1"><Link to="/login">Log in</Link></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
