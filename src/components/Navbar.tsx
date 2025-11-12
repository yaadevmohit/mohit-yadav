const NavBar = () => {
  return (
    // create a navbar with about, projects, contact, social, resume
    <nav>
      <ul className='flex space-x-9 justify-center p-3'>
        <li className='navbarLinks'><a href="">About</a></li>
        <li className='navbarLinks'><a href="" className=''>Projects</a></li>
        <li className='navbarLinks'><a href="">Social</a></li>
        <li className='navbarLinks'><a href="">Resume</a></li>
      </ul>
    </nav>
  )
}

export default NavBar