interface Props  {
    range: number
    init: number
    jump: number
}

export default function ProgressBar() {
    return(
        <div style={{ gridTemplateColumns: `repeat(${maxStage}, minmax(0, 1fr))`}} className={`grid w-full h-3 bg-slate-200 rounded-full`}>
            <div style={{gridColumn: `span ${stage}`}} className={`flex items-center justify-end overflow-visible h-3 rounded-full bg-linear-to-r from-amber-400 to-amber-500 transition-all`}>
                <span className="w-5 h-5 rounded-full bg-slate-50 border border-slate-400"></span>
            </div>
        </div>
    )
}