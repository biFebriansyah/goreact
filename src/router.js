import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Detail from './pages/detail/detail'

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
