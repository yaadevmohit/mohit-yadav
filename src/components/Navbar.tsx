import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom';

const links = [
  { label: 'mohit', to: '/' },
  { label: 'projects', to: '/projects' },
];

const Navbar = () => {
  return (
    <nav className="w-full flex md:space-x-6 justify-center pb-2 mx-auto relative font-normal">
      {links.map(({ label, to }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className="relative px-4 py-2 cursor-pointer"
        >
          {({ isActive }) => <>
          {isActive && (
            <motion.span
              layoutId="active-bg"
              className="absolute inset-0 navbar-highlight"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            ></motion.span>
          )}
          <span className={`relative z-10 ${isActive ? 'text-brand-blue' : ''}`}>{label}</span>
          </>}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
