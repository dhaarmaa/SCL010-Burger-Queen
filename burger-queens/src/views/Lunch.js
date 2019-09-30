import React from 'react';
import Navigation from '../components/Navigation';
import OrderDetail from '../components/OrderDetail'
import './Lunch.css';
import '../components/Button.css'
import Button from '../components/Button';
import MenuItem  from '../components/MenuItem'
import InputClient  from '../components/InputClient'
import { Link } from "react-router-dom";
import { Container } from '@material-ui/core';


// data
import menu from '../data/data.json';

//css


function Lunch() {
    return (
        <div>
            <Navigation home="INICIO" pending="PENDIENTES" records="HISTORIAL"/>
            <div className='btnMenu'>
            <Link to="/breakfast"> <Button name='DESAYUNO' btnClass= 'btnLarge btnYellow' /></Link>
            <Link to="/lunch"><Button name='ALMUERZO' btnClass= 'btnLarge btnGray' /></Link>
        </div>

            <InputClient />

            <Container className="lunch-content">
                <div className="menu-content">
                        {menu.Lunchs.map((e =>
                        <MenuItem
                        product={e.product}
                        price={e.price}
                        img={e.img}
                        />
                        ))}

                </div>

                <OrderDetail/>
            </Container>

        </div>

    )
}

export default Lunch;