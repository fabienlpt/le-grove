import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home/index';
import Documentation from './pages/documentation';
import Agenda from './pages/agenda';
import Contact from './pages/contact';
import Missions from './pages/missions';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
		<BrowserRouter>
      <Header/>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/doc" element={<Documentation/>} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/missions" element={<Missions/>} />
      </Routes>
      <Footer/>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
