import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

import FotoPerfil from '../imgperfil/imgperfil';
import SideNav from '../sidenav/sidenav';

const NavBar = (props) => { 

    return(
        <div>
            <ReactBootStrap.Navbar className={styles.navbar} position="sticky" expand="lg" >
                
                <div onClick={props.onOpenNav}>
                   <FotoPerfil
                    style={{"pointer-events": "all"}}
                    onClick={()=>{props.onOpenNav()}}
                /> 
                </div>
                

            <SideNav {...props}/>
            
               
                <Link to="/home"> <ReactBootStrap.Navbar.Brand className={styles.navbarTitulo}>BOLTH</ReactBootStrap.Navbar.Brand></Link>
                
            </ReactBootStrap.Navbar>
        </div>   
    )
}
export default NavBar;