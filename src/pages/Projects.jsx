import Nav from "../components/Nav"
import Socials from "../components/Socials"

import ResumeMaker from "../assets/ResumeMaker.png"
import GetItDone from "../assets/GetItDone.png"
import PersonalLibrary from "../assets/PersonalLibrary.png"
import Project from "../components/Project"
import LeftArrow from "../assets/LeftArrow.svg"
import RightArrow from "../assets/RightArrow.svg"

export default function Projects() {


    const projects = [
        {
            name: "Resume Maker",
            description: "A guided, multi-step resume builder. Fill in your contact info, education, and work experience, then preview and download a polished, formatted resume as a PDF — all in your browser, no sign-up required.",
            github: "https://github.com/JayceDevelops/Resume-Maker",
            website: "https://resume-maker-orcin-one.vercel.app/",
            tools: "React, Tailwind CSS, Javascript, html2canvas-pro, jsPDF",
            image: ResumeMaker
        },
        {
            name: "Get It Done",
            description: "GetItDone is a sleek, and dark-themed task manager. It features custom named lists alongside smart filters—Today, Upcoming, Anytime, and Someday—to organize your workflow. Built for speed, it pairs rapid inline task capture with a crisp, high-contrast UI designed to maximize daily productivity.",
            github: "https://github.com/JayceDevelops/Get-It-Done",
            website: "",
            tools: "HTML5, CSS3, JavaScript (Vanilla), Web Storage API",
            image: GetItDone
        },
        {
            name: "Peronal Library",
            description: "📚 A smart library dashboard built with HTML5, CSS Grid, and vanilla JavaScript. Features dynamic book tracking (title, genre, read status) with instant query filtering, title search, and persistent browser localStorage to save data across sessions.",
            github: "https://github.com/JayceDevelops/Personal-Library",
            website: "",
            tools: "HTML5, CSS3, JavaScript (Vanilla), Web Storage API",
            image: PersonalLibrary
        },

    ]
    return (
        <div className="flex flex-col bg-background min-h-dvh">
            <Nav/>

            <div className="flex flex-1 flex-col items-center justify-center min-h-full gap-5">
                <div className="flex flex-row gap-5">
                    <Project/>
                    <Project/>
                    <Project/>
                    
                </div>
                <div className="flex items-center justify-center min-w-full gap-5">
                    <button className="bg-white rounded-full p-0.5 cursor-pointer">
                        <img src={LeftArrow} alt="Left Arrow" className="w-10"/>
                    </button>
                    <h1 className="font-body text-white text-3xl font-bold">1</h1>
                    <button className="bg-white rounded-full p-0.5 cursor-pointer">
                        <img src={RightArrow} alt="Right Arrow" className="w-10"/>
                    </button>
                </div>
            </div>
            <Socials/>
        </div>
    );
}
