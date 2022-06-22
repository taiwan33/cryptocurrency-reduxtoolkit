import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCoinQuery } from '../services/cryptoApi';
import BarChart from './BarChart';

const CryptoDetails = () => {
    const [timePeriod, setTimePeriod] = useState('7d');
    const { cryptoId } = useParams();
    const data = useGetCoinQuery({ cryptoId, timePeriod });
    const cryptoData = data?.data?.data?.coin;
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
    // console.log(cryptoData);
    return (
        <>
            {!(cryptoData === undefined) ? (
                <>
                    <div className='pt-[1.4%] px-[3%] '>
                        <div className='ml-45 text-gray-500 text-center grid justify-center'>
                            <p className='text-2xl font-semibold text-blue-900'>{cryptoData?.name} ({cryptoData?.symbol}) Price</p>
                            <div className='text-sm flex'>{cryptoData?.name}
                                <p>live price in US Dollar (USD). View value statistics, market cap and supply. </p>
                            </div>
                            <select defaultValue='7d' onChange={(value) => setTimePeriod(value)}>Select Time Period
                                {time.map((date) => <option>{date}</option>)}
                            </select>
                            <div className="mt-8">
                                <BarChart cryptoData={cryptoData} />
                            </div>
                        </div>
                        <div className='flex justify-between mt-[5%] text-gray-500 mx-12'>
                            <div className='space-y-3'>
                                <p className='text-xl text-gray-800 font-semibold'>{cryptoData?.name} Value statistics</p>
                                <p className='text-sm'> An overview showing the statistics of {cryptoData?.name}</p>
                                <div className='space-y-3'>
                                    <span className='flex justify-between'>
                                        <p>Price to USD </p>
                                        <p className=' font-semibold'>$ {Math.round((cryptoData?.price) * 100) / 100}</p>
                                    </span>
                                    <hr />
                                    <span className='flex justify-between'>
                                        <p>Rank </p>
                                        <p className=' font-semibold'>{cryptoData?.rank}</p>
                                    </span>
                                    <hr />
                                    <span className='flex justify-between'>
                                        <p>24 Hour Volume </p>
                                        <p className=' font-semibold'>{data?.data?.data?.coin["24hVolume"]}</p>
                                    </span>
                                    <hr />
                                    <span className='flex justify-between'>
                                        <p>Market Cap </p>
                                        <p className=' font-semibold'>$ {Math.round((cryptoData?.marketCap / 1000000000) * 100 / 100)}</p>

                                    </span>
                                    <hr />
                                    <span className='flex justify-between'>
                                        <p>All Time High (Daily Avg) </p>
                                        <p className=' font-semibold'>$ {Math.round((cryptoData?.allTimeHigh.price) * 100) / 100}</p>
                                    </span>
                                    <hr />
                                </div>
                            </div>
                            <div className='space-y-3'>
                                <span>
                                    <p className='text-2xl font-semibold text-gray-800'>Other statistics</p>
                                    <p className='text-sm'>An overview showing the stats of all cryptocurrencies.</p>
                                </span>
                                <hr />
                                <span className='flex justify-between'>
                                    <p>Number of Markets: </p>
                                    <p className=' font-semibold'>{cryptoData?.numberOfMarkets}</p>
                                </span>
                                <hr />
                                <span className='flex justify-between'>
                                    <p>Number of Exchanges: </p>
                                    <p className=' font-semibold'>{cryptoData?.numberOfExchanges}</p>
                                </span>
                                <hr />
                                <span className='flex justify-between'>
                                    <p>Total Supply: </p>
                                    <p className=' font-semibold'>{cryptoData?.supply.total}</p>
                                </span>
                                <hr />
                                <span className='flex justify-between'>
                                    <p>Circulating Supply: </p>
                                    <p className=' font-semibold'>{cryptoData?.supply.circulating}</p>
                                </span>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between py-3 mx-5 my-4">
                        <div className="px-6">
                            <span>
                                <p className="text-2xl mb-3">What is {cryptoData?.name} ?</p>
                                <p className='text-sm text-blue-600' dangerouslySetInnerHTML={{ __html: cryptoData?.description }}></p>
                            </span>
                        </div>
                        <div className="flex-1 space-y-2">
                            <p className='text-2xl mb-3'>Bitcoin Links</p>
                            {cryptoData?.links?.map((link, index) => (
                                <div className='flex justify-between text-sm' key={index}>
                                    <span>{link.name}</span>
                                    <span>
                                        <a href={link.url}><p className='text-blue-600'>{link.url}</p></a>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading....</p>
            )
            }
        </>
    )
}

export default CryptoDetails