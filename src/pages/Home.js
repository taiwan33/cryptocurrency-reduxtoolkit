import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CryptoCurrency from '../components/CryptoCurrency'
import CryptoDetails from '../components/CryptoDetails'
import Exchange from '../components/Exchange'
import Homepage from '../components/Homepage'
import News from '../components/News'

const Home = () => {
    return (
        <div className="overflow-y-scroll flex-1 scrollbar">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/cryptocurrencies" element={<CryptoCurrency />} />
                <Route path="/news" element={<News />} />
                <Route path="/crypto/:cryptoId" element={<CryptoDetails />} />
                <Route path="/exchange" element={<Exchange />} />
            </Routes>
        </div>
    )
}

export default Home