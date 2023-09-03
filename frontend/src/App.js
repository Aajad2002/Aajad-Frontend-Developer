
import './App.css';
import Footer from './Components/Footer';
import LandingComponent from './Components/LandingComponent';
import Navbar from './Components/Navbar';

import AllRoutes from './pages/AllRoutes';
function App() {
  return (
    <div className="scroll-smooth">
      {/* <h1 className='text-8xl text-[#ff004f]'>Ayushi</h1> */}
      <Navbar />
      {/* <LandingComponent /> */}
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
