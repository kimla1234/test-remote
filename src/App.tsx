import './App.css'
import  { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite/dist/flowbite.min.js';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import UniversityPage from './page/UniversityPage';
import NavbarHomePage from './component/NavbarHomePage';
import FooterHomePage from './component/FooterHomePage';

function App() {

  return (
    <Router>
      <NavbarHomePage/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/university" element={<UniversityPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
      <FooterHomePage/>
    </Router>

  )
}

export default App
