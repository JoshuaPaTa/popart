export default function Inicio() {
  return (
    <section id="inicio" class="relative h-screen w-full snap-start overflow-hidden bg-[#FFE600] pt-20 pb-16 px-6 md:px-12 flex items-center justify-center">
      
      
      <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="halftone-hero" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="3" fill="#FF0055" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#halftone-hero)" />
      </svg>

      <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
         
        <div class="lg:col-span-6 flex flex-col items-start gap-4">
          
          <div class="relative bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#000] -rotate-2">
            <span class="font-black text-xs uppercase tracking-widest text-[#FF0055]">14 – 16 NOVIEMBRE · PARQUE CENTRAL</span>
          </div>

          <h1 class="text-5xl sm:text-6xl xl:text-7xl font-black uppercase leading-[0.9] tracking-tight">
            <span class="block text-black drop-shadow-[4px_4px_0px_#FFF]">ARTE, MÚSICA</span>
            <span class="inline-block bg-[#FF0055] text-white border-4 border-black px-3 py-1 shadow-[6px_6px_0px_0px_#000] rotate-1 mt-2">
              Y POP ART!
            </span>
          </h1>

          <p class="bg-white border-4 border-black p-4 font-bold text-sm sm:text-base shadow-[5px_5px_0px_0px_#000] max-w-md">
            Tres días de conciertos indie, murales gigantes, vinilos coleccionables y cultura cómic en vivo.
          </p>

          <div class="flex flex-wrap items-center gap-4 mt-1">
            <a href="#entradas" class="px-7 py-3.5 bg-[#00E5FF] text-black border-4 border-black font-black text-sm uppercase tracking-wider shadow-[6px_6px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              ¡Conseguir Pase!
            </a>
            <div class="px-4 py-2 bg-[#0047FF] text-white border-4 border-black font-black text-xs uppercase shadow-[4px_4px_0px_0px_#000] rotate-2">
              +30 Artistas
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
