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
            description: "Four-step form mockup created using react and typescript. Effecient state management and input error handling were implemented. Form design is fully responsive with mobile-first approach",
            skills: ["react", "typescript", "html", "css"],
            github: "https://github.com/yaadevmohit/modern-form",
            live: "https://multi-step-form-mohit.vercel.app/"
        }
]