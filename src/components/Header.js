import React,{useState,useEffect} from 'react';
import {useHistory,Link} from "react-router-dom";
import './Style.css';

const Header=()=>{
    return(
        <>
            <div class="col w-100 bg-info d-flex justify-content-between">
                
                <div class="h-100 d-flex flex-column align-items-center justify-content-center"> 
                    <h2 class=" mt-5 text-center text-white"> Formulaire de contact</h2>
                </div>
                
                
                
                    
                 
                <div class="d-flex justify-content-end w-40 p-5">
                    <Link onClick={()=>{
                        sessionStorage.clear();
                    }} class="text-dark mr-5" to="/"> Deconnexion </Link>
                    <Link class="text-dark mr-5" to="/contact/modify"> Modifier Un Formulaire </Link> 
                    
                    <Link class="text-dark mr-5" to="/admin/login"> Admin Login </Link>
                </div>
            </div>
        </>
    )
}

export default Header;