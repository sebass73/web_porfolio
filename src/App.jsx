import "./App.css";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import useImageLoader from "./hooks/useImageLoader";
import background1 from "./assets/background1.svg";
import meDesktop from "./assets/me_desktop.svg";

function App() {
  const images = [
    background1,
    meDesktop
  ];

  const allImagesLoaded = useImageLoader(images);

  return (
    <>
      {allImagesLoaded ? (
        <div className="font-link">
          <Navbar></Navbar>
          <section id="#">
            <Home></Home>
          </section>
          <section id="profile">
            <Profile></Profile>
          </section>
          <section id="about">
            <About></About>
          </section>
          <section id="contact">
            <Contact></Contact>
          </section>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default App;
