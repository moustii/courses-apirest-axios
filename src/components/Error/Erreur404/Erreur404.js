import React from "react";
import imgError404 from "../../../asset/images/error404.jpg"

const Erreur404 = (props) => (
    <div>
        <img src={imgError404} alt="erreur 404" width={300} />
        <div>La page demandée n'existe pas</div>
    </div>
);

export default Erreur404;