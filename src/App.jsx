import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Cursus, Focus, Hero, Navbar, Tech, Veille, Works, StarsCanvas,} from "./components";


const App = () => {
  const [showPopup, setShowPopup] = useState(false);


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Cursus />
        <Veille />
        <Focus />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
