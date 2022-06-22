import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom'
import CryptoCurrency from './components/CryptoCurrency'
import CryptoDetails from './components/CryptoDetails'
import Homepage from './components/Homepage'
import News from './components/News'

const App = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex">
        <Navbar />
        <div className="h-screen overflow-y-auto flex-1 my-6">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cryptocurrencies" element={<CryptoCurrency />} />
            <Route path="/news" element={<News />} />
            <Route path="/crypto/:cryptoId" element={<CryptoDetails />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
