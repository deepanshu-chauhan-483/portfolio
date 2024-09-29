import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Banner from './components/Banner';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>

      <Route path='about' element={<About/>}/>
      <Route path='home' element={<Banner/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='work' element={<Work/>}/>
      <Route path='contact' element={<Contact/>}/>

    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
