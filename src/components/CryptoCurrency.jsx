import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useGetCoinsQuery } from '../services/cryptoApi'

const CryptoCurrency = ({ simplified }) => {
    const count = simplified ? 12 : 100;

    const [searchTerm, setSearchTerm] = useState('');
    const coins = useGetCoinsQuery(count);
    // console.log(coins)
    return (
        <div className='mb-6 mx-3'>
            <input type='search' className='flex w-full justify-center border px-2 py-2 mr-2' onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search Crypto Currency Here..' />
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 cursor-pointer'>
                {
                    coins.currentData?.data.coins && coins.currentData.data.coins.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((coin, index) => (
                        <Link className='overflow-hidden' to={`/crypto/${coin.uuid}`} key={index}>
                            <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 overflow-hidden duration-300'>
                                <div className='border px-5 py-3 '>
                                    <div className='flex justify-between shrink-0'>
                                        <div className='flex gap-x-3'>
                                            <p>{coin.rank}.</p>
                                            <p className='text-blue-700'> {coin.name}</p>
                                        </div>
                                        <p className=''>
                                            <img className='h-6 w-6 object-cover' src={coin.iconUrl} alt="" />
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <p>Price: {Math.round(coin.price * 100) / 100}</p>
                                        <p>Market Cap: {Math.round((coin.marketCap / 1000000000) * 100) / 100} B</p>
                                        <p>Daily Change: {coin.change}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div >
        </div >
    )
}

export default CryptoCurrency