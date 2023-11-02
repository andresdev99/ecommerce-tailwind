import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useShopContext } from '../../Context'

const Navbar = () => {
    const { count, setScrolled, scrolled }   = useShopContext()
    const activeStyle = 'underline'


    useEffect(() => {
        // Función para manejar el desplazamiento
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Agregar un evento de desplazamiento al cargar el componente
        window.addEventListener('scroll', handleScroll);

        // Eliminar el evento de desplazamiento al descargar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let navItems = [
        // Left Navbar Items
        [
            {
                to: '/',
                text: 'BuyIt',
                className: 'font-semibold text-lg'
            },
            {
                to: '/',
                text: 'All',
            },
            {
                to: '/clothes',
                text: 'clothes',
            },
            {
                to: '/electronics',
                text: 'electronics',
            },
            {
                to: '/furnitures',
                text: 'furnitures',
            },
            {
                to: '/toys',
                text: 'toys',
            },
            {
                to: '/others',
                text: 'others',
            }
        ],
        // Right Navbar Items
        [
            {
                to: '/email',
                text: 'Penny@Teti.com',
                className: 'text-black/60'
            },
            {
                to: '/my-orders',
                text: 'My Orders',
            },
            {
                to: '/my-account',
                text: 'My Account',
            },
            {
                to: '/signin',
                text: 'Sign in',
            },
            {
                to: '/shoppcar',
                text: '🛒 ' + count,
                className: 'bg-black text-white text-xl font-bold rounded p-2'
            }
        ]
    ]




    // Aplicar una clase CSS para el navbar cuando se desplace
    const navbarClass = `flex justify-between top-0 items-center fixed z-10 w-full py-5 px-8 text-sm font-light ${scrolled ? 'hidden' : 'show'}`;



    return (
        <>
            <nav className={navbarClass}>
                {
                    navItems.map((items, nav) => (
                        <ul className='flex items-center gap-3' key={nav}>
                            {
                                items.map((item, index) => (
                                    <li className={item.className} key={index}>
                                        <NavLink
                                            to={item.to}
                                            className={({ isActive }) =>
                                                isActive && item.text !== "BuyIt" 
                                                ? activeStyle 
                                                : undefined
                                            }
                                        >
                                            {item.text}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>

                    ))
                }
            </nav>
        </>
    )
}

export default Navbar
