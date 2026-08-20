export default function Project({ name, description, github, website, tools, image }) {
    return (
        <div className="group flex flex-col sm:flex-row h-full w-full rounded-xl border border-white/15 bg-white/5 overflow-hidden shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-xl">
            <div className="h-28 w-full sm:h-full sm:w-2/5 shrink-0 overflow-hidden bg-black/20 flex items-center justify-center">
                {image ? (
                    <img src={image} alt={name} className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
                ) : (
                    <span className="text-text-muted font-body text-xs">No Preview</span>
                )}
            </div>

            <div className="flex flex-1 min-w-0 min-h-0 flex-col gap-1 p-4">
                <h3 className="font-body text-base font-bold text-white truncate">{name}</h3>
                <p className="font-body text-text-muted text-xs flex-1 overflow-hidden line-clamp-4">{description}</p>
                <p className="font-body text-text-muted text-[10px] italic truncate">{tools}</p>

                <div className="flex flex-row gap-2 font-body text-xs">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-3 py-1 text-white transition-colors hover:bg-white/10">
                            GitHub
                        </a>
                    )}
                    {website && (
                        <a href={website} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-3 py-1 text-white transition-colors hover:bg-white/10">
                            Live Site
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
