import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Information from "./components/Information/Information"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
import Slider from "./components/Slider/Slider"
import { paymentMethods } from "./data/paymentMethods"

function App() {
  return (
    <div className="overflow-hidden min-h-screen">
      <Navbar />
      <div className="py-8">
        <Hero />
      </div>
      {/* 
      <hr className="my-8 border-gray-300" />
      <div className="py-8">
        <Slider images={paymentMethods} />
      <hr className="my-8 border-gray-300" />
      </div>*/}
      <div className="py-8">
        <Information />
      </div>
      <div className="py-8">
        <Testimonials />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}



export default App
