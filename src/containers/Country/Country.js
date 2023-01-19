import React from "react";
import { NavLink } from "react-router-dom";

const Country = (props) => (

    <div className="row h-100 g-0 border m-2">
        <div className="col-4">
            <img src={props.countryFlag} alt={`le drapeau du ${props.countryFrName}`} width='100%' className="p-2" />
        </div>
        <div className="col">
            <h2>Nom: {props.countryFrName} </h2>
            <div>{props.countryCapital}</div>
            <div>{props.countryRegion}</div>
            <NavLink to={`${props.match.url}/${props.countryFrName}`}>Voir la fiche du pays</NavLink>
        </div>
    </div>
);

export default Country;