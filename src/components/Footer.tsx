import React from 'react'
import Container from './Container'
import Logowhite from '../assets/logo-white.svg'
import { Link } from 'react-router-dom'
import Button from './Button'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuDribbble } from "react-icons/lu";
import { SiBehance } from "react-icons/si";
import { FaPinterest } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import Consult from './Consult'
const Footer = () => {
    return (
        <>
            <Consult />
            <footer>
                <div className="bg-black">
                    <Container>
                        <div className="grid grid-cols-12 py-5">
                            <div className="col-span-4 self-center">
                                <img src={Logowhite} alt="Logo for White BG" />
                            </div>
                            <div className="col-span-8">
                                <div className="flex justify-end gap-6 items-center">
                                    <p className='text-white text-2xl font-semibold text-end'>
                                        Book a strategy for your business with our UX experts directly.
                                    </p>
                                    <Button variant='secondary' className='border-[1px] border-white !p-5 !ring-0 text-white hover:text-black rounded-full'>
                                        Get UX Expert Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="bg-radial-gradient py-[70px] pb-[120px] relative">
                    <Container>
                        <div className="flex justify-between w-100 flex-col sm:flex-row">
                            <div className="inline-block">
                                <p className='text-black font-semibold text-[26px] mb-11'>
                                    Services
                                </p>
                                <ul className='space-y-10'>
                                    <li className='text-black'>
                                        <Link to=''>
                                            Product UX Audit
                                        </Link>


                                    </li>
                                    <li className="text-black">
                                        <Link to=''>
                                            Design Sprints
                                        </Link>

                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            UX Consultancy
                                        </Link>
                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            Accessibility
                                        </Link>
                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            UX Strategy
                                        </Link>

                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            UI Branding
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="inline-block">
                                <p className='text-black font-semibold text-[26px] mb-11'>
                                    Links
                                </p>
                                <ul className='space-y-10'>

                                    <li className="text-black">
                                        <Link to=''>
                                            About Agency
                                        </Link>


                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            Latest News & Blog
                                        </Link>


                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            Meet The Team
                                        </Link>


                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            Popular Services
                                        </Link>

                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            Testimonials
                                        </Link>
                                    </li>

                                    <li className='text-black'>
                                        <Link to=''>
                                            Need a Career?
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="inline-block">
                                <p className='text-black font-semibold text-[26px] mb-11'>
                                    Special
                                </p>
                                <ul className='space-y-10'>
                                    <li className='text-black'>
                                        <Link to=''>
                                            Market Place
                                        </Link>
                                    </li>
                                    <li className="text-black">
                                        <Link to=''>
                                            Brands
                                        </Link>
                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            NFT Design
                                        </Link>
                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            Admin Theme
                                        </Link>
                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            Website Theme
                                        </Link>
                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            App Theme
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="inline-block">
                                <p className='text-black font-semibold text-[26px] mb-11'>
                                    About
                                </p>
                                <ul className='space-y-10'>
                                    <li className='text-black'>
                                        <Link to=''>
                                            About
                                        </Link>
                                    </li>
                                    <li className="text-black">
                                        <Link to=''>
                                            Leadership
                                        </Link>
                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            Blogs
                                        </Link>
                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            Contact us
                                        </Link>
                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            Help.
                                        </Link>
                                    </li>
                                    <li className='text-black'>
                                        <Link to=''>
                                            Privacy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                    <div className="py-5 border-t-[1px] border-t-black absolute bottom-0 w-full">
                        <Container>
                            <div className="grid grid-cols-12">
                                <div className="col-span-4 self-center">
                                    <p className='text-[14px] text-black '>
                                        All rights reserved by UIUX DEN. 2023
                                    </p>
                                </div>
                                <div className="col-span-8">
                                    <div className="flex gap-10 justify-end items-center">
                                        <Link to=''>
                                            <FaTwitter color='#1EA1F2' size={32} />
                                        </Link>
                                        <Link to='' className='bg-white rounded-full'>
                                            <FaFacebook color='#0062E0' size={32} />
                                        </Link>
                                        <Link to='' className='bg-white h-[20px] w-[28px] flex items-center rounded-[5px]'>
                                            <FaLinkedin color='#0A66C2' size={32} />
                                        </Link>
                                        <Link to=''>
                                            <FaInstagram color='#E1306C' size={32} />
                                        </Link>
                                        <Link to='' className='flex'>
                                            <span className='bg-[#EA4C89] rounded-full'>
                                                <LuDribbble color='#C32361' size={32} />
                                            </span>
                                        </Link>
                                        <Link to='' className='flex'>
                                            <SiBehance color='#191919' size={32} />

                                        </Link>

                                        <Link to='' className='bg-white rounded-full'>
                                            <FaPinterest color='#BB0F23' size={32} />
                                        </Link>
                                        <Link to=''>
                                            <FaMedium color='#000' size={32} />
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
