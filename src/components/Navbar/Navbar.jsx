import React from 'react'

const navbarLinks = [
    {
        id: 1,
        title: "Inicio",
        link: "/"
    },
    {
        id: 2,
        title: "Nosotros",
        link: "#"
    },
    {
        id: 3,
        title: "¿Como comprar?",
        link: "#"
    }
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
        link: "wa.me/c/56996189098",
        icon: "bi bi-whatsapp"
    },
]

const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

                <div>
                    <img />
                </div>

                <div>
                    <ul className='flex sm:space-x-8 space-x-4'>
                        {navbarLinks.map((link) => (
                            <li key={link.id}>
                                <a className='text-white sm:text-lg text-sm hover:text-sky-100 transition-transform hover:scale-110 transform inline-block duration-300' href={link.Link}>{link.title}</a>
                            </li>
                        ))}	
                    </ul>
                </div>

                <div>
                    <ul>
                        {navbarSocialLinks.map((link) => (
                            <li key={link.id}>
                                <a className='text-white' href={link.Link}>
                                    <i className={link.icon}></i>
                                </a>
                            </li>
                        ))}	
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar