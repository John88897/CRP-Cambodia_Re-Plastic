import { useState } from 'react'
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa'

function ContactUs() {
    const [form, setForm] = useState({
        fullName: '', company: '', email: '', phone: '', message: ''
    });
    const [focused, setFocused] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        // hook up your submit logic here
    };

    const fields = [
        { name: 'fullName', label: 'Full Name', icon: FaUser, type: 'text' },
        { name: 'company', label: 'Company', icon: FaBuilding, type: 'text' },
        { name: 'email', label: 'Email', icon: FaEnvelope, type: 'email' },
        { name: 'phone', label: 'Phone', icon: FaPhone, type: 'tel' },
    ];

    return (
        <section className='relative bg-[#f0f4f1] py-20 px-4 overflow-hidden'>
            {/* Decorative background blobs */}
            <div className='absolute -top-20 -left-20 w-72 h-72 bg-[#166837]/10 rounded-full blur-3xl'></div>
            <div className='absolute -bottom-20 -right-20 w-96 h-96 bg-[#166837]/10 rounded-full blur-3xl'></div>

            <div className='relative max-w-3xl mx-auto bg-white rounded-2xl shadow-xl shadow-black/5 p-8 sm:p-12'>
                {/* Heading */}
                <div className='mb-10'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-[#166837] mb-2'>
                        Contact
                    </h2>
                    <div className='w-14 h-1 bg-[#166837] rounded-full'></div>
                    <p className='text-gray-500 mt-4 text-sm sm:text-base'>
                        Have a question or want to work together? Fill out the form below and we'll get back to you.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid sm:grid-cols-2 gap-6'>
                        {fields.map(({ name, label, icon: Icon, type }) => (
                            <div
                                key={name}
                                className={`relative flex items-center border rounded-xl px-4 py-3.5 transition-all duration-300
                                    ${focused === name
                                        ? 'border-[#166837] shadow-md shadow-[#166837]/10 -translate-y-0.5'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <input
                                    type={type}
                                    name={name}
                                    value={form[name]}
                                    onChange={handleChange}
                                    onFocus={() => setFocused(name)}
                                    onBlur={() => setFocused(null)}
                                    placeholder={label}
                                    className='w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 pr-8'
                                />
                                <Icon
                                    className={`absolute right-4 transition-colors duration-300 ${
                                        focused === name ? 'text-[#166837]' : 'text-gray-300'
                                    }`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Message */}
                    <div
                        className={`relative border rounded-xl px-4 py-3.5 transition-all duration-300
                            ${focused === 'message'
                                ? 'border-[#166837] shadow-md shadow-[#166837]/10 -translate-y-0.5'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                    >
                        <textarea
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            onFocus={() => setFocused('message')}
                            onBlur={() => setFocused(null)}
                            placeholder='Message'
                            rows={6}
                            className='w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 resize-none'
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type='submit'
                        className='group inline-flex items-center gap-3 bg-[#166837] text-white font-semibold uppercase text-sm tracking-wide px-8 py-3.5 rounded-xl
                            transition-all duration-300 hover:bg-[#1B5118] hover:shadow-lg hover:shadow-[#166837]/30 hover:-translate-y-0.5
                            active:translate-y-0 active:shadow-none'
                    >
                        Send
                        <FaPaperPlane className='text-xs transition-transform duration-300 group-hover:translate-x-1' />
                    </button>
                </form>
            </div>
        </section>
    )
}
export default ContactUs