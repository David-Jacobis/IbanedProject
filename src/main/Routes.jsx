import { Routes, Route } from "react-router-dom"
import Home from "../components/home/Home"
import Sobre from "../components/sobre/Sobre"

export default props => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="*" element={<Home/>} />
        <Route path="/Sobre" element={<Sobre/>} />
    </Routes>
)