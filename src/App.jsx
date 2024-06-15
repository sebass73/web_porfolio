import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


function App() {
  
  return (
    <>
      <div className="font-link">
        <Navbar></Navbar>
        <section id="#">
          {console.log(import.meta.env)}
          <Home></Home>
        </section>
        <section id="about">
          <About></About>
        </section>
        <section id="profile">
          <Profile></Profile>
        </section>
        <section id="contact">
          <Contact></Contact>
        </section>
      </div>
    </>
  );
}

export default App;
