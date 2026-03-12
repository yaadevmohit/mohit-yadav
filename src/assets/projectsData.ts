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
            description: "Four steps form done as part of frontend mentor challanges. Uses prop drilling to pass data from all the different states of the form.",
            skills: ["react", "typescript", "HTML", "css"],
            github: "https://github.com/yaadevmohit/modern-form",
            live: "https://multi-step-form-mohit.vercel.app/"
        }
]