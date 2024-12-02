import React,{Component} from "react";
import Client from "../client/Client";
import Visiteur from "../visiteur/Visiteur";


const Authentifier=(props)=>{
   
    return (
        <div>
        <h2 valeur={props.valeur}> {props.para}</h2>
        {props.login ? <Client /> : <Visiteur />}</div>
              
    )
}
export default Authentifier
