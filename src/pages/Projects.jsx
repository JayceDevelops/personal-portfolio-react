import Nav from "../components/Nav"
import Socials from "../components/Socials"
import Project from "../components/Project"
import LeftArrow from "../assets/LeftArrow.svg"
import RightArrow from "../assets/RightArrow.svg"

export default function Projects() {
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
