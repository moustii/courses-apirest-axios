import React from 'react';
import TitreH1 from "./components/Titres/TitreH1";
import Button from "./components/Button/Button";
import PaysManager from './containers/PaysManager/PaysManager';

function App() {
    return (
        <div className='container'>
            <TitreH1>Liste des pays du monde</TitreH1>
                <Button typeBtn='btn-info'>Tous</Button>          
                <Button typeBtn='btn-info'>Europe</Button>          
                <Button typeBtn='btn-info'>Afrique</Button>          
                <Button typeBtn='btn-info'>Asie</Button>          
                <Button typeBtn='btn-info'>Amérique</Button>          
                <Button typeBtn='btn-info'>Océanie</Button>          
            <div>
                Pays 
            </div>
            <div>
                pagination
            </div>
        </div>
    )
}

export default App;
