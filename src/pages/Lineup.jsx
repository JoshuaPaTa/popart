export default function Lineup() {
    return (
        <section id="lineup" class="relative h-screen w-full snap-start overflow-hidden bg-[#00E5FF] pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-black">

            <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-15" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="halftone-cyan" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="4" cy="4" r="2.5" fill="#000" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#halftone-cyan)" />
            </svg>

            <div class="max-w-6xl w-full relative z-10 flex flex-col gap-5">
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <div class="bg-white border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_#000]">
                        <h2 class="text-2xl sm:text-4xl font-black uppercase tracking-tight">02 · Lineup Principal</h2>
                    </div>
                    <span class="px-4 py-1.5 bg-[#FFE600] border-4 border-black font-black text-xs uppercase shadow-[4px_4px_0px_0px_#000] -rotate-2">
                        3 Escenarios Simultáneos
                    </span>
                </div>

            </div>
        </section>
    )
}
