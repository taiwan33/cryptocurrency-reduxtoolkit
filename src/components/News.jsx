import React, { useState } from 'react'
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCoinsQuery } from '../services/cryptoApi';

const News = ({ simplified }) => {
    const [selectedNews, setSelectedNews] = useState('Cryptocurrency');
    const coins = useGetCoinsQuery(100);
    const { data: cryptoNews } = useGetCryptoNewsQuery({ selectedNews, count: simplified ? 6 : 12 });

    return (
        <div className='mx-3 '>
            <div className='mb-3'>
                <select
                    className='border px-2 py-1'
                    value={selectedNews}
                    onChange={(e) => setSelectedNews(e.target.value)}
                >
                    <option value="Cryptocurrency">Cryptocurrency</option>
                    {coins?.data?.data?.coins?.map((coin, index) => (
                        <option value={coin.name} key={index}> {coin.name}</option>
                    ))}
                </select>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    cryptoNews?.value?.map((news, i) => (
                        <a key={i} target="_blank" rel="noopener noreferrer" href={news.url} className="px-6 py-3 border overflow-hidden">
                            <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 overflow-hidden duration-300'>
                                <div className="block sm:flex md:flex ">
                                    <div className='text-md font-semibold'>
                                        {news.name}
                                        {selectedNews}
                                    </div>
                                    <div>
                                        <img className='rounded-lg ml-3 max-h-[100px] max-w-[200px] flex shrink-0 justify-center' src={news?.image?.thumbnail?.contentUrl} alt="" />
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <p className='text-sm'>{news?.description > 0 ? `${news?.description?.substring(0, 30)}...` : news.description}</p>
                                </div>
                                <div className='flex justify-between mt-4 text-sm'>
                                    <span className='flex gap-x-4'>
                                        <img className='flex shrink-0 h-6 w-6 object-cover' src={news?.provider[0]?.image?.thumbnail?.contentUrl} alt="" />
                                        <p>{news?.provider[0]?.name}</p>
                                    </span>
                                    <div>{moment(news?.datePublished).startOf('ss').fromNow()}</div>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div >
    )
}

export default News