import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { SandwichesList } from "./pages/SandwichesList";
import { SandwichDetails } from "./pages/SandwichDetails";
import { AddSandwich } from "./pages/AddSandwich";
import { EditSandwich } from "./pages/EditSandwich";
import { BreadsList } from "./pages/BreadsList";
import { BreadDetails } from "./pages/BreadDetails";
import { Footer } from "./components/Footer";
import { ErrorPage } from "./pages/ErrorPage";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sandwiches" element={<SandwichesList />}></Route>
          <Route
            path="/sandwiches/details/:sandwichId"
            element={<SandwichDetails />}
          ></Route>
          <Route path="/sandwiches/add" element={<AddSandwich />}></Route>
          <Route
            path="/sandwiches/edit/:sandwichId"
            element={<EditSandwich />}
          ></Route>

          <Route path="/breads" element={<BreadsList />}></Route>
          <Route
            path="/breads/details/:breadId"
            element={<BreadDetails />}
          ></Route>

          <Route path="/About" element={undefined}></Route>

          <Route path="/error" element={<ErrorPage />}></Route>
          <Route path="*" element={undefined}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
