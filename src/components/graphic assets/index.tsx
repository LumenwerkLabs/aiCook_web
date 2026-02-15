export default function GraphicAssets() {
    return (
        <>
            {/* Static organic shapes background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Primary large organic shape - warm tone */}
                <div className="absolute top-1/4 left-1/6 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-gradient-to-br from-orange-400/50 via-amber-400/40 to-yellow-300/30 rounded-[60%_40%_70%_30%] blur-2xl opacity-80" />

                {/* Secondary flowing shape - cool tone */}
                <div className="absolute bottom-1/3 right-1/4 w-32 h-40 sm:w-44 sm:h-52 lg:w-56 lg:h-64 bg-gradient-to-tl from-teal-400/40 via-cyan-400/30 to-green-400/25 rounded-[40%_60%_80%_20%] blur-xl opacity-70" />

                {/* Accent droplet shape - vibrant */}
                <div className="absolute top-1/3 right-1/3 w-24 h-28 sm:w-32 sm:h-36 lg:w-40 lg:h-44 bg-gradient-to-tr from-emerald-400/50 via-teal-400/40 to-cyan-400/30 rounded-[50%_50%_50%_50%_/_70%_30%_70%_30%] blur-lg opacity-75" />

                {/* Small accent bubble - warm */}
                <div className="absolute bottom-1/2 left-2/5 w-18 h-18 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-r from-yellow-400/45 via-orange-400/35 to-amber-400/25 rounded-full blur-lg opacity-60" />

                {/* Flowing ribbon shape - subtle */}
                <div className="absolute top-2/5 left-1/3 w-28 h-14 sm:w-36 sm:h-18 lg:w-44 lg:h-22 bg-gradient-to-r from-indigo-400/30 via-purple-400/25 to-pink-400/15 rounded-[80%_20%_60%_40%] blur-md opacity-50" />

                {/* Elegant teardrop - sophisticated */}
                <div className="absolute bottom-1/4 left-1/5 w-20 h-28 sm:w-28 sm:h-40 lg:w-32 lg:h-44 bg-gradient-to-b from-rose-400/40 via-pink-400/30 to-orange-400/25 rounded-[50%_50%_50%_50%_/_80%_20%_60%_40%] blur-lg opacity-65" />

                {/* Dynamic cloud shape - atmospheric */}
                <div className="absolute top-1/5 right-1/5 w-26 h-20 sm:w-38 sm:h-28 lg:w-42 lg:h-32 bg-gradient-to-tr from-lime-400/30 via-green-400/25 to-emerald-400/15 rounded-[70%_30%_40%_60%] blur-xl opacity-50" />

                {/* Additional micro-shapes for depth */}
                <div className="absolute top-3/4 right-2/5 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-violet-400/25 via-blue-400/20 to-cyan-400/15 rounded-full blur-md opacity-40" />

                <div className="absolute top-1/6 left-3/5 w-8 h-12 sm:w-12 sm:h-16 lg:w-14 lg:h-18 bg-gradient-to-t from-amber-400/30 via-yellow-400/25 to-lime-400/20 rounded-[40%_60%_70%_30%] blur-sm opacity-35" />
            </div>
        </>
    );
}