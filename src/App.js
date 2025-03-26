import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
