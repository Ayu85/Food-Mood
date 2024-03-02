const Full_Menu_Shimmer = () => {
    return (
        <div>
            <Menu_Card />
            <Menu_Card />
            <Menu_Card />
            <Menu_Card />
            <Menu_Card />
            <Menu_Card />
            <Menu_Card />
            <Menu_Card />
            <Menu_Card />
            <Menu_Card />
            <Menu_Card />
            <Menu_Card />
            <Menu_Card />
            <Menu_Card />
        </div>
    )
}
const Menu_Card = () => {
    return <div className="flex  lg:min-w-[900px] md:min-w-[700px] min-w-[450px] mt-5 items-center gap-56 justify-between border-b border-b-slate-300 py-2">
        <div className="flex flex-col gap-2 animate-[pulse_0.5s_infinite]">
            <h1 className="w-10 h-10 bg-slate-300 border-slate-400 border"></h1>
            <h1 className="text-md font-bold w-44 h-5 bg-slate-300 border-slate-400 border"></h1>
            <h1 className="w-24 h-4 bg-slate-300 border-slate-400 border"></h1>
            <h1 className="w-54 h-2 bg-slate-300 border-slate-400  border line-clamp-2 font-light text-sm pt-2 lg:line-clamp-none md:line-clamp-none"></h1>
        </div>
        <div>
            <h1>
                <h1 className="w-32 h-32 hidden md:block lg:block  bg-slate-300 border border-slate-400 animate-[pulse_0.5s_infinite]"></h1>
            </h1>
        </div>
    </div>
}
export default Full_Menu_Shimmer
