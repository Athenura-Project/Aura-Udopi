import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Cakes = () => {
    const categories = ['All Collections', 'Chocolate', 'Designer', 'Birthday', 'Premium'];

    const cakeProducts = [
        { title: "Velvet Rose Boutique", price: "$68.00", img: "https://i.pinimg.com/736x/2e/35/aa/2e35aa17db39cd2e20d03a4c0076c2a5.jpg", desc: "Light velvet sponge with a hint of rosewater cream icing." },
        { title: "The Gilded Vanilla", price: "$75.00", img: "https://i.pinimg.com/736x/a9/bd/70/a9bd70a4971e1cf8efc2e330ca29837a.jpg", desc: "Madagascar vanilla bean sponge with leaf-applied 24k gold." },
        { title: "Pistachio Orchard", price: "$62.00", img: "https://i.pinimg.com/1200x/68/81/f6/6881f6ad38900088e022458d1934ad73.jpg", desc: "Italian pistachio flour sponge topped with fresh berries." },
        { title: "Café Au Lait Layer", price: "$50.00", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800", desc: "Triple-layer espresso soaked in house-roast beans." },
        { title: "Citrus Cloud", price: "$55.00", img: "https://images.unsplash.com/photo-1519148246701-3dc1897a7a21?q=80&w=800", desc: "Zesty lemon chiffon cake with layers of homemade curd." },
    ];

    return (
        <main className="bg-[#FAF9F6] min-h-screen text-black pt-24 font-sans">

            {/* SECTION 1: HERO HEADER */}
            <header className="container mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* LEFT CONTENT */}
                    <div className="text-left max-w-xl">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-tight mb-4 sm:mb-6 text-[#BA153F]">
                            Cakes Crafted With <br />
                            <span className="italic text-[#E9C46A]">Quiet Luxury</span>
                        </h1>

                        <p className="text-stone-400 text-sm sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                            Every slice tells a story of precision, premium ingredients, and a touch of the extraordinary. Experience the AURA difference.
                        </p>

                        {/* CATEGORY FILTERS */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-12">
                            {categories.map((cat, i) => (
                                <button
                                    key={i}
                                    className={`px-4 sm:px-6 py-2 rounded-full border text-[9px] sm:text-[10px] uppercase tracking-widest font-bold transition-all ${i === 0
                                            ? "bg-[#E9C46A] border-[#E9C46A] text-black"
                                            : "border-white/20 text-white hover:border-[#E9C46A]"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <img
                            src="https://i.pinimg.com/736x/23/a1/dc/23a1dcc7da9d3ba2c6b2742cebd10054.jpg"   // 👉 replace with your image path
                            alt="Luxury Cake"
                            className=" object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105 rounded-xl"
                        />
                    </div>

                </div>
            </header>

            {/* SECTION 2: PRODUCT BENTO GRID */}
            <section className="container mx-auto px-6 md:px-12 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* BIG FEATURED ITEM (2-COL SPAN) */}
                    <div className="md:col-span-2 relative group overflow-hidden rounded-xl h-[550px] shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                            alt="Midnight Truffle"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        <div className="absolute bottom-10 left-10 right-10">
                            <span className="bg-[#9F0712] text-white text-[9px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm mb-4 inline-block">Seasonal Special</span>
                            <h2 className="text-5xl font-serif mb-2">Midnight Truffle Signature</h2>
                            <p className="text-stone-300 mb-6 max-w-md text-sm italic">Rich dark chocolate infused with silky Swiss ganache and gold leaf.</p>
                            <div className="flex items-center gap-6">
                                <span className="text-3xl font-serif text-[#E9C46A]">$84.00</span>
                                <button className="bg-white text-black px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#E9C46A] transition-all transform hover:-translate-y-1">
                                    <ShoppingBag size={14} /> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ITEM: VELVET ROSE (WHITE CARD) */}
                    <div className="bg-white text-black rounded-xl p-8 flex flex-col items-center text-center group transition-all hover:shadow-2xl">
                        <div className="w-full h-84 overflow-hidden rounded-lg mb-6">
                            <img src={cakeProducts[0].img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                        </div>
                        <div className="flex justify-between w-full mb-2 items-end">
                            <h3 className="font-serif text-2xl leading-none text-[#2C2420]">{cakeProducts[0].title}</h3>
                            <span className="font-bold text-[#9F0712]">{cakeProducts[0].price}</span>
                        </div>
                        <p className="text-[11px] text-stone-500 mb-8 mt-2 leading-relaxed">{cakeProducts[0].desc}</p>
                        <button className="w-full border-t border-stone-100 pt-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#2C2420] hover:text-[#9F0712] transition-colors">
                            Add to Cart
                        </button>
                    </div>

                    {/* ROW 2: THE GILDED VANILLA */}
                    <div className="bg-white text-black rounded-xl p-6 group transition-all hover:shadow-2xl">
                        <div className="h-64 rounded-lg overflow-hidden mb-6">
                            <img src={cakeProducts[1].img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="" />
                        </div>
                        <div className="flex justify-between items-start border-b border-stone-100 pb-4">
                            <h3 className="font-serif text-xl text-[#2C2420]">{cakeProducts[1].title}</h3>
                            <span className="font-bold text-sm text-[#9F0712]">{cakeProducts[1].price}</span>
                        </div>
                        <button className="mt-4 w-full py-4 text-[9px] font-black uppercase tracking-widest hover:bg-[#0F0F0F] hover:text-white transition-all">
                            Quick Add
                        </button>
                    </div>

                    {/* ROW 2: MASTERPIECE CTA (SPLIT BOX) */}
                    <div className="md:col-span-2 bg-[#F3EBE1] text-black rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl min-h-[350px]">
                        <div className="p-12 flex flex-col justify-center">
                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-4">Signature Design Service</span>
                            <h3 className="text-4xl font-serif mb-6 leading-tight">Create Your Own <br /> Masterpiece</h3>
                            <p className="text-stone-600 text-sm mb-8 leading-relaxed italic">Consult with our lead patissiers for custom designer cakes for your most precious moments.</p>
                            <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:text-[#9F0712] transition-all group/btn">
                                Book a Consultation <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                            </button>
                        </div>
                        <div className="relative h-64 md:h-full">
                            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800" className="w-full h-full object-cover grayscale contrast-125" alt="Chef" />
                            <div className="absolute inset-0 bg-[#9F0712]/10 mix-blend-multiply" />
                        </div>
                    </div>

                    {/* REMAINING LIST ITEMS */}
                    {cakeProducts.slice(2).map((cake, i) => (
                        <div key={i} className="bg-white text-black rounded-xl p-6 group hover:translate-y-[-5px] transition-all duration-300">
                            <div className="h-56 overflow-hidden rounded-lg mb-6">
                                <img src={cake.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                            </div>
                            <div className="flex justify-between w-full mb-3">
                                <h3 className="font-serif text-xl">{cake.title}</h3>
                                <span className="font-bold text-[#9F0712]">{cake.price}</span>
                            </div>
                            <p className="text-[10px] text-stone-400 mb-6 font-medium tracking-wide leading-relaxed">{cake.desc}</p>
                            <button className="w-full border-t border-stone-100 pt-5 text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 hover:text-[#9F0712] transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    ))}

                </div>
            </section>

            {/* SECTION: THE CRAFT - ELEVATED VERSION */}
            <section className="py-2 bg-[#FAF9F6] overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        {/* LEFT: TEXT COLUMN */}
                        <div className="lg:w-1/3 space-y-8 relative z-10">
                            <div className="space-y-4">
                                <span className="text-[#9F0712] text-[10px] uppercase tracking-[0.5em] font-black block">
                                    Our Philosophy
                                </span>
                                <h2 className="text-5xl md:text-6xl font-serif text-[#2C2420] leading-[1.1]">
                                    The Aura <br />
                                    <span className="italic text-stone-400">Standard</span>
                                </h2>
                            </div>

                            <p className="text-stone-500 leading-relaxed text-sm font-light max-w-sm">
                                We don't just bake; we architect. Every tier is stabilized with structural precision, and every flavor profile is curated for seasonal harmony and olfactory delight.
                            </p>

                            <div className="pt-4">
                                <button className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#2C2420]">
                                    <span className="w-12 h-[1px] bg-[#9F0712] transition-all group-hover:w-16"></span>
                                    Explore the process
                                </button>
                            </div>
                        </div>

                        {/* RIGHT: DYNAMIC IMAGE COMPOSITION */}
                        <div className="lg:w-2/3 relative w-full h-[500px] md:h-[600px]">

                            {/* Main Background Image */}
                            <div className="absolute top-0 right-0 w-[80%] h-[80%] overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200"
                                    className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-1000"
                                    alt="Artisanal Ingredients"
                                />
                                {/* Sourcing Badge overlay */}
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-6 max-w-[200px] rounded-lg shadow-xl">
                                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#9F0712] mb-2 text-left">Ethical Sourcing</h4>
                                    <p className="text-[10px] text-stone-500 leading-tight text-left">Single-origin chocolate from Madagascar and stone-milled organic flours.</p>
                                </div>
                            </div>

                            {/* Floating Secondary Image */}
                            <div className="absolute bottom-0 left-0 w-[45%] h-[50%] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[8px] border-[#FAF9F6] z-20 hidden md:block">
                                <img
                                    src="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800"
                                    className="w-full h-full object-cover"
                                    alt="Hand-Painted Details"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <h4 className="text-white font-bold text-[10px] uppercase tracking-widest">Hand-Painted Detailing</h4>
                                </div>
                            </div>

                            {/* Decorative Element: Floating Gold Leaf Ring */}
                            <div className="absolute top-[-20px] right-[-20px] w-32 h-32 border border-[#E9C46A]/30 rounded-full animate-pulse -z-10" />
                            <div className="absolute bottom-[-10px] left-[40%] w-16 h-16 bg-[#9F0712] rounded-full mix-blend-multiply opacity-20 blur-2xl" />

                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: EXPERIENCE / CALL TO ACTION */}
            <section className="bg-[#FDFCFB] py-8 sm:py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6">

                    <div className="bg-[#F3EBE1] rounded-2xl sm:rounded-[3rem] p-5 sm:p-8 md:p-10 text-center relative overflow-hidden shadow-inner">

                        <div className="relative z-10">

                            {/* Tag */}
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#9F0712] font-bold block mb-4 sm:mb-6">
                                Exclusive Delivery
                            </span>

                            {/* Heading */}
                            <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif text-[#2C2420] mb-6 sm:mb-8 leading-tight sm:leading-none">
                                Experience the <br className="hidden sm:block" />
                                AURA Magic at Home
                            </h2>

                            {/* Description */}
                            <p className="text-stone-600 max-w-md sm:max-w-xl mx-auto mb-8 sm:mb-12 text-sm sm:text-lg font-light leading-relaxed">
                                We offer premium concierge delivery services across the city, ensuring your cake arrives as perfectly as it left our kitchen.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">

                                <button className="w-full sm:w-auto bg-[#2C2420] text-white px-6 sm:px-12 py-3 sm:py-5 rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-[11px] shadow-xl hover:bg-[#9F0712] transition-all">
                                    Order for Delivery
                                </button>

                                <button className="w-full sm:w-auto border border-[#2C2420] text-[#2C2420] px-6 sm:px-12 py-3 sm:py-5 rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-[11px] hover:bg-white transition-all">
                                    View All Menus
                                </button>

                            </div>
                        </div>

                        {/* Background Decorative Text */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 sm:top-[-5%] sm:left-[25%] text-[6rem] sm:text-[12rem] md:text-[20rem] font-serif text-black/[0.03] pointer-events-none select-none whitespace-nowrap">
                            Aura
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cakes;