import {motion} from 'framer-motion'
import { useState } from 'react';

const NavBar = () => {
  const [active, setActive] = useState("home");
  const links = ["mohit", "projects", "social / images", "resume"];
  return (
    // create a navbar with about, projects, contact, social, resume
    <>
    <nav className="h-8 w-full">
      <ul className='flex space-x-9 justify-center p-1 px-2 border rounded-lg w-fit m-auto relative'>
      {links.map((link) => (
        <li
          key={link}
          onClick={() => setActive(link)}
          className="relative px-4 py-2 navBarLinks cursor-pointer"
        >
          {active === link && (
            <motion.span
              layoutId="active-bg"
              className="absolute inset-0 rounded-lg bg-blue-500 text-amber-50"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            ></motion.span>
          )}
          <a className={`relative z-10 ${active === link && `text-white`}`}>{link}</a>
        </li>
      ))}
      </ul>
    </nav>
    </>
  )
}

export default NavBar