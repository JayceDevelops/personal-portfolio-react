import Nav from "../components/Nav"
import Socials from "../components/Socials"

import ResumeMaker from "../assets/ResumeMaker.png"
import GetItDone from "../assets/GetItDone.png"
import PersonalLibrary from "../assets/PersonalLibrary.png"
import EtchASketch from "../assets/EtchASketch.png"

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
        {
            name: "Etch-A-Sketch",
            description: "A browser-based Etch-a-Sketch canvas built with HTML5, CSS3, and vanilla JavaScript. Features custom grid sizing (rows/columns) and multi-color palette drawing via event-driven DOM manipulation.",
            github: "https://github.com/JayceDevelops/Etch-A-Sketch",
            website: "",
            tools: "HTML5, CSS3, Javascript (Vanilla)",
            image: EtchASketch
        },
    ]
    return (
        <div className="flex flex-col bg-background h-dvh overflow-hidden">
            <Nav/>

            <div className="grid flex-1 min-h-0 grid-cols-1 lg:grid-cols-2 auto-rows-[minmax(12rem,1fr)] lg:grid-rows-2 gap-4 px-4 sm:px-6 lg:pl-24 lg:pr-8 pb-4 lg:pb-5 overflow-y-auto">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
            <div className="flex justify-center py-3 lg:hidden">
                <Socials inline/>
            </div>
            <Socials className="hidden lg:flex"/>
        </div>
    );
}
