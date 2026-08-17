import { useLocation } from "react-router";
import Page from "./Page";

export default function Nav() {
    const { pathname } = useLocation();
    console.log(pathname);

    return (
        <div className="flex justify-between px-8 py-5">
            <h1 className="font-body text-xl font-bold text-white">Jayce Develops</h1>
            <div className="flex flex-row items-center gap-5 font-body text-text-muted text-l font-regular hover: cursor-pointer">
                <Page text={"Home"} to={"/"} active={pathname === "/"}/>
                <Page text={"Projects"} to={"/Projects"} active={pathname === "/Projects"}/>
                <Page text={"Contact"} to={"/Contact"} active={pathname === "/Contact"}/>
            </div>
        </div>
    );
}