import React, { useState, useEffect } from 'react';
import {
    ArrowRight,
    ChevronRight,
    Star,
    Quote,
    Clock,
    MapPin,
    Phone,
    ArrowUpRight,
    ShoppingBag
} from 'lucide-react';
import Navbar from './Nav';
import Footer from './Footer';

const Home = () => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.scroll-animate');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add('animate-in');
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const products = [
        { title: "Artisan Berliner", img: "https://i.pinimg.com/736x/f4/39/48/f43948e6984d793d6461f4d6b6b9a58d.jpg", price: "₹450", tag: "Best Seller" },
        { title: "Garlic Sourdough", img: "https://i.pinimg.com/236x/9c/5e/bd/9c5ebdc2813f7855c6df989a4335c3fb.jpg", price: "₹800", tag: "Organic" },
        { title: "Velvet Dream Cake", img: "https://i.pinimg.com/1200x/9c/dc/ed/9cdcedd0ef62b95fe94f45565272dc99.jpg", price: "₹450", tag: "Limited" },
        { title: "Pistachio Macarons", img: "https://i.pinimg.com/1200x/f9/5c/c2/f95cc2a87e9d473d44abdef16bb8bc2e.jpg", price: "₹750", tag: "New" },
        { title: "Wildberry Tart", img: "https://i.pinimg.com/736x/4e/02/f6/4e02f6d5cecf4abd97ee0511a8c12e3b.jpg", price: "₹650", tag: "Seasonal" },
    ];

    const categories = ['All Items', 'Artisan Cakes', 'Sourdough Breads', 'Berliners', 'Reserve Coffee'];
    // We double the array to create a seamless infinite loop for the auto-scroll
    const scrollItems = [...products, ...products];

    return (
        <div className="bg-[#F9F5F0] text-[#2D2D2D] font-serif">
            {/* --- HERO SECTION --- */}
            <section className="relative w-full min-h-screen lg:h-[90vh] flex items-center overflow-hidden bg-[#FDFBF9] pt-20">

                {/* --- Background Layer --- */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&q=80"
                        alt="Bakery Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    {/* Softer Gradient Overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FDFBF9] via-[#FDFBF9]/95 to-transparent"></div>
                </div>

                {/* --- Decorative Elements (Blobs) --- */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#E9C46A]/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#BA153F]/5 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        {/* --- Left Content --- */}
                        <div className="flex flex-col space-y-6 md:space-y-8 text-center lg:text-left items-center lg:items-start">

                            <h1 className="text-5xl md:text-7xl mt-8 lg:text-8xl text-left font-serif text-[#4A3728] leading-[1.1] tracking-tight">
                                Bliss in Every <br />
                                <span className="relative inline-block">
                                    <span className="italic font-light text-[#BA153F]">Bite</span>
                                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                                        <path d="M1 5.5C40 2 120 2 199 5.5" stroke="#E9C46A" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h1>

                            <p className="text-lg text-left md:text-xl text-[#4A3728]/80 max-w-lg leading-relaxed font-light">
                                Handcrafted artisanal delights made with organic ingredients and a dash of magic. Experience the art of fine baking delivered to your doorstep.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <button className="group bg-[#BA153F] text-white px-8 py-4 rounded-full hover:bg-[#961233] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-[#BA153F]/30 active:scale-95">
                                    <span className="font-semibold">Order Now</span>
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button className="border-2 border-[#4A3728]/20 text-[#4A3728] px-8 py-4 rounded-full font-semibold hover:bg-[#4A3728] hover:text-white transition-all duration-300 active:scale-95">
                                    Visit Our Gallery
                                </button>
                            </div>

                            {/* Social Proof Mini Section */}
                            <div className="pt-4 flex items-center gap-4 border-t border-[#4A3728]/10 w-full justify-center lg:justify-start">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-[#4A3728]/60"><b>500+</b> Happy bread lovers this week</p>
                            </div>
                        </div>

                        {/* --- Right Visuals --- */}
                        <div className="relative flex justify-center items-center py-12 lg:py-0">
                            {/* The Main Circular Frame */}
                            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">

                                {/* Spinning Decorative Ring */}
                                <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#E9C46A]/40 animate-[spin_30s_linear_infinite]"></div>

                                {/* Main Image with refined border */}
                                <div className="absolute inset-6 md:inset-10 rounded-full overflow-hidden border-[8px] md:border-[16px] border-white shadow-2xl z-10">
                                    <img
                                        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80"
                                        alt="Signature Cake"
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Floating Aesthetic Cards */}
                                <div className="absolute -top-4 -right-2 md:top-10 md:right-0 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce transition-all" style={{ animationDuration: '3s' }}>
                                    <span className="block text-[#BA153F] font-bold text-xl md:text-2xl">100%</span>
                                    <span className="text-[#4A3728] text-xs font-bold uppercase tracking-wider">Organic</span>
                                </div>

                                <div className="absolute -bottom-6 -left-2 md:bottom-12 md:left-0 bg-white p-4 rounded-2xl shadow-xl z-20 animate-pulse">
                                    <div className="flex gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} className="fill-[#E9C46A] text-[#E9C46A]" />)}
                                    </div>
                                    <span className="text-[#4A3728] text-xs font-bold tracking-tight">"Best sourdough in town!"</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- FEATURED CREATIONS --- */}
            <section className="py-24 bg-[#FAF9F6] overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    {/* Header Section */}
                    <div className="flex justify-between items-end mb-16">
                        <div className="space-y-3">
                            <h2 className="text-5xl md:text-6xl font-serif text-[#2C2420] italic leading-tight">
                                Handcrafted <br /> <span className="not-italic text-[#4A3728]">Creations</span>
                            </h2>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-[#4A3728] font-medium border-b border-[#4A3728] pb-1 hover:opacity-70 transition-opacity">
                            View All Menu <ChevronRight size={18} />
                        </button>
                    </div>

                    {/* Auto-Scrolling Container */}
                    <div className="relative group">
                        <div className="flex animate-scroll gap-8 hover:[animation-play-state:paused]">
                            {scrollItems.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 w-[300px] md:w-[400px] group/card relative"
                                >
                                    <div className="relative overflow-hidden rounded-2xl aspect-[4/4] mb-6 shadow-xl shadow-brown-900/10">
                                        {/* Badge */}
                                        <div className="absolute top-4 left-4 z-10 bg-white/80  px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#4A3728]">
                                            {item.tag}
                                        </div>

                                        {/* Image */}
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                        />

                                        {/* Overlay on Hover */}
                                        <div className="absolute inset-0 bg-[#4A3728]/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="bg-white p-4 rounded-full shadow-2xl transform translate-y-4 group-hover/card:translate-y-0 transition-transform">
                                                <ShoppingBag className="text-[#4A3728]" size={24} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-start px-2">
                                        <div>
                                            <h3 className="font-serif text-2xl text-[#2C2420]">{item.title}</h3>
                                            <p className="text-[#8B7E74] text-sm mt-1 uppercase tracking-tighter">Premium Ingredients Only</p>
                                        </div>
                                        <span className="font-sans font-bold text-lg text-[#4A3728]">{item.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Gradient Fades for Smooth Edges */}

                    </div>
                </div>

                <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-400px * ${products.length} - 2rem * ${products.length})); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
            </section>

            {/* --- STORY SECTION (Dark) --- */}
            <section className="py-32 bg-[#0F0F0F] text-[#F5F5F5] overflow-hidden relative">
                {/* Subtle Background Text Decoration */}
                <div className="absolute top-10 left-[-5%] text-[15rem] font-serif text-white/5 select-none pointer-events-none">
                    Aura
                </div>

                <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Column: Visual Composition */}
                    <div className="relative group">
                        {/* Main Decorative Box */}
                        <div className="relative aspect-[4/5] md:aspect-square bg-[#1A1A1A] border border-white/10 overflow-hidden rounded-sm transition-transform duration-700 group-hover:scale-[0.98]">
                            <img
                                src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000"
                                alt="Bakery Craft"
                                className="w-full h-full object-cover opacity-60 md:grayscale hover:grayscale-0 transition-all duration-1000"
                            />

                            {/* Center Frame Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
                                <div className="border border-[#E9C46A]/40 p-8 backdrop-blur-[2px] bg-black/20">
                                    <h4 className="text-[#E9C46A] uppercase tracking-[0.4em] text-[10px] mb-4 text-center">The Art of</h4>
                                    <p className="text-4xl md:text-5xl font-serif tracking-tighter">AURA BREWING</p>
                                </div>
                            </div>
                        </div>

                        {/* Overlapping Floating Card */}
                        <div className="absolute -bottom-12 -right-4 md:-right-8 bg-[#E9C46A] p-10 text-black w-64 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
                            <div className="border-l-2 border-black/20 pl-4">
                                <p className="text-[10px] uppercase font-black tracking-widest mb-3 opacity-70">Heritage</p>
                                <p className="text-xl font-serif italic leading-tight">"Crafted with a quiet obsession for perfection."</p>
                                <div className="mt-4 flex items-center gap-2">
                                    <span className="h-[1px] w-8 bg-black/30"></span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Est. 2012</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Copywriting */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] text-white">
                                Crafting Moments of <br />
                                <span className="italic text-[#E9C46A]">Quiet Luxury.</span>
                            </h2>
                            <div className="h-1 w-20 bg-[#E9C46A]"></div>
                        </div>

                        <p className="text-gray-400 text-xl leading-relaxed max-w-xl font-light">
                            At AURA, we believe there is more to life than the daily grind. We curate sensory experiences that turn a simple morning ritual into an <span className="text-white font-medium">inspired celebration</span> of the senses.
                        </p>

                        <div className="grid grid-cols-2 gap-12 pt-6">
                            <div className="group">
                                <p className="text-4xl font-serif text-[#E9C46A] group-hover:translate-x-2 transition-transform duration-300">5k<span className="text-lg text-white/50">+</span></p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2 font-bold">Devoted Clients</p>
                            </div>
                            <div className="group">
                                <p className="text-4xl font-serif text-[#E9C46A] group-hover:translate-x-2 transition-transform duration-300">12<span className="text-lg text-white/50">+</span></p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2 font-bold">Gold Gastronomy Awards</p>
                            </div>
                        </div>

                        <button className="px-8 py-4 border border-white/20 hover:border-[#E9C46A] hover:text-[#E9C46A] transition-all duration-300 uppercase tracking-widest text-xs font-bold">
                            Discover Our Philosophy
                        </button>
                    </div>

                </div>
            </section>

            {/* --- EXPLORE MENU (Grid Layout) --- */}
            <section className="py-15 bg-[#FDFCFB] text-[#2C2420]">
                {/* Header & Navigation */}
                <div className="container mx-auto px-6 mb-16 text-center">
                    <h2 className="text-5xl md:text-7xl font-serif mb-10 italic">Explore the <span className="not-italic text-[#4A3728]">Menu</span></h2>

                    <div className="flex justify-center gap-8 overflow-x-auto no-scrollbar pb-4 border-b border-stone-100 max-w-3xl mx-auto">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                className={`whitespace-nowrap text-[11px] uppercase tracking-[0.2em] transition-all duration-300 relative group ${i === 0 ? 'text-[#4A3728] font-bold' : 'text-stone-400 hover:text-[#4A3728]'
                                    }`}
                            >
                                {cat}
                                <span className={`absolute -bottom-4 left-0 h-[2px] bg-[#4A3728] transition-all duration-500 ${i === 0 ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[750px]">

                        {/* Main Featured Card - The Brunch Collection */}
                        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden group rounded-3xl bg-stone-900">
                            <img
                                src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1200"
                                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                                alt="Brunch"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[#E9C46A] text-xs uppercase tracking-[0.3em] mb-2 font-bold">Signature Series</p>
                                        <h3 className="text-4xl text-white font-serif leading-none">The Morning <br /> Ritual</h3>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 text-white group-hover:bg-[#E9C46A] group-hover:text-black transition-colors duration-500">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Card - Coffee */}
                        <div className="md:col-span-2 md:row-span-1 relative overflow-hidden group rounded-3xl bg-[#E5D3C5]">
                            <img
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000"
                                className="w-full h-full object-cover mix-blend-multiply opacity-40 group-hover:scale-110 transition-transform duration-1000"
                                alt="Coffee"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                                <h3 className="text-3xl font-serif text-[#2C2420]">Bean & Brew</h3>
                                <p className="text-xs uppercase tracking-widest mt-2 border-b border-[#2C2420] pb-1">Single Origin Coffee</p>
                            </div>
                        </div>

                        {/* Small Card - The Quote */}
                        <div className="md:col-span-1 md:row-span-1 bg-[#4A3728] p-8 rounded-3xl flex flex-col justify-between group transition-colors hover:bg-[#3d2e22]">
                            <span className="text-4xl font-serif text-[#E9C46A] opacity-50 italic">"</span>
                            <p className="text-lg font-serif text-stone-200 leading-tight">Every crust tells a <span className="italic text-[#E9C46A]">story</span> of patience.</p>
                            <div className="mt-4 text-[10px] text-stone-400 uppercase tracking-widest font-bold">Our Philosophy</div>
                        </div>

                        {/* Small Card - Pastry Close-up */}
                        <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl">
                            <img
                                src="https://images.unsplash.com/photo-1626803775151-61d756612f97?q=80&w=800"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Pastry"
                            />
                            <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white text-[10px] font-black uppercase tracking-[0.5em] backdrop-blur-sm bg-black/20 px-4 py-2 border border-white/30">Berliners</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- TESTIMONIAL (Minimalist) --- */}
            <section className="relative py-40 overflow-hidden bg-[#1A1A1A]">
                {/* Background Image with sophisticated darkening overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000"
                        alt="Bakery Interior"
                        className="w-full h-full object-cover opacity-30 grayscale"
                    />
                    {/* Subtle radial gradient to pull focus to the center */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    {/* Animated Gold Icon */}
                    <div className="flex justify-center mb-12">
                        <div className="relative">
                            <Quote size={48} className="text-[#E9C46A] opacity-80" />
                            <div className="absolute -inset-4 border border-[#E9C46A]/20 rounded-full animate-pulse" />
                        </div>
                    </div>

                    {/* The Quote with elegant typography */}
                    <div className="relative mb-12">
                        <p className="text-2xl md:text-5xl font-serif leading-[1.4] text-white italic tracking-tight">
                            "The atmosphere at AURA is <span className="text-[#E9C46A]">unmatched</span>. It's where I come to find inspiration. The Berliners are quite simply the best I've had outside of Europe."
                        </p>

                        {/* Decorative Gold Divider */}
                        <div className="mt-10 flex justify-center items-center gap-4">
                            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#E9C46A]" />
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#E9C46A]" />
                            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#E9C46A]" />
                        </div>
                    </div>

                    {/* Author Section */}
                    <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 transition-all duration-500 hover:bg-white/10">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-full border-2 border-[#E9C46A]/30 p-1">
                                <img
                                    src="/Aura.avif"
                                    alt="Eleanor Vance"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <p className="font-bold text-white text-sm uppercase tracking-[0.3em]">
                                AURA CAFE
                            </p>
                            <div className="flex items-center gap-2 justify-center md:justify-start mt-1">
                                <span className="h-[1px] w-4 bg-stone-500" />
                                <p className="text-[11px] text-stone-400 uppercase tracking-widest font-medium">
                                    All in one Cafe
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* --- VISIT SECTION --- */}
            <section className="py-15 bg-[#FAF9F6] relative overflow-hidden">
                {/* Decorative Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                        {/* Left Side: Information */}
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.5em] text-[#A39284] font-bold block mb-4">Find Us</span>
                                <h2 className="text-5xl md:text-6xl font-serif text-[#2C2420] leading-tight">
                                    Visit the <br />
                                    <span className="italic text-[#4A3728]">Sanctuary</span>
                                </h2>
                                <div className="w-20 h-1 bg-[#E9C46A] mt-8"></div>
                            </div>

                            <div className="space-y-10">
                                {/* Location */}
                                <div className="group flex gap-6 items-start">
                                    <div className="p-4 bg-white shadow-sm rounded-full text-[#4A3728] group-hover:bg-[#4A3728] group-hover:text-white transition-colors duration-500">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold uppercase text-[10px] tracking-[0.2em] text-[#A39284] mb-2">
                                            Our Location
                                        </p>
                                        <p className="text-xl font-serif text-[#2C2420]">
                                            AURA café, G6, Grassland Commercials, <br />
                                            GB Panth Road, Udupi, 576-103
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="group flex gap-6 items-start">
                                    <div className="p-4 bg-white shadow-sm rounded-full text-[#4A3728] group-hover:bg-[#4A3728] group-hover:text-white transition-colors duration-500">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <p className="font-bold uppercase text-[10px] tracking-[0.2em] text-[#A39284]">
                                                Opening Hours
                                            </p>
                                            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                            <span className="text-[9px] uppercase font-bold text-green-600 tracking-widest">
                                                Open Now
                                            </span>
                                        </div>
                                        <p className="text-xl font-serif text-[#2C2420]">
                                            Mon — Sun: 07:00 — 22:00
                                        </p>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="group flex gap-6 items-start">
                                    <div className="p-4 bg-white shadow-sm rounded-full text-[#4A3728] group-hover:bg-[#4A3728] group-hover:text-white transition-colors duration-500">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold uppercase text-[10px] tracking-[0.2em] text-[#A39284] mb-2">
                                            Contact
                                        </p>
                                        <p className="text-xl font-serif text-[#2C2420] hover:text-[#E9C46A] cursor-pointer transition-colors">
                                            +91-9901546484
                                        </p>
                                        <p className="text-sm text-[#6B5E57] mt-1">
                                            contact@auraudupi.in
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Visual/Map */}
                        <div className="lg:col-span-7 relative">
                            <div className="relative h-[300px] sm:h-[400px] md:h-[600px] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl group">

                                {/* Main Image */}
                                <img
                                    src="https://content3.jdmagicbox.com/v2/comp/udupi/r4/0820px820.x820.230519063842.g5r4/catalogue/aura-bliss-in-every-bite-thenkpete-udupi-bakeries-osceyo5qz7.jpg"
                                    alt="Aura Interior"
                                    className="w-full h-full object-cover object-center 
               grayscale-[0.1] sm:grayscale-[0.3]
               sm:group-hover:grayscale-0 
               sm:group-hover:scale-105 
               transition-all duration-700"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/20 sm:bg-black/10 sm:group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">

                                    {/* CTA Button */}
                                    <button className="
      bg-white/90 backdrop-blur-md 
      px-6 py-3 sm:px-10 sm:py-5 
      text-[10px] sm:text-[11px] 
      font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] 
      text-black flex items-center gap-2 sm:gap-4 
      hover:bg-[#E9C46A] hover:text-white 
      transition-all duration-300
      opacity-100 sm:opacity-0 
      translate-y-0 sm:translate-y-4 
      sm:group-hover:translate-y-0 
      sm:group-hover:opacity-100
    ">
                                        Get Directions
                                        <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                                    </button>

                                </div>

                            </div>

                            {/* Decorative Offset Frame */}
                            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-[12px] border-[#E9C46A]/20 -z-10 rounded-2xl"></div>
                        </div>

                    </div>
                </div>
            </section>

            <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out;
        }
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
        </div>
    );
};

export default Home;