import { useState } from "react";
import emailjs from "@emailjs/browser";
import Nav from "../components/Nav"
import Socials from "../components/Socials"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                { from_name: name, from_email: email, message },
                { publicKey: PUBLIC_KEY }
            );
            setStatus("sent");
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    return (
        <div className="flex flex-col bg-background min-h-dvh">
            <Nav/>

            <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 py-10">
                <div className="w-full max-w-md text-center">
                    <h2 className="font-body text-2xl font-bold text-white">Get In Touch</h2>
                    <p className="font-body text-text-muted text-sm mt-2">
                        Have a question or want to work together? Send me a message.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex w-full max-w-md flex-col gap-4 rounded-xl border border-white/15 bg-white/5 p-6 shadow-lg shadow-black/30"
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="font-body text-xs text-text-muted">Name</label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="rounded-lg border border-white/20 bg-transparent px-3 py-2 font-body text-sm text-white outline-none transition-colors focus:border-white/50"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-body text-xs text-text-muted">Email</label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-lg border border-white/20 bg-transparent px-3 py-2 font-body text-sm text-white outline-none transition-colors focus:border-white/50"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="font-body text-xs text-text-muted">Message</label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="resize-none rounded-lg border border-white/20 bg-transparent px-3 py-2 font-body text-sm text-white outline-none transition-colors focus:border-white/50"
                            placeholder="What's on your mind?"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="mt-2 rounded-full bg-white px-4 py-2 font-body text-sm font-bold text-background transition-opacity hover:opacity-80 disabled:opacity-50"
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "sent" && (
                        <p className="font-body text-xs text-green-400 text-center">Message sent — thanks for reaching out!</p>
                    )}
                    {status === "error" && (
                        <p className="font-body text-xs text-red-400 text-center">Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>

            <Socials/>
        </div>
    );
}
