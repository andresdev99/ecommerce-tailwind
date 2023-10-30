import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = 'underline'

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
                text: '🛒 0',
            }
        ]
    ]


    return (
        <>
            <nav
                className='flex justify-between top-0 items-center fixed z-10 w-full py-5 px-8 text-sm font-light'
            >
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
