import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { LangProvider } from "./Context/LangProvider";
import { SurveyProvider } from "./Context/SurveyContext";
import FormPage from "./components/Form/FormPage";
import { Navbar } from "./components/NavBar/Navbar";
import { TermsOfUse } from "./components/TermsAndCond.jsx/TermsOfUse";
import { PrivacyPolicy } from "./components/TermsAndCond.jsx/PrivacyPolicy";

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
                <Route path="terms" element={<TermsOfUse/>} />
                <Route path="privpolicy" element={<PrivacyPolicy/>} />
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />
              </Routes>
          </SurveyProvider>
        </LangProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
