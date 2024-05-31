import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout/index.js'
import Home from './component/Home.js';
import ABout from './component/ABout.js';
import Contact from './component/Contact.js';
import Portfolio from './component/Portfolio.js';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<ABout/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
