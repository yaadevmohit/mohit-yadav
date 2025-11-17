import {motion} from 'framer-motion'
import { useState } from 'react';

const NavBar = () => {
  const [active, setActive] = useState("mohit");
  const links = ["mohit", "projects", "social", "resume"];
  return (
    // create a navbar with about, projects, contact, social, resume
    <>
    <nav className="w-full">
      <ul className='flex md:space-x-6 justify-center p-1 px-2 w-fit m-auto relative border-double border-4 border-[#003566]'>
      {links.map((link) => (
        <li
          key={link}
          onClick={() => setActive(link)}
          className="relative px-4 py-2 navBarLinks cursor-pointer"
        >
          {active === link && (
            <motion.span
              layoutId="active-bg"
              className="absolute inset-0 border-2 border-[#001d3d] bg-[#ffd60a] text-amber-50"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            ></motion.span>
          )}
          <a className={`relative z-10 ${active === link && `text-[#003566]`}`}>{link}</a>
        </li>
      ))}
      </ul>
    </nav>
    </>
  )
}

export default NavBar