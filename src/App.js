import React, { useEffect } from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase";
import { setuser } from "./redux/actions";
import HeaderProfessional from "./pages/SingleProfessional/headerProfessional/HeaderProfessional";
import Nav from "./pages/SingleProfessional/nav/Nav";
import About from "./pages/SingleProfessional/about/About";
import Experience from "./pages/SingleProfessional/experience/Experience";
import Services from "./pages/SingleProfessional/services/Services";
import Portfolio from "./pages/SingleProfessional/portfolio/Portfolio";
import Testimonials from "./pages/SingleProfessional/testimonials/Testimonials";
import Contact from "./pages/SingleProfessional/contact/Contact";
import Footer from "./pages/SingleProfessional/footer/Footer";


function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser));
      } else {
        dispatch(setuser(null));
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/singleProfessional"
            element={
              <>
                
                  <HeaderProfessional />
                  <Nav />
                  <About />
                  <Experience />
                  <Services />
                  <Portfolio />
                  <Testimonials />
                  <Contact />
                  <Footer />
                
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
