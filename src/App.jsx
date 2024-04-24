import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { LangProvider } from "./Context/LangProvider";
import { QuestionnaireProvider } from "./Context/QuestionnaireContext";
import FormPage from "./components/Form/FormPage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <LangProvider>
          <QuestionnaireProvider>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="form" element={<FormPage/>} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </QuestionnaireProvider>
        </LangProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
