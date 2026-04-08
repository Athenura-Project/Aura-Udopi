import React, { useState } from 'react';
import { ChefHat, Star, ChevronRight, ArrowRight, Coffee, Croissant, Cake, Utensils, Droplets, Leaf, Clock } from 'lucide-react';

const FullAestheticMenu = () => {
  const [activeTab, setActiveTab] = useState('Signature Cakes');

  const menuData = {
    'Signature Cakes': [
      { name: "Midnight Truffle", price: "₹840", icon: "✨", desc: "70% Dark Swiss ganache & edible gold leaf." },
      { name: "Velvet Rose", price: "₹680", icon: "🌹", desc: "Organic rosewater cream & lychee pearls." },
      { name: "Honey Arabia", price: "₹700", icon: "🍯", desc: "Roasted pistachio, wild honey, saffron sponge." },
      { name: "Victoria Strawberry", price: "₹700", icon: "🍓", desc: "House-made marionberry jam & Madagascar vanilla." },
      { name: "Citrus Cloud", price: "₹550", icon: "🍋", desc: "Triple-zested lemon chiffon, airy meringue." },
      { name: "Lavender Earl Grey", price: "₹720", icon: "🫖", desc: "Infused tea sponge with floral buttercream." }
    ],
    'Artisan Breads': [
      { name: "Wild Sourdough", price: "₹240", icon: "🌾", desc: "48-hour cold ferment, stone-milled flour." },
      { name: "Garlic Focaccia", price: "₹300", icon: "🧄", desc: "Confit garlic, rosemary, cold-pressed oil." },
      { name: "Multigrain Rye", price: "₹280", icon: "🌽", desc: "Toasted flax, pumpkin, and sunflower seeds." },
      { name: "Challah Loaf", price: "₹260", icon: "🍞", desc: "Traditional braided egg bread, honey glaze." },
      { name: "Olive Ciabatta", price: "₹320", icon: "🫒", desc: "Kalamata olives & Mediterranean herbs." }
    ],
    'Small Bakes': [
      { name: "Almond Croissant", price: "₹220", icon: "🥐", desc: "Twice-baked with house frangipane." },
      { name: "Pain au Chocolat", price: "₹190", icon: "🍫", desc: "Valrhona chocolate batons, 48-layer lamination." },
      { name: "Canelé de Bordeaux", price: "₹120", icon: "🍯", desc: "Crunchy caramelized crust, custardy heart." },
      { name: "Kouign-Amann", price: "₹240", icon: "🧈", desc: "Salted butter, flaky layers, sugar crust." }
    ],
    'Tea & Tisanes': [
      { name: "Silver Needle White", price: "₹450", icon: "🌱", desc: "Delicate first-flush buds from Darjeeling." },
      { name: "Hibiscus Rouge", price: "₹320", icon: "🌺", desc: "Tart African hibiscus with dried orange peel." },
      { name: "Masala Chai Reserve", price: "₹250", icon: "🌶️", desc: "Hand-ground spices, CTC leaf, whole milk." },
      { name: "Matcha Ceremonial", price: "₹550", icon: "🍵", desc: "Uji grade matcha whisked with bamboo." }
    ]
  };

  const categories = Object.keys(menuData);

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans text-[#2C2420]">
      
      {/* 1. HERO SECTION (Unchanged/Refined) */}
      <header className="container mx-auto px-6 md:px-12 py-16 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-6xl md:text-8xl font-serif leading-tight">
              Aura <br /> 
              <span className="italic text-stone-300 font-light">Atelier</span>
            </h1>
            <p className="text-stone-500 leading-relaxed text-base font-light max-w-md">
              Where mathematical precision meets culinary art. Our menu is a curated journey through texture, temperature, and taste.
            </p>
          </div>
          <div className="lg:col-span-7 relative group">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200" className="w-full h-full object-cover" alt="Main" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] uppercase tracking-widest mb-2 opacity-80">Featured Selection</p>
                <h3 className="text-3xl font-serif italic">The Summer Truffle Series</h3>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. THE ALCHEMY SECTION (New Stats) */}
      <section className="bg-white py-20 border-y border-stone-100">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div className="space-y-2">
                    <Droplets className="mx-auto text-[#9F0712] mb-4" size={24} />
                    <h5 className="text-3xl font-serif">48h</h5>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400">Slow Fermentation</p>
                </div>
                <div className="space-y-2">
                    <Leaf className="mx-auto text-[#9F0712] mb-4" size={24} />
                    <h5 className="text-3xl font-serif">100%</h5>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400">Natural Starters</p>
                </div>
                <div className="space-y-2">
                    <Clock className="mx-auto text-[#9F0712] mb-4" size={24} />
                    <h5 className="text-3xl font-serif">04 AM</h5>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400">Daily Fresh Start</p>
                </div>
                <div className="space-y-2">
                    <Star className="mx-auto text-[#9F0712] mb-4" size={24} />
                    <h5 className="text-3xl font-serif">12+</h5>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400">Origin Spices</p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. DYNAMIC MENU SECTION */}
      <main className="container mx-auto px-6 md:px-12 py-24">
        <nav className="flex flex-wrap gap-8 md:gap-16 border-b border-stone-200 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`pb-6 text-xs uppercase tracking-[0.2em] font-bold transition-all relative ${
                activeTab === cat ? 'text-[#9F0712]' : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              {cat}
              {activeTab === cat && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9F0712]"></div>
              )}
            </button>
          ))}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData[activeTab].map((item, idx) => (
                <div key={idx} className="group border-b border-stone-100 pb-6 hover:border-[#9F0712] transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-serif">{item.name}</h4>
                    <span className="text-sm font-bold text-[#9F0712]">{item.price}</span>
                  </div>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-[#4A3728] text-white p-10 rounded-3xl">
                <h3 className="text-2xl font-serif italic mb-4">Gourmet Pairing</h3>
                <p className="text-sm text-stone-300 leading-relaxed mb-6 italic">"The Midnight Truffle pairs exquisitely with our Single-Origin Cold Brew."</p>
                <div className="h-px bg-stone-500 w-12 mb-6"></div>
                <p className="text-[10px] uppercase tracking-widest">Ask our Sommelier</p>
            </div>
            
            <div className="border border-stone-200 p-8 rounded-3xl">
                <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Allergens & Dietary</h4>
                <div className="flex gap-4 opacity-50">
                    <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-[10px] font-bold">VG</div>
                    <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-[10px] font-bold">GF</div>
                    <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-[10px] font-bold">NF</div>
                </div>
            </div>
          </aside>
        </div>
      </main>

      {/* 4. SEASONAL GALLERY SECTION (Big Feature Cards) */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <h2 className="text-4xl font-serif mb-12 text-center">Seasonal <span className="italic text-stone-400">Spotlight</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                <div className="absolute bottom-8 left-8 text-white">
                    <h4 className="text-3xl font-serif italic">Summer Berry Galette</h4>
                    <p className="text-sm opacity-80 mb-4">Limited availability until August.</p>
                    <button className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Reserve Yours</button>
                </div>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                <div className="absolute bottom-8 left-8 text-white">
                    <h4 className="text-3xl font-serif italic">Espresso Macaron</h4>
                    <p className="text-sm opacity-80 mb-4">Crafted with Colombian Reserve beans.</p>
                    <button className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Reserve Yours</button>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default FullAestheticMenu;