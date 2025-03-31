import React, { useState } from 'react'
import Logo from '../../assets/LogoLetras.png'

const navbarLinks = [
    {
        id: 1,
        title: "Reseñas",
        link: "#testimonials"
    },
    {
        id: 2,
        title: "Politicas",
        link: "#politicas"
    },
    {
        id: 3,
        title: "Inicio",
        link: "#"
    },
    {
        id: 4,
        title: "¿Como comprar?",
        link: "#information"
    },
    {
        id: 5,
        title: "Envios",
        link: "#envios"
    },
]

const navbarSocialLinks = [
    {
        id: 1,
        title: "Instagram",
        link: "https://www.instagram.com/mayorista_catita/",
        icon: "bi bi-instagram"
    },
    {
        id: 2,
        title: "Whatsapp",
        link: "https://www.whatsapp.com/catalog/56996189098/?app_absent=0",
        icon: "bi bi-whatsapp"
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='fixed top-0 left-0 bg-[#BE5985] w-full z-50 shadow-xl'>
            <div className='flex justify-between items-center sm:px-12 sm:py-2 px-4 py-3'>

                <div>
                    <img src={Logo} alt='Logo del sitio' className='h-24 w-24' />
                </div>

                {/* Boton hamburuesa */}
                <button onClick={toggleMenu} className='md:hidden text-white'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>

                        {isOpen ? (<path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                        />) : (<path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16m-7 6h7'
                        />)}
                    </svg>
                </button>

                {/* Navbar PC */}
                <div className='hidden md:block'>
                    <ul className='flex sm:space-x-8 space-x-4'>
                        {navbarLinks.map((link) => (
                            <li key={link.id}>
                                <a className='text-white sm:text-lg text-sm hover:text-[#FFEDFA] transition-transform hover:scale-110 transform inline-block duration-300'
                                    href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div className='hidden md:block'>
                    <ul className='flex space-x-4'>
                        {navbarSocialLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    tarjet="_blank"
                                    rel='noopener noreferrer'
                                    className='inline-block transition-transform hover:scale-125 transform duration-300'
                                    href={link.link}>
                                    <i className={`${link.icon} sm:2xl text-lg text-white hover:text-[#FFEDFA] transition-all duration-300`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Navbar movil */}
            <div className={`md:hidden absolute w-full bg-[#BE5985] transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul className='flex flex-col px-4 py-2'>
                    {navbarLinks.map((link) => (
                        <li key={link.id} className='py-2 text-center'>
                            <a className='text-white hover:text-[#E69DB8]' onClick={() => setIsOpen(false)}
                                href={link.link}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <ul className='flex space-x-4 px-4 py-2 border-t border-white justify-center'>
                    {navbarSocialLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                tarjet="_blank"
                                rel='noopener noreferrer'
                                className='inline-block'
                                href={link.link}
                                onClick={() => setIsOpen(false)}
                            >
                                <i className={`${link.icon} text-lg text-white hover:text-[#E69DB8]`}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar