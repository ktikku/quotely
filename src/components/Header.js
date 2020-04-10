import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Quotely</h1>
        <NavLink to="/" exact={true}>QOD</NavLink>
        <NavLink to="/likes">Liked Quotes</NavLink>
        <NavLink to="/search">Search Quote</NavLink>
    </header>
);

export default Header;