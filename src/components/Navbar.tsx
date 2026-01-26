import {motion} from 'framer-motion'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const {pathname} = useLocation()
  console.log(pathname)
  const [active, setActive] = useState(pathname.length > 1 ? pathname.slice(1) : "mohit");
  const links = ["mohit", "projects", "social"];
  return (
    // create a navbar with about, projects, contact, social, resume
    <>
    <nav className="w-full flex md:space-x-6 justify-center pb-2 mx-auto relative nunitoRegular">
      {links.map((link) => (
        <Link
          key={link}
          to={link === "mohit" ? "/" : `/${link}`}
          onClick={() => setActive(link)}
          className="relative px-4 py-2 navBarLinks cursor-pointer"
        >
          {active === link && (
            <motion.span
              layoutId="active-bg"
              className="absolute inset-0 customYellowBgRing"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            ></motion.span>
          )}
          <span className={`relative z-10 ${active === link && `text-[#003566]`}`}>{link}</span>
        </Link>
      ))}
    </nav>
    </>
  )
}

export default Navbar