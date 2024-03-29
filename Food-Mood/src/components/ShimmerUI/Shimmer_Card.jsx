const Shimmer_Card = () => {
    return (
        <div className="flex flex-col gap-2 w-72 h-64 px-2 py-2 animate-[pulse_0.5s_infinite] ">
            <div className="w-72 rounded-2xl h-44 bg-slate-300 border border-slate-500"></div>
            <div className="w-52 h-3 rounded-2xl bg-slate-200 border border-slate-500"></div>
            <div className="w-44 h-1 rounded-2xl bg-slate-200 border border-slate-500"></div>
            <div className="w-32 h-2 rounded-2xl bg-slate-200 border border-slate-500"></div>
        </div>
    )
}

export default Shimmer_Card
