import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="hidden md:block h-screen pt-7 px-5 text-white bg-[#0B0B35] w-44 ">
            <span className='text-xl text-blue-600'><Link to='/'>CRYPTOVERSE</Link></span>
            <div className='grid text-md gap-y-5 pt-8 text-gray-300 '>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="/cryptocurrencies">Crypto Currency</Link>
                </span>
                <span>
                    <Link to="/news">News</Link></span>
            </div>
        </div>
    )
}

export default Navbar