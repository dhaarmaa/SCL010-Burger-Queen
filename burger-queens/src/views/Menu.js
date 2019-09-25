import React from 'react';
import Navigation from "../components/Navigation";

function Menu() {
    return (
        <div>
            <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>
            <h1>MENU</h1>
        </div>
    )
}

export default Menu;