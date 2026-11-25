export default function Entradas() {
    return (
        <section id="entradas" class="relative h-screen w-full snap-start overflow-hidden bg-white pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-black">

            <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-15" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="halftone-white" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="6" cy="6" r="3" fill="#0047FF" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#halftone-white)" />
            </svg>

            <div class="max-w-6xl w-full relative z-10 flex flex-col gap-5">
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <div class="bg-[#0047FF] text-white border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_#000]">
                        <h2 class="text-2xl sm:text-4xl font-black uppercase tracking-tight">04 · Entradas</h2>
                    </div>
                    <span class="px-4 py-1.5 bg-[#FF0055] text-white border-4 border-black font-black text-xs uppercase shadow-[4px_4px_0px_0px_#000] rotate-2">
                        Preventa Activa
                    </span>
                </div>

            </div>
        </section>
    )
}
