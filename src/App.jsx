import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { LangProvider } from "./Context/LangProvider";
import { SurveyProvider } from "./Context/SurveyContext";
import FormPage from "./components/Form/FormPage";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/NavBar/Navbar";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <LangProvider>
          <SurveyProvider>
            <Navbar />
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="form" element={<FormPage/>} />
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />
              </Routes>
            <Footer />
          </SurveyProvider>
        </LangProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
