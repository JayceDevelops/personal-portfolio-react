import Nav from "../components/Nav"
import Socials from "../components/Socials"

import ResumeMaker from "../assets/ResumeMaker.png"
import GetItDone from "../assets/GetItDone.png"
import PersonalLibrary from "../assets/PersonalLibrary.png"

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

            <Socials/>
        </div>
    );
}
