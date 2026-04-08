// components/footer.jsx (using react-icons)
import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaCreditCard,
    FaTruck,
    FaHeart
} from 'react-icons/fa';

const Footer = () => {
    const footerLinks = {
        Explore: ['All Items', 'Signature Cakes', 'Sourdough Breads', 'Berlines', 'Aromatic Coffee'],
        Support: ['FAQ', 'Delivery Info', 'Returns', 'Gift Cards', 'Contact Us'],
        Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility']
    };

    const socialIcons = [
        { Icon: FaFacebook, href: '#', color: 'hover:bg-[#1877f2]' },
        { Icon: FaInstagram, href: '#', color: 'hover:bg-[#e4405f]' },
        { Icon: FaTwitter, href: '#', color: 'hover:bg-[#1da1f2]' },
        { Icon: FaYoutube, href: '#', color: 'hover:bg-[#ff0000]' }
    ];

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className='flex flex-row gap-5 items-center' >

                            <img src='/Aura.avif' className='h-15 w-15 rounded-full' />
                            <h2 className="text-3xl font-bold">
                                <span className="text-[#BA153F]">AURA</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Crafting moments of quiet luxury. Artisan baked goods made with passion and the finest ingredients.
                        </p>
                        <div className="flex space-x-3">
                            {socialIcons.map(({ Icon, href, color }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:scale-110 ${color}`}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="space-y-4">
                            <h3 className="text-lg font-semibold relative inline-block">
                                {title}
                                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#BA153F]"></span>
                            </h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-[#BA153F] transition-colors duration-300 flex items-center gap-2 group">
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-[#BA153F] transition-all duration-300"></span>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact & Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold relative inline-block">
                            Visit Us
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#BA153F]"></span>
                        </h3>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                                <FaMapMarkerAlt size={18} className="text-[#BA153F] flex-shrink-0 mt-0.5" />
                                <span>
                                    AURA café, G6, Grassland Commercials, <br />
                                    GB Panth Road, Udupi, 576-103
                                </span>
                            </li>

                            <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <FaPhone size={18} className="text-[#BA153F]" />
                                <span>+91-9901546484</span>
                            </li>

                            <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <FaEnvelope size={18} className="text-[#BA153F]" />
                                <span>contact@auraudupi.in</span>
                            </li>

                            <li className="flex items-center gap-3 text-gray-400">
                                <FaClock size={18} className="text-[#BA153F]" />
                                <span>Mon-Sun: 07:00 AM - 10:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Features Bar */}
                <div className="border-t border-gray-800 py-8 mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <FaTruck size={28} className="text-[#BA153F] group-hover:scale-110 transition-transform duration-300" />
                            <div>
                                <p className="font-semibold">24/7 Delivery</p>
                                <p className="text-sm text-gray-400">Free delivery on orders $50+</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <FaClock size={28} className="text-[#BA153F] group-hover:scale-110 transition-transform duration-300" />
                            <div>
                                <p className="font-semibold">24/7 Online Ordering</p>
                                <p className="text-sm text-gray-400">Order anytime, anywhere</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <FaCreditCard size={28} className="text-[#BA153F] group-hover:scale-110 transition-transform duration-300" />
                            <div>
                                <p className="font-semibold">Safe & Secure Payment</p>
                                <p className="text-sm text-gray-400">Multiple payment options</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <FaHeart size={28} className="text-[#BA153F] group-hover:scale-110 transition-transform duration-300" />
                            <div>
                                <p className="font-semibold">Loyalty Rewards</p>
                                <p className="text-sm text-gray-400">Earn points with every purchase</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} AURA. All rights reserved. Crafted with passion for quiet luxury.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;