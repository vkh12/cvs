import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Perscriptions from "../pages/site-pages/perscriptions";
import Dashboard from './Dashboard';
import React from 'react';

function App() {
  return ? (
    <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/perscriptions" element={<Perscriptions />} />
        </Routes>
        </BrowserRouter>
    </>
  ):null;
}
