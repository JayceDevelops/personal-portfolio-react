import { Link } from "react-router";

export default function Page({text, to, active}){
    return (
        <Link to={to} className={active ? "bg-white px-3 py-1 rounded-lg text-background" : ''}>
            <h3>{text}</h3>
        </Link>
    );
}