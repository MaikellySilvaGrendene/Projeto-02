import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { ConsultaCEP } from "./pages/consultaCEP/index";
import { Countdown } from "./pages/countDown/index";
import { Layout } from "./pages/layout/index";
import './global.css'

export function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="countdown" element={ <Countdown/> }/>
        <Route path="consultacep" element={ <ConsultaCEP/> }/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}