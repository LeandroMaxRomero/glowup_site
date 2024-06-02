import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { LangProvider } from "./Context/LangProvider";
import { SurveyProvider } from "./Context/SurveyContext";
import FormPage from "./components/Form/FormPage";
import { Navbar } from "./components/NavBar/Navbar";
import { TermsOfUse } from "./components/TermsAndCond.jsx/TermsOfUse";
import { PrivacyPolicy } from "./components/TermsAndCond.jsx/PrivacyPolicy";
import { Blog01 } from "./components/Blogs/Blog01";
import { Blog02 } from "./components/Blogs/Blog02";
import { Blog03 } from "./components/Blogs/Blog03";
import { Blog04 } from "./components/Blogs/Blog04";
import { Blog05 } from "./components/Blogs/Blog05";
import { Blog06 } from "./components/Blogs/Blog06";
import { Blog07 } from "./components/Blogs/Blog07";
import { Blog08 } from "./components/Blogs/Blog08";
import { Blog09 } from "./components/Blogs/Blog09";
import { Blog10 } from "./components/Blogs/Blog10";

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
                <Route path="blog01" element={<Blog01/>} />
                <Route path="blog02" element={<Blog02/>} />
                <Route path="blog03" element={<Blog03/>} />
                <Route path="blog04" element={<Blog04/>} />
                <Route path="blog05" element={<Blog05/>} />
                <Route path="blog06" element={<Blog06/>} />
                <Route path="blog07" element={<Blog07/>} />
                <Route path="blog08" element={<Blog08/>} />
                <Route path="blog09" element={<Blog09/>} />
                <Route path="blog10" element={<Blog10/>} />
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />
              </Routes>
          </SurveyProvider>
        </LangProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
