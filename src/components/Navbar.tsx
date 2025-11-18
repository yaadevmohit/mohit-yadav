import {motion} from 'framer-motion'
import { useState } from 'react';

const NavBar = () => {
  const [active, setActive] = useState("mohit");
  const links = ["mohit", "projects", "social", "resume"];
  return (
    // create a navbar with about, projects, contact, social, resume
    <>
    <nav className="w-full">
      <ul className='flex md:space-x-6 justify-center pb-2 w-fit mx-auto relative md:border-3 border-double border-[#003566] nunitoRegular'>
      {links.map((link) => (
        <li
          key={link}
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
          <a className={`relative z-10 ${active === link && `text-[#003566]`}`}>{link}</a>
        </li>
      ))}
      </ul>
    </nav>
    </>
  )
}

export default NavBar