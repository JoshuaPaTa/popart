export default function Club() {
    return (
        <section id="contacto" class="relative h-screen w-full snap-start overflow-hidden bg-[#FFE600] pt-20 pb-16 px-6 md:px-12 flex items-center justify-center border-t-4 border-black">

            <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-15" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="halftone-end" width="18" height="18" patternUnits="userSpaceOnUse">
                        <circle cx="5" cy="5" r="3" fill="#000" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#halftone-end)" />
            </svg>

        </section>
    )
}
