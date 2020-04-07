import React from "react";
import {  NavLink } from "react-router-dom";
import { useRouter } from "../covid19/router/router";
import css from './covid19.module.css'

const Covid19=()=>{
   const router=useRouter;
    return(
        <>
     <>
        <div className={css.header}>
          <ul className={css.linkList}>
            <li className={css.linkItem}>
              <NavLink  
              className ={css.appLink}
                to="/home" 
                activeStyle={{
                  color: "red",
                  textDecoration: "none",
                  fontWeight: "500"
                }}
                style={{
                  marginRight: "16px",
                  color: "green",
                  textDecoration: "none",
                  fontWeight: "500"
                }}
              >
                {" "}
                HomePage
              </NavLink>
            </li>
            <li className={css.linkItem}>
              <NavLink      className ={css.appLink}
                to="/searh_page"
                activeStyle={{
                  color: "red",
                  textDecoration: "none",
                  fontWeight: "500"
                }}
                style={{
                  color: "green",
                  textDecoration: "none",
                  fontWeight: "500"
                }}
              >
                SearchInfo
              </NavLink>
            </li>
            <li className={css.linkItem}>
              <NavLink      className ={css.appLink}
                to="/topFive/"
                activeStyle={{
                  color: "red",
                  textDecoration: "none",
                  fontWeight: "500"
                }}
                style={{
                  color: "green",
                  textDecoration: "none",
                  fontWeight: "500"
                }}
              >
                Top 5 countries
              </NavLink>
            </li>
          </ul>
          {  router()}
        </div>
   
    </>

       
        </>
        
     ) 
  
  }

export default Covid19;