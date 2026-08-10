import { FaLeaf, FaBullseye, FaUsers, FaGlobeAsia, FaRecycle, FaHandsHelping } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// Add your background photo here — drop the image into src/assets and update this import
import heroBg from '../assets/plastic-pellets.jpg'

const values = [
    {
        icon: FaLeaf,
        title: 'Sustainability first',
        desc: 'Every decision we make is weighed against its real environmental impact, not just the bottom line.',
    },
    {
        icon: FaUsers,
        title: 'Community rooted',
        desc: 'We work with local collectors and communities, building livelihoods around waste that used to go ignored.',
    },
    {
        icon: FaBullseye,
        title: 'Quality without compromise',
        desc: 'Recycled doesn\u2019t mean lesser. Our material meets the same standards manufacturers expect from virgin plastic.',
    },
];

const timeline = [
    { year: '2009', text: 'Founded with a single collection route and a handful of local partners.' },
    { year: '2014', text: 'Opened our first processing facility, moving from collection into sorting and washing.' },
    { year: '2019', text: 'Scaled to pelletizing, supplying recycled raw material directly to manufacturers.' },
    { year: 'Today', text: 'A full-cycle recycling operation serving partners across the region.' },
];

function AboutUs() {
    return (
        <div className='bg-white'>
            {/* Hero */}
            <section
                className='relative overflow-hidden bg-cover bg-center'
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                {/* Dark overlay for text legibility on top of the photo */}
                <div className='absolute inset-0 bg-[#0f4a26]/85'></div>
                {/* Subtle dot texture on top of the overlay */}
                <div className='absolute inset-0 opacity-10'
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }}
                ></div>
                <div className='relative max-w-5xl mx-auto px-6 py-24 sm:py-32 text-center'>
                    <span className='inline-block text-[#8fd4a8] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4'>
                        About Us
                    </span>
                    <h1 className='text-4xl sm:text-6xl font-bold text-white leading-tight mb-6'>
                        We believe waste<br />
                        <span className='text-[#8fd4a8]'>is just material<br className='hidden sm:block' /> waiting for a second life.</span>
                    </h1>
                    <p className='text-white/70 max-w-xl mx-auto text-base sm:text-lg'>
                        Cambodia Re-Plastic exists to keep plastic in circulation and out of landfills —
                        turning what's discarded into material industries can actually build with.
                    </p>
                </div>
            </section>

            {/* Mission statement */}
            <section className='max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center'>
                <FaRecycle className='text-3xl text-[#166837] mx-auto mb-6' />
                <p className='text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug'>
                    "Our mission is simple: make recycling plastic easier, more reliable, and more
                    valuable than throwing it away."
                </p>
            </section>

            {/* Story / timeline */}
            <section className='bg-[#f6f9f7] py-20 sm:py-28'>
                <div className='max-w-5xl mx-auto px-6'>
                    <div className='mb-16 max-w-lg'>
                        <span className='text-[#166837] text-sm font-semibold tracking-wide uppercase'>
                            Our Story
                        </span>
                        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mt-2'>
                            Built one route at a time.
                        </h2>
                    </div>

                    <div className='relative pl-8 sm:pl-0'>
                        <div className='absolute left-2 sm:left-[88px] top-2 bottom-2 w-px bg-gray-200'></div>

                        <div className='space-y-10'>
                            {timeline.map(({ year, text }) => (
                                <div key={year} className='relative flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8'>
                                    <span className='sm:w-20 shrink-0 text-sm font-bold text-[#166837]'>
                                        {year}
                                    </span>
                                    <div className='absolute -left-8 sm:left-[80px] top-1 w-3 h-3 rounded-full bg-[#166837] ring-4 ring-[#f6f9f7]'></div>
                                    <p className='text-gray-600 text-sm sm:text-base leading-relaxed sm:pl-8'>
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className='max-w-6xl mx-auto px-6 py-20 sm:py-28'>
                <div className='mb-16 max-w-lg'>
                    <span className='text-[#166837] text-sm font-semibold tracking-wide uppercase'>
                        What We Stand For
                    </span>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mt-2'>
                        The values behind the work.
                    </h2>
                </div>

                <div className='grid sm:grid-cols-3 gap-6'>
                    {values.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className='bg-white rounded-2xl p-7 border border-gray-100 transition-all duration-300
                                hover:border-[#166837]/30 hover:shadow-lg hover:shadow-[#166837]/5 hover:-translate-y-1'
                        >
                            <div className='w-12 h-12 rounded-xl bg-[#166837]/10 flex items-center justify-center mb-5'>
                                <Icon className='text-xl text-[#166837]' />
                            </div>
                            <h3 className='font-bold text-gray-900 mb-2'>{title}</h3>
                            <p className='text-sm text-gray-500 leading-relaxed'>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Impact strip */}
            <section className='border-y border-gray-100'>
                <div className='max-w-5xl mx-auto px-6 py-14 grid grid-cols-3 gap-6 sm:gap-12'>
                    <div className='text-center'>
                        <FaGlobeAsia className='text-2xl text-[#166837] mx-auto mb-2' />
                        <p className='text-2xl sm:text-3xl font-bold text-gray-900'>6</p>
                        <p className='text-xs sm:text-sm text-gray-500 mt-1'>Provinces served</p>
                    </div>
                    <div className='text-center'>
                        <FaRecycle className='text-2xl text-[#166837] mx-auto mb-2' />
                        <p className='text-2xl sm:text-3xl font-bold text-gray-900'>500+</p>
                        <p className='text-xs sm:text-sm text-gray-500 mt-1'>Tons recycled monthly</p>
                    </div>
                    <div className='text-center'>
                        <FaHandsHelping className='text-2xl text-[#166837] mx-auto mb-2' />
                        <p className='text-2xl sm:text-3xl font-bold text-gray-900'>120+</p>
                        <p className='text-xs sm:text-sm text-gray-500 mt-1'>Partner businesses</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='bg-[#166837] py-16 sm:py-20'>
                <div className='max-w-3xl mx-auto px-6 text-center'>
                    <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3'>
                        Want to be part of the loop?
                    </h2>
                    <p className='text-white/70 mb-8 text-sm sm:text-base'>
                        Whether you're a business, a collector, or just curious how it all works — we'd love to hear from you.
                    </p>
                    <Link
                        to='/contactus'
                        className='inline-block bg-white text-[#166837] font-semibold uppercase text-sm tracking-wide px-8 py-3.5 rounded-xl
                            transition-all duration-300 hover:bg-[#8fd4a8] hover:-translate-y-0.5'
                    >
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    )
}
export default AboutUs