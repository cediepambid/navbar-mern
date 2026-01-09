import React, { useState } from 'react'
import { NavbarMenu } from '../../mockData/data'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <nav>
                <div className='container flex justify-between items-center py-8'>
                    {/* Logo section */}
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                        <FaDumbbell />
                        <p>Coders</p>
                        <p className='text-[var(--color-secondary)]'>Gym</p>
                    </div>
                    {/* Menu section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6'>
                            {
                                NavbarMenu.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a href={item.link} className='inline-block py-3 hover:text-[var(--color-primary)]'>
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* Icons section */}
                    <div className='flex items-center gap-4'>
                        <button className='text-2xl hover:bg-[var(--bg-primary)] hover:text-white rounded-full p-2 duration-200'>
                            <CiSearch />
                        </button>
                        <button className='text-2xl hover:bg-[var(--bg-primary)] hover:text-white rounded-full p-2 duration-200'>
                            <CiShoppingCart />
                        </button>
                        <button className='hover:bg-[var(--bg-primary)] text-[var(--color-primary)] font-semibold hover:text-white rounded-md border-2 border-[var(--color-primary)] px-6 py-2 duration-200 hidden md:block'>
                            Login
                        </button>
                    </div>
                    {/* Mobile hamburger Menu section */}
                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <MdMenu className='text-4xl' />
                    </div>
                </div>
            </nav>
            {/* Mobile Sidebar section */}
            <ResponsiveMenu open={open} />
        </>
    )
}

export default Navbar

{/* <CiSearch /> */ }