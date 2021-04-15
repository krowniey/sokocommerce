import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { ButtonContainer } from "./Button.js";
import home from '../home.png';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className=" navbar navbar-expand-sm  navbar-dark px-sm-5">
                    {/**https://www.iconfinder.com/icons/3316510/
                 * cerejas_cherries_cherry_fruit_icon */}

                    <Link to='/' className="navbar-brand">
                        StoreMadeWithSoko
                </Link>
                    {/* <ul cl          assName="navbar-nav align-item-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                     </Link>
                    </li>
                </ul>
                <Link to='/bag' className="ml-auto"> */}
                    {/* <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />My cart
                    </span>

                </ButtonContainer>
                </Link>  */}
                </NavWrapper>
                <nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                    {/**https://www.iconfinder.com/icons/3316510/
                 * cerejas_cherries_cherry_fruit_icon */}

                    <Link to='/' className="nav-link text-secondary ml-5 border rounded-circle  bg-light ">
                        <img  style={{ height: 3 + 'em', width: 2 + 'em' }} src={home}/>
                    </Link>

                    <div className="navbar-nav align-item-center">
                        <h6 className="nav-item ml-4">
                            Terget
                    <br />
                            <small className=" text-secondary">cham Towers, plot 12 Nkeruwa Rd, kampala.Ug</small>
                        </h6>
                    </div>
                    <Link to='/bag' className="ml-auto ">
                        <ButtonContainer className="border-white">
                            <span className="mr-5">
                            <i className="  text-secondary fad fa-shopping-bag"/> <span className="ml-2 text-secondary"> Bag</span>  
                    </span>

                        </ButtonContainer>
                        <ButtonContainer className="border-white">
                            <span className="mr-5">
                            <i className=" text-secondary far fa-user"/> <span className="ml-2 text-secondary"> Account</span> 
                        
                    </span>

                        </ButtonContainer>
                    </Link>
                </nav>
                <hr />
            </div>
        );
    }
}
const NavWrapper = styled.nav`
background: var(--mainBlue);
.navbar-brand{
    color: var(--mainWhite) !important;
    font-size: 1rem;
    text-transform: capitalize !important;
}
.nav-link{
    color: var(--lightDark) !important;
    font-size: 1rem;


`;