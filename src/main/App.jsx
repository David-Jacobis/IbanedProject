import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'


import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Header from '../components/template/Header'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="App">
            <Header/>
            <Routes/>
            <Footer />
        </div>
    </BrowserRouter>
    
