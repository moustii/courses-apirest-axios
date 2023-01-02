import React from "react";

const Country = (props) => (

    <div className="row no-gutters">
        <div className="col-6">
            <div className="row">
                <div className="col-4">
                    <img src={props.countryFlag} alt={`le drapeau du ${props.countryFrName}`} width='100%' className="p-2" />
                </div>
                <div className="col">
                    <h2>Nom: {props.countryFrName} </h2>
                    <div>{props.countryCapital}</div>
                    <div>{props.countryRegion}</div>
                </div>
             </div>
        </div>
    </div>
);

export default Country;