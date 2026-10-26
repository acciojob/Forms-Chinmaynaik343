
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import FormRef from "./components/FormRef";
import FormState from "./components/FormState";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navigation">
          <Link id="form-link" to="/">Form</Link>
          <Link id="form-ref-link" to="/form-ref">Form Ref</Link>
          <Link id="form-state-link" to="/form-state">Form State</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/form-ref" element={<FormRef />} />
          <Route path="/form-state" element={<FormState />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
