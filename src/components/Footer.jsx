import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='grid py-5 text-white justify-center text-center bg-[#0B0B35] w-full'>
            <p>CRYPTOVERSE</p>
            <p>All Rights Reserved</p>
            <div className='flex text-sm text-blue-700 gap-x-4 '>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="/exchange">Exchange</Link>
                </span>
                <span>
                    <Link to="/news">News</Link></span>
            </div>
        </div>
    )
}

export default Footer