import { Link } from 'react-router-dom'
import logo from '../assets/reLogo.png'
import {
    FaFacebook, FaLinkedin, FaYoutube, FaTiktok,
    FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight
} from 'react-icons/fa'

const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Service', path: '/service' },
    { name: 'Contact Us', path: '/contactus' },
];

const socials = [
    { icon: FaFacebook, url: 'https://facebook.com' },
    { icon: FaLinkedin, url: 'https://linkedin.com' },
    { icon: FaYoutube, url: 'https://youtube.com' },
    { icon: FaTiktok, url: 'https://tiktok.com' },
];

function Footer() {
    return (
        <footer className='bg-[#0f4a26] text-white'>
            <div className='max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                {/* Brand */}
                <div>
                    <Link to='/' className='flex items-center gap-2 mb-4'>
                        <img src={logo} alt='logo' className='w-12' />
                        <div className='font-bold text-white leading-tight text-sm'>
                            <p>CAMBODIA</p>
                            <p>RE-PLASTIC</p>
                        </div>
                    </Link>
                    <p className='text-white/60 text-sm leading-relaxed'>
                        Full-cycle plastic recycling — collecting, processing, and supplying
                        recycled material across Cambodia.
                    </p>
                </div>

                {/* Quick links */}
                <div>
                    <h3 className='font-bold uppercase text-sm tracking-wide mb-5'>Quick Links</h3>
                    <ul className='space-y-3'>
                        {quickLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className='group flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors duration-300'
                                >
                                    <FaArrowRight className='text-xs opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0' />
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className='font-bold uppercase text-sm tracking-wide mb-5'>Contact</h3>
                    <ul className='space-y-4'>
                        <li className='flex items-start gap-3 text-white/60 text-sm'>
                            <FaMapMarkerAlt className='mt-1 shrink-0' />
                            <span>Phnom Penh, Cambodia</span>
                        </li>
                        <li className='flex items-center gap-3 text-white/60 text-sm'>
                            <FaPhone className='shrink-0' />
                            <span>+855 - 16789703</span>
                        </li>
                        <li className='flex items-center gap-3 text-white/60 text-sm'>
                            <FaEnvelope className='shrink-0' />
                            <span>info@cambodiareplastic.com</span>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className='font-bold uppercase text-sm tracking-wide mb-5'>Follow Us</h3>
                    <div className='flex gap-3'>
                        {socials.map(({ icon: Icon, url }, i) => (
                            <a
                                key={i}
                                href={url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                                    text-white hover:bg-white hover:text-[#166837] transition-all duration-300'
                            >
                                <Icon className='text-sm' />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className='border-t border-white/10'>
                <div className='max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50'>
                    <p>© {new Date().getFullYear()} Cambodia Re-Plastic. All rights reserved.</p>
                    <p>Built for a cleaner future 🌱</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer