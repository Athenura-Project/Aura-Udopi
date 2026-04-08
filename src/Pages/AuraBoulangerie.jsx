import React, { useState } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight, Clock, Flame, ShieldCheck, Zap, Droplets, Utensils } from 'lucide-react';

const AuraBoulangerie = () => {
  const [activeTab, setActiveTab] = useState('Garlic Breads');

  const garlicBreads = [
    {
      name: "Black Garlic Sourdough",
      price: "₹480",
      desc: "Fermented for 60 days, our black garlic provides a sweet, balsamic-like depth to the classic sourdough.",
      tag: "SIGNATURE",
      img: "https://i.pinimg.com/736x/be/14/a0/be14a01df40f914939e57db734528e77.jpg"
    },
    {
      name: "Truffle & Wild Herb",
      price: "₹650",
      desc: "White truffle oil infused butter mixed with fresh parsley, thyme, and roasted elephant garlic.",
      tag: "PREMIUM",
      img: "https://i.pinimg.com/736x/cc/40/fb/cc40fbcab820367e4be9d3d7da075efd.jpg"
    },
    {
      name: "Smoked Paprika Melt",
      price: "₹420",
      desc: "A spicy kick of Spanish paprika combined with molten provolone and garlic confit.",
      img: "https://i.pinimg.com/1200x/22/a2/70/22a270e8894a5f2d0f1cd692ab61f1b5.jpg"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-serif text-[#2C2420] selection:bg-[#BA153F] selection:text-white">

      {/* 1. ULTRA-MINIMAL NAV */}
      <nav className="flex justify-between items-center px-12 py-8 bg-[#FAF9F6]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="text-3xl font-black tracking-tighter text-[#2C2420]">AURA<span className="text-[#BA153F]">.</span></div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">
          {['Menu', 'The Science', 'Story', 'Visit'].map((item) => (
            <a key={item} href="#" className="hover:text-[#BA153F] transition-colors">{item}</a>
          ))}
        </div>
        <button className="flex items-center gap-3 bg-[#BA153F] text-white px-6 py-3 rounded-full hover:scale-105 transition-transform group">
          <ShoppingBag size={18} strokeWidth={2.5} />
          <span className="text-[10px] font-bold tracking-widest uppercase">Bag (2)</span>
        </button>
      </nav>

      {/* 2. SENSORY HERO SECTION */}
      <header className="relative h-[90vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-60">
          <img
            src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2000"
            className="w-full h-full object-cover scale-110 animate-pulse-slow"
            alt="Garlic Bread Texture"
          />
        </div>
        <div className="container mx-auto px-12 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-4 text-[#BA153F]">
              <div className="w-12 h-px bg-[#BA153F]"></div>
              <span className="text-xs uppercase tracking-[0.5em] font-bold">Limited Batch: 40 Loaves Daily</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] text-white leading-none tracking-tighter">
              The <span className="italic font-light text-stone-300">Crust</span> <br />
              Chronicles
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 font-sans font-light max-w-xl leading-relaxed">
              We don't just bake bread; we engineer a <span className="text-white font-medium italic underline decoration-[#BA153F]">multi-sensory snap</span> that stays with you.
            </p>
            <div className="pt-8 flex gap-6">
              <button className="bg-[#BA153F] text-white px-10 py-5 rounded-sm font-sans text-xs uppercase tracking-widest font-black hover:bg-white hover:text-black transition-all">
                Taste the Batch
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. THE DAILY DROP (Interactive Grid) */}
      <section className="container mx-auto px-12 py-32">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-6">
          <h2 className="text-5xl md:text-7xl lowercase italic font-light tracking-tighter">
            today’s <span className="font-bold text-[#BA153F] not-italic">masterpieces.</span>
          </h2>
          <p className="text-stone-400 font-sans text-lg max-w-xs">Curated flavors based on this morning’s herb harvest.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {garlicBreads.map((bread, i) => (
            <div key={i} className="group relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8 shadow-2xl">
                <img src={bread.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {bread.tag && (
                  <div className="absolute top-6 left-6 bg-white text-black px-4 py-2 rounded-full text-[10px] font-bold tracking-tighter uppercase">
                    {bread.tag}
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <h3 className="text-3xl font-medium tracking-tight">{bread.name}</h3>
                  <span className="text-2xl font-sans font-light text-[#BA153F]">{bread.price}</span>
                </div>
                <p className="text-stone-500 font-sans leading-relaxed text-sm">
                  {bread.desc}
                </p>
                <button className="w-full border border-stone-200 py-4 rounded-full font-sans text-[10px] uppercase tracking-widest font-bold group-hover:bg-[#BA153F] group-hover:text-white group-hover:border-[#BA153F] transition-all flex items-center justify-center gap-3">
                  <ShoppingBag size={14} /> Claim This Loaf
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE SCIENCE OF GARLIC (Infographic) */}
      <section className="bg-white py-32 border-y border-stone-100">
        <div className="container mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 text-[15rem] font-black text-stone-50 select-none">01</div>
              <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800" className="relative z-10 rounded-3xl shadow-3xl" alt="Baker at work" />
            </div>
            <div className="space-y-12">
              <h3 className="text-6xl font-light leading-tight">The <span className="text-[#BA153F] font-bold">Alchemy</span> <br /> of Fermentation</h3>
              <div className="grid grid-cols-1 gap-10">
                {[
                  { icon: <Droplets />, title: "85% Hydration", text: "Higher water content creates those airy, honeycomb pockets inside the crust." },
                  { icon: <Zap />, title: "Wild Yeast", text: "Our 4-year-old starter provides a tangy punch that cuts through the garlic butter." },
                  { icon: <Utensils />, title: "Confit Technique", text: "Garlic is slow-poached in olive oil for 12 hours until it's spreadable like silk." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-[#BA153F]/5 text-[#BA153F] flex items-center justify-center group-hover:bg-[#BA153F] group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-stone-500 font-sans text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOIN THE BAKER'S CIRCLE (Newsletter Refined) */}
      <section className="container mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-32">
        <div className="bg-[#1C1917] rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] 
                  p-6 sm:p-10 md:p-16 lg:p-24 text-white relative overflow-hidden text-center">

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">

            {/* TOP TAG */}
            <span className="text-[#BA153F] font-sans font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs">
              The Inner Circle
            </span>

            {/* HEADING */}
            <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl italic font-light leading-snug">
              Fresh batch alerts,{" "}
              <span className="text-[#BA153F]">directly.</span>
            </h2>

            {/* INPUT + BUTTON */}
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 
                      bg-white/5 p-2 sm:p-3 rounded-2xl sm:rounded-full 
                      border border-white/10 backdrop-blur-xl">

              <input
                type="email"
                placeholder="Where should we send the invite?"
                className="flex-grow bg-transparent border-none outline-none 
                     px-4 sm:px-6 md:px-8 py-3 sm:py-4 
                     text-xs sm:text-sm font-sans text-center md:text-left"
              />

              <button className="bg-[#BA153F] text-white 
                           px-6 sm:px-10 md:px-12 py-3 sm:py-4 
                           rounded-xl sm:rounded-full 
                           font-black font-sans text-[9px] sm:text-[10px] 
                           uppercase tracking-widest 
                           hover:bg-white hover:text-[#BA153F] 
                           transition-all">
                Join Now
              </button>
            </div>
          </div>

          {/* DECORATION */}
          <div className="absolute -bottom-10 -right-10 sm:-bottom-16 sm:-right-16 md:-bottom-20 md:-right-20 
                    opacity-10 rotate-45 select-none">
            <Utensils size={200} className="sm:w-[300px] md:w-[400px]" />
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#FAF9F6] pt-12 pb-24 border-t border-stone-100">
        <div className="container mx-auto px-12 flex flex-col items-center gap-12 text-center">
          <div className="text-4xl font-black text-[#2C2420]">AURA<span className="text-[#BA153F]">.</span></div>
          <div className="flex gap-12 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
            <a href="#" className="hover:text-black">Instagram</a>
            <a href="#" className="hover:text-black">Kitchen Cam</a>
            <a href="#" className="hover:text-black">Wholesale</a>
          </div>
          <p className="text-stone-300 font-sans text-[10px]">© 2026 Aura Boulangerie. No Preservatives. No Compromise.</p>
        </div>
      </footer>
    </div>
  );
};

export default AuraBoulangerie;