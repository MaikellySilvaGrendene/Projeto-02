import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./styles.css";

export const Layout = () => {
    return(
        <header>
                    <nav className="layout">
            <ul >
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/countdown'>Countdown</Link>
                </li>
                <li>
                    <Link to='/consultaCEP'>Consulta CEP</Link>
                </li>
            </ul>
        </nav> 
        <Outlet/>
    </header>

     
    )
};