export default function Galeria() {
  return (
    <section id="galeria" class="relative h-screen w-full snap-start overflow-hidden bg-[#FF0055] pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-black">
      
      <div class="max-w-6xl w-full relative z-10 flex flex-col gap-5">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="bg-[#FFE600] border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_#000]">
            <h2 class="text-2xl sm:text-4xl font-black uppercase tracking-tight">03 · Zonas de Arte</h2>
          </div>
          <p class="bg-white border-2 border-black px-3 py-1 font-black text-xs uppercase shadow-[3px_3px_0px_0px_#000]">
            Experiencias Interactivas
          </p>
        </div>

      </div>
    </section>
  )
}
