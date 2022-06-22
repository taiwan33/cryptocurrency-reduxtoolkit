import React from 'react'
import { Link } from 'react-router-dom';
import { useGetCoinsQuery } from '../services/cryptoApi'
import ChartBar from './Chart';
import CryptoCurrency from './CryptoCurrency';
import News from './News';

const Homepage = () => {
    const { data, isFetching } = useGetCoinsQuery(10);
    const totalData = data?.data?.stats;
    // console.log(totalData);
    if (isFetching) return '...Loading ';
    return (
        <div className='pb-3'>
            {!(data === undefined) ? (
                <div>
                    <span className='flex justify-center text-3xl font-semibold py-3 text-blue-900'>Global Crypto Stats </span>
                    <div className='flex justify-center'>
                        <ChartBar data={totalData} />
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-[17%] gap-y-3 md:gap-y-4 lg:gap-y-7 text-green-800'>
                        <span>Total Crypto Currencies<p>{totalData.total}</p></span>
                        <span>Total Exchanges<p>{totalData.totalExchanges}</p></span>
                        <span>Total Market Cap<p>{Math.round((totalData.totalMarketCap / 1000000000) * 100) / 100} B</p></span>
                        <span>Total Volume<p>{Math.round((totalData.total24hVolume / 1000000000) * 100) / 100} B</p></span>
                        <span>Total Markets<p>{totalData.totalMarkets}</p></span>
                    </div>
                </div>
            ) : (
                <p> Loading</p>
            )
            }
            <div className='flex justify-between mt-7'>
                <span className=' text-lg lg:text-xl font-semibold mx-3 my-3'>Top 12 Crypto Currencies in the world</span>
                <span className='text-blue-900 mr-3 flex items-center'><Link to='/cryptocurrencies' >Show More</Link></span>
            </div>
            <CryptoCurrency simplified />

            <div className='flex justify-between'>
                <span className=' text-lg lg:text-xl font-semibold mx-3 my-3'>Latest Crypto News</span>
                <span className='text-blue-900 mr-3 flex items-center'>
                    <Link to='/news' >Show More</Link>
                </span>
            </div>
            <News simplified />
        </div>
    )
}

export default Homepage