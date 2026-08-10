import { FaTruckLoading, FaFilter, FaIndustry, FaBoxes, FaLeaf, FaCertificate, FaHandshake } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const process = [
    {
        step: '01',
        title: 'Collection',
        desc: 'We gather plastic waste directly from factories, municipalities, and local collection networks across the region.',
        icon: FaTruckLoading,
    },
    {
        step: '02',
        title: 'Sorting',
        desc: 'Every batch is separated by resin type and grade, removing contaminants before it ever reaches the line.',
        icon: FaFilter,
    },
    {
        step: '03',
        title: 'Processing',
        desc: 'Washed, shredded, and pelletized in-house into consistent, ready-to-use recycled raw material.',
        icon: FaIndustry,
    },
    {
        step: '04',
        title: 'Supply',
        desc: 'Delivered in bulk to manufacturers who build it back into packaging, textiles, and consumer goods.',
        icon: FaBoxes,
    },
];

const services = [
    {
        icon: FaTruckLoading,
        title: 'Waste Collection',
        desc: 'Scheduled pickup and collection point partnerships for factories, businesses, and communities.',
    },
    {
        icon: FaIndustry,
        title: 'Material Processing',
        desc: 'Industrial-scale washing, shredding, and pelletizing of PET, HDPE, and mixed plastics.',
    },
    {
        icon: FaBoxes,
        title: 'Bulk Material Supply',
        desc: 'Consistent, quality-checked recycled pellets supplied directly to manufacturers, by the ton.',
    },
    {
        icon: FaHandshake,
        title: 'Business Partnerships',
        desc: 'Custom waste management programs for companies looking to close the loop on their plastic output.',
    },
];

const stats = [
    { value: '500+', label: 'Tons recycled monthly' },
    { value: '120+', label: 'Partner businesses' },
    { value: '15+', label: 'Years in operation' },
];

function Service() {
    return (
        <div className='bg-white'>
            {/* Hero */}
            <section className='relative bg-[#0f4a26] overflow-hidden'>
                <div className='absolute inset-0 opacity-10'
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }}
                ></div>
                <div className='relative max-w-5xl mx-auto px-6 py-24 sm:py-32 text-center'>
                    <span className='inline-block text-[#8fd4a8] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4'>
                        What We Do
                    </span>
                    <h1 className='text-4xl sm:text-6xl font-bold text-white leading-tight mb-6'>
                        From waste to<br />
                        <span className='text-[#8fd4a8]'>raw material.</span>
                    </h1>
                    <p className='text-white/70 max-w-xl mx-auto text-base sm:text-lg'>
                        Cambodia Re-Plastic runs the full recycling cycle — collecting, processing,
                        and supplying quality recycled plastic to manufacturers who build it back into everyday products.
                    </p>
                </div>
            </section>

            {/* Stats strip */}
            <section className='border-b border-gray-100'>
                <div className='max-w-5xl mx-auto px-6 py-10 grid grid-cols-3 gap-6 sm:gap-12'>
                    {stats.map((s) => (
                        <div key={s.label} className='text-center'>
                            <p className='text-2xl sm:text-4xl font-bold text-[#166837]'>{s.value}</p>
                            <p className='text-xs sm:text-sm text-gray-500 mt-1'>{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process — signature element */}
            <section className='max-w-6xl mx-auto px-6 py-20 sm:py-28'>
                <div className='mb-16 max-w-lg'>
                    <span className='text-[#166837] text-sm font-semibold tracking-wide uppercase'>
                        The Process
                    </span>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mt-2'>
                        Every ton follows the same four steps.
                    </h2>
                </div>

                <div className='relative'>
                    {/* connecting line */}
                    <div className='hidden lg:block absolute top-10 left-0 right-0 h-px bg-gray-200'></div>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6'>
                        {process.map(({ step, title, desc, icon: Icon }) => (
                            <div key={step} className='relative group'>
                                <div className='relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-[#166837] mb-6
                                    transition-all duration-300 group-hover:bg-[#166837] group-hover:scale-105'>
                                    <Icon className='text-2xl text-[#166837] transition-colors duration-300 group-hover:text-white' />
                                </div>
                                <span className='text-xs font-bold text-gray-300 tracking-widest'>{step}</span>
                                <h3 className='text-lg font-bold text-gray-900 mt-1 mb-2'>{title}</h3>
                                <p className='text-sm text-gray-500 leading-relaxed'>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service cards */}
            <section className='bg-[#f6f9f7] py-20 sm:py-28'>
                <div className='max-w-6xl mx-auto px-6'>
                    <div className='mb-16 max-w-lg'>
                        <span className='text-[#166837] text-sm font-semibold tracking-wide uppercase'>
                            Our Services
                        </span>
                        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mt-2'>
                            What we offer partners.
                        </h2>
                    </div>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {services.map(({ icon: Icon, title, desc }) => (
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
                </div>
            </section>

            {/* Why us */}
            <section className='max-w-5xl mx-auto px-6 py-20 sm:py-28 grid sm:grid-cols-2 gap-10'>
                <div className='flex gap-4'>
                    <FaLeaf className='text-2xl text-[#166837] shrink-0 mt-1' />
                    <div>
                        <h3 className='font-bold text-gray-900 mb-1'>Real environmental impact</h3>
                        <p className='text-sm text-gray-500 leading-relaxed'>
                            Every ton we process is plastic kept out of landfills and waterways — tracked and reported to every partner.
                        </p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <FaCertificate className='text-2xl text-[#166837] shrink-0 mt-1' />
                    <div>
                        <h3 className='font-bold text-gray-900 mb-1'>Consistent, quality-checked output</h3>
                        <p className='text-sm text-gray-500 leading-relaxed'>
                            Standardized grading means what you order is what arrives, batch after batch.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='bg-[#166837] py-16 sm:py-20'>
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
export default Service