const Footer = () => {
    return (
        <footer className="w-full text-center text-lg text-[#003566] nunitoRegular flex flex-col lg:relative left-0 bottom-2">
            <ul className="flex mx-auto space-x-3">
              <li className="my-0 underline hover:scale-110"><a href="https://github.com/yaadevmohit" target="_blank">github</a></li>
              <li className="my-0 underline hover:scale-110"><a href="https://www.linkedin.com/in/mohityaadev/">linkedIn</a></li>
            </ul>
            © {new Date().getFullYear()} Mohit Yadav. All rights reserved.
        </footer>
    );
}

export default Footer