
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Neon from "./Components/Neon/Neon";
import Scrollup from "./Components/Scrollup/Scrollup";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
       <Navbar />
      <Home />
       <Neon /> 
      <About />
       <Skills />   
      <Contact />
       <Footer />
      <Scrollup />        
    </div>
  );
}

export default App;
