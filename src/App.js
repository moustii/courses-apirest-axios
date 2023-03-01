import React from 'react';
import CountriesManager from './containers/CountriesManager/CountriesManager';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
// import NavBar2 from './components/NavBar/NavBar2';
import CountryInfos from './containers/CountryInfos/CountryInfos';
import Error from './components/Error/Error';
import Erreur404 from './components/Error/Erreur404/Erreur404';

function App() {
    return (
      <BrowserRouter>
        {/* <Route path="/countries" render={() => <NavBar/>} /> */}
        {/* sans exact les pages qui auront countries auront la navbar correspondant */}
        {/* <Route path="/admin" render={() => <NavBar2/>} /> */}
        <NavBar/>
        <Switch>
          <Route path="/" exact render={() => <h1>Page d'accueil</h1>} />
          <Route path="/countries" exact component={CountriesManager} />
          <Route path="/countries/:id/" render={(props) => <CountryInfos countryName={props.match.params.id} {...props} />} />
          <Route render={() => <Error><Erreur404></Erreur404></Error>}/>
        </Switch>
        {/* <Route path="/admin" exact render={() => <h1>Page d'admin</h1>} /> */}
      </BrowserRouter>
    )
}

export default App;
