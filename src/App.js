import React from 'react';
import CountriesManager from './containers/CountriesManager/CountriesManager';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
// import NavBar2 from './components/NavBar/NavBar2';
import CountryInfos from './containers/CountryInfos/CountryInfos';

function App() {
    return (
      <BrowserRouter>
        {/* <Route path="/countries" render={() => <NavBar/>} /> */}
        {/* sans exact les pages qui auront countries auront la navbar correspondant */}
        {/* <Route path="/admin" render={() => <NavBar2/>} /> */}
        <NavBar/>
        <Route path="/" exact render={() => <h1>Page d'accueil</h1>} />
        <Route path="/countries" exact component={CountriesManager} />
        <Route path="/countries/:id/" render={(props) => <CountryInfos countryName={props.match.params.id} />} />
        {/* <Route path="/admin" exact render={() => <h1>Page d'admin</h1>} /> */}
      </BrowserRouter>
    )
}

export default App;
