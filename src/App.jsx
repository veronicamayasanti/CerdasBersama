import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './pages/Home'

function App() {
  return (
    <>
    <Navbar />

   <div className="wrapper">
   <Home />
   </div>

   <Footer />
    </>
  )
}

export default App