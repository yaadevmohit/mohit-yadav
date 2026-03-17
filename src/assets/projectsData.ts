import formImg from "./modernForm.png"

export type projectDetails = {
    name: string;
    img: string;
    description: string;
    skills: string[];
    github: string;
    live: string;
}

export const skillsClassList = ["skillTagOne", "skillTagTwo", "skillTagThree", "skillTagFour"]

export default 
    [
        {
            name: "Modern Form",
            img: formImg,
            description: "A multi-step form built with React and TypeScript. Includes input validation, error handling, and a fully responsive mobile-first layout.",
            skills: ["react", "typescript", "html", "css"],
            github: "https://github.com/yaadevmohit/modern-form",
            live: "https://multi-step-form-mohit.vercel.app/"
        }
]