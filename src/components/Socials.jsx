import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

export default function Socials() {
    return (
        <div className="fixed bottom-4 left-4 flex flex-col items-center gap-3 sm:bottom-5 sm:left-8 sm:gap-5">
            <a href="https://linkedin.com/in/jayceiezzi" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
            <a href="https://github.com/jaycedevelops" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
        </div>
    );
}
