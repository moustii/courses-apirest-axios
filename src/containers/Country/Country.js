import React from "react";
import { NavLink } from "react-router-dom";

const Country = (props) => {
    let content = "";
    if (!props.details) { //tous les pays
        content =  (<NavLink to={`/countries/${props.countryName}`}>Voir la fiche du pays</NavLink>);
    } else {
        content = (
            <div>Monnaie : {props.monnaie}</div>
        );
    }
    return (
        <>
            <div className="row h-100 g-0 border m-2">
                <div className="col-4">
                    <img src={props.countryFlag} alt={`le drapeau du ${props.countryFrName}`} width='100%' className="p-2" />
                </div>
                <div className="col">
                    <h2>Nom: {props.countryFrName} </h2>
                    <div>Capital : {props.countryCapital}</div>
                    <div>Region : {props.countryRegion}</div>
                    {content}
                </div>
            </div>
        </>
    );
};

export default Country;