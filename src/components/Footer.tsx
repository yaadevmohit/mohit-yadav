const Footer = () => {
    return (
        // make footer alwats at the bottom
        <footer className="w-full text-center text-lg text-[#003566] nunitoRegular flex flex-col">
            <ul className="flex mx-auto space-x-3">
              {/* <li className="my-0 underline hover:scale-110"><a href="">linkedIn</a></li> */}

              <li className="my-0 underline hover:scale-110"><a href="https://github.com/yaadevmohit" target="blank">github</a></li>
              <li className="my-0 underline hover:scale-110"><a href="mailto:mohityadav530@gmail.com">email me</a></li>
            </ul>
            © {new Date().getFullYear()} Mohit Yadav. All rights reserved.
        </footer>
    );
}

export default Footer