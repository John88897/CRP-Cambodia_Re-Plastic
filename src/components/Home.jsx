import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    FaChevronLeft, FaChevronRight, FaTruckLoading, FaFilter,
    FaIndustry, FaBoxes, FaLeaf, FaRecycle, FaUsers, FaArrowRight
} from 'react-icons/fa'

// Add your own images here — drop real photos into src/assets and update these imports
import slide1 from '../assets/hero1.jpg'
import slide2 from '../assets/hero2.webp'
import slide3 from '../assets/hero3.webp'
import slide4 from '../assets/hero4.webp'


const slides = [slide1, slide2, slide3, slide4];

const panels = [
    {
        title: 'Vision',
        text: 'Become one of the leading plastic recycling companies in Southeast Asia and beyond.',
        bg: 'bg-[#166837]',
        textColor: 'text-white',
        subColor: 'text-white/80',
    },
    {
        title: 'Mission',
        text: 'Contribute to reducing plastic waste pollution across Cambodia.',
        bg: 'bg-white',
        textColor: 'text-gray-900',
        subColor: 'text-gray-500',
    },
    {
        title: 'Core Values',
        text: '"Integrity - Quality - Creation - Responsibility - Sustainability"',
        bg: 'bg-[#1a3a8f]',
        textColor: 'text-white',
        subColor: 'text-white/80',
    },
];

const stats = [
    { value: '500+', label: 'Tons recycled monthly' },
    { value: '120+', label: 'Partner businesses' },
    { value: '15+', label: 'Years in operation' },
    { value: '4', label: 'Regional collection hubs' },
];

const process = [
    { step: '01', title: 'Collection', icon: FaTruckLoading },
    { step: '02', title: 'Sorting', icon: FaFilter },
    { step: '03', title: 'Processing', icon: FaIndustry },
    { step: '04', title: 'Supply', icon: FaBoxes },
];

function Home() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

    return (
        <div className='bg-white'>
            {/* ---------- Hero carousel ---------- */}
            <section className='relative'>
                <div className='relative w-full h-[400px] sm:h-[550px] lg:h-[650px] overflow-hidden'>
                    {slides.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`slide-${i}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                                ${i === current ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}

                    {/* dark gradient for text legibility if you add hero text later */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent'></div>

                    <button
                        onClick={goPrev}
                        aria-label='Previous slide'
                        className='absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10
                            w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white
                            flex items-center justify-center text-gray-800 shadow-md
                            transition-all duration-200 hover:scale-105'
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={goNext}
                        aria-label='Next slide'
                        className='absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10
                            w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white
                            flex items-center justify-center text-gray-800 shadow-md
                            transition-all duration-200 hover:scale-105'
                    >
                        <FaChevronRight />
                    </button>

                    <div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2'>
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-2 rounded-full transition-all duration-300
                                    ${i === current ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                            ></button>
                        ))}
                    </div>
                </div>

                {/* Vision / Mission / Core Values overlay */}
                <div className='relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-20 sm:-mt-24'>
                    <div className='grid sm:grid-cols-3 shadow-xl rounded-lg overflow-hidden'>
                        {panels.map(({ title, text, bg, textColor, subColor }) => (
                            <div
                                key={title}
                                className={`${bg} px-6 sm:px-8 py-10 sm:py-12 text-center transition-transform duration-300 hover:-translate-y-1`}
                            >
                                <h3 className={`text-lg sm:text-xl font-bold uppercase tracking-wide mb-4 ${textColor}`}>
                                    {title}
                                </h3>
                                <p className={`text-sm sm:text-base leading-relaxed ${subColor}`}>
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- About preview ---------- */}
            <section className='max-w-6xl mx-auto px-6 py-20 sm:py-28 grid lg:grid-cols-2 gap-14 items-center'>
                <div>
                    <span className='text-[#166837] text-sm font-semibold tracking-wide uppercase'>
                        About Us
                    </span>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6'>
                        Turning plastic waste into a resource.
                    </h2>
                    <p className='text-gray-500 leading-relaxed mb-4'>
                        Cambodia Re-Plastic runs the full recycling cycle — from collection to
                        processing to bulk material supply — keeping plastic in circulation
                        instead of in the ground.
                    </p>
                    <Link
                        to='/aboutus'
                        className='inline-flex items-center gap-2 text-[#166837] font-semibold group'
                    >
                        Learn more about us
                        <FaArrowRight className='text-sm transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <div className='bg-[#166837]/5 rounded-2xl p-6 flex flex-col items-start gap-3'>
                        <FaLeaf className='text-2xl text-[#166837]' />
                        <p className='text-sm text-gray-600 leading-relaxed'>Reducing plastic pollution across Cambodia</p>
                    </div>
                    <div className='bg-[#166837]/5 rounded-2xl p-6 flex flex-col items-start gap-3 mt-8'>
                        <FaRecycle className='text-2xl text-[#166837]' />
                        <p className='text-sm text-gray-600 leading-relaxed'>Full-cycle collection to processing</p>
                    </div>
                    <div className='bg-[#166837]/5 rounded-2xl p-6 flex flex-col items-start gap-3'>
                        <FaUsers className='text-2xl text-[#166837]' />
                        <p className='text-sm text-gray-600 leading-relaxed'>120+ partner businesses regionwide</p>
                    </div>
                    <div className='bg-[#166837]/5 rounded-2xl p-6 flex flex-col items-start gap-3 mt-8'>
                        <FaIndustry className='text-2xl text-[#166837]' />
                        <p className='text-sm text-gray-600 leading-relaxed'>In-house processing facilities</p>
                    </div>
                </div>
            </section>

            {/* ---------- Stats strip ---------- */}
            <section className='bg-[#166837] py-14 sm:py-16'>
                <div className='max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8'>
                    {stats.map((s) => (
                        <div key={s.label} className='text-center'>
                            <p className='text-3xl sm:text-4xl font-bold text-white'>{s.value}</p>
                            <p className='text-xs sm:text-sm text-white/70 mt-1'>{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------- Process preview ---------- */}
            <section className='max-w-6xl mx-auto px-6 py-20 sm:py-28'>
                <div className='mb-16 max-w-lg mx-auto text-center'>
                    <span className='text-[#166837] text-sm font-semibold tracking-wide uppercase'>
                        How It Works
                    </span>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mt-2'>
                        From waste to raw material.
                    </h2>
                </div>

                <div className='relative'>
                    <div className='hidden lg:block absolute top-10 left-0 right-0 h-px bg-gray-200'></div>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6'>
                        {process.map(({ step, title, icon: Icon }) => (
                            <div key={step} className='relative group text-center lg:text-left'>
                                <div className='relative z-10 mx-auto lg:mx-0 flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-[#166837] mb-6
                                    transition-all duration-300 group-hover:bg-[#166837] group-hover:scale-105'>
                                    <Icon className='text-2xl text-[#166837] transition-colors duration-300 group-hover:text-white' />
                                </div>
                                <span className='text-xs font-bold text-gray-300 tracking-widest'>{step}</span>
                                <h3 className='text-lg font-bold text-gray-900 mt-1'>{title}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='text-center mt-14'>
                    <Link
                        to='/service'
                        className='inline-flex items-center gap-2 border-2 border-[#166837] text-[#166837] font-semibold uppercase text-sm tracking-wide px-8 py-3.5 rounded-xl
                            transition-all duration-300 hover:bg-[#166837] hover:text-white'
                    >
                        See Our Services
                    </Link>
                </div>
            </section>

            {/* ---------- CTA ---------- */}
            <section className='bg-[#0f4a26] py-16 sm:py-20'>
                <div className='max-w-3xl mx-auto px-6 text-center'>
                    <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3'>
                        Ready to work with us?
                    </h2>
                    <p className='text-white/70 mb-8 text-sm sm:text-base'>
                        Whether you need collection services or bulk recycled material, we're ready to talk.
                    </p>
                    <Link
                        to='/contactus'
                        className='inline-block bg-white text-[#166837] font-semibold uppercase text-sm tracking-wide px-8 py-3.5 rounded-xl
                            transition-all duration-300 hover:bg-[#8fd4a8] hover:-translate-y-0.5'
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    )
}
export default Home