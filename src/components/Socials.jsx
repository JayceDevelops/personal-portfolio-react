import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

export default function Socials() {
    return (
        <div className="fixed bottom-5 left-8 flex flex-col items-center gap-5">
            <a href="https://linkedin.com/in/jayceiezzi" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
            </a>
            <a href="https://github.com/jaycedevelops" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="h-8 w-8" />
            </a>
        </div>
    );
}
