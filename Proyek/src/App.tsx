import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import QuotesPage from './pages/QuotesPage';
import Adiwiyata from './pages/Artikel/Adiwiyata';
import Pariwisata from './pages/Artikel/Pariwisata';
import Retro from './pages/Artikel/Retro';
import KritikSaran from './pages/KritikSaran'
import CardNav from './components/Header'
import Footer from './components/Footer';
import logo from './assets/sman1turen-1.png'
import Particles from './components/Background';


function App() {
  const items = [

    {
      label: "Home",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Home",href:"/", ariaLabel: "About Company" },
      ]

    },

    {

      label: "Karya Ilmiah", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Adiwiyata",href:"/artikel/adiwiyata", ariaLabel: "Featured Projects" },
        { label: "Pariwisata",href:"/artikel/pariwisata", ariaLabel: "Project Case Studies" },
        { label: "Retro",href:"/artikel/retro", ariaLabel: "Project Case Studies" },
      ]

    },

    {
      label: "Quotes",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Quotes",href:"/quotes", ariaLabel: "Quotes Sains" },
      ]

    }

  ];

  return (
    <>
      <Router>
              <div className="absolute h-full inset-0 z-0 pointer-events-none">
    <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
  </div>
      <div className="flex flex-col min-h-screen">
        <CardNav logo={logo} logoAlt="Company Logo" items={items} baseColor="#fff" menuColor="#000" buttonBgColor="#111" buttonTextColor="#fff" ease="power3.out" />
        <main className="flex-grow bg-slate-950">

          <div className='h-20'></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quotes" element={<QuotesPage />} />
            <Route path="/artikel/adiwiyata" element={<Adiwiyata />} />
            <Route path="/artikel/pariwisata" element={<Pariwisata />} />
            <Route path="/artikel/retro" element={<Retro />} />
            <Route path="/kritik-saran" element={<KritikSaran />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
    </>
  )
}

export default App
