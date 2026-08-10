import { useState } from 'react'
import logo from '../assets/reLogo.png'
import phone from '../assets/phone.png'
import { Link, NavLink } from 'react-router-dom';
import { FaYoutube, FaLinkedin, FaFacebook, FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const navLinks = [
    { name: 'Home', path: '/', end: true },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Service', path: '/service' },
    { name: 'Contact Us', path: '/contactus' },
];

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50 bg-white shadow-sm'>
            {/* Top bar */}
            <div className='bg-[#166837] px-4 py-2 flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2 pr-3 border-r border-white/30'>
                        <img className='w-4 sm:w-5' src={phone} alt="phone" />
                        <span className='text-white text-xs sm:text-sm whitespace-nowrap'>
                            +855 - 16789703
                        </span>
                    </div>
                    <div className=' flex xs:flex items-center gap-3 text-white text-sm sm:text-base'>
                        <FaFacebook className='cursor-pointer hover:text-white/70 transition-colors' />
                        <FaLinkedin className='cursor-pointer hover:text-white/70 transition-colors' />
                        <FaYoutube className='cursor-pointer hover:text-white/70 transition-colors' />
                    </div>
                </div>

                <div className='flex items-center gap-2 text-white cursor-pointer'>
                    <span className='hidden sm:block text-sm font-sans'>Search</span>
                    <FaSearch className='text-sm sm:text-base' />
                </div>
            </div>

            {/* Main nav */}
            <div className='flex items-center justify-between h-[70px] sm:h-[90px] px-4 sm:px-6'>
                {/* Logo */}
                <Link to="/" className='flex items-center gap-2 shrink-0'>
                    <img className='w-12 sm:w-16 lg:w-20' src={logo} alt="logo" />
                    <div className='font-bold text-[#1B5118] leading-tight text-[10px] xs:text-xs sm:text-base lg:text-lg'>
                        <p>CAMBODIA</p>
                        <p>RE-PLASTIC</p>
                    </div>
                </Link>

                {/* Backdrop (mobile) */}
                {open && (
                    <div className="menu-backdrop" onClick={() => setOpen(false)}></div>
                )}

                {/* Nav links */}
                <ul className={`menu ${open ? 'active' : ''}`}>
                    <button className="close-btn" onClick={() => setOpen(false)}>
                        <FaTimes />
                    </button>

                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                end={link.end}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Burger */}
                <button
                    className="burger"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <FaBars />
                </button>
            </div>
        </header>
    )
}
export default Header