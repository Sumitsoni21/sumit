import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Neon from "./Components/Neon/Neon";
import Scrollup from "./Components/Scrollup/Scrollup";
import Skills from "./Components/Skills/Skills";
import Test from "./Components/Test/Test";
import Testt from "./Components/Testt/Testt";




function App() {
  return (
    <div className="App">
       {/* <Header /> */}
       <Navbar />
      <Home />
     
      
       {/* <Test />  */}
        <Neon />
      <About />
     
 
     
       <Skills />
          
      <Contact />
       <Footer />
      <Scrollup />  
      {/* <Testt /> */}

      
    </div>
  );
}

export default App;
