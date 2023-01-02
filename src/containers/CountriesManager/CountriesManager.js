import React, {Component} from 'react';
import TitreH1 from '../../components/Titres/TitreH1';
import Button from '../../components/Button/Button';
import axios from 'axios';
import Country from '../Country/Country';

class CountriesManager extends Component {
    state = {
        listCountries: [],
        loading: false,
    }

    componentDidMount = () => {
        this.setState({loading: true})
        axios.get("https://restcountries.com/v2/all")
            .then(response => {
                // console.log(response);
                const listCountries = response.data.map(country => {
                    return {
                        countryName: country.name,
                        countryFrName: country.translations.fr,
                        countryCapital: country.capital,
                        countryRegion: country.region,
                        countryFlag: country.flag
                    }
                })
                this.setState({listCountries});
                this.setState({loading: false})
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false})
            })
    }

    render() {
        return (
            <div className='container'>
                <TitreH1>Liste des pays du monde</TitreH1>
                    <Button typeBtn='btn-info'>Tous</Button>          
                    <Button typeBtn='btn-info'>Europe</Button>          
                    <Button typeBtn='btn-info'>Afrique</Button>          
                    <Button typeBtn='btn-info'>Asie</Button>          
                    <Button typeBtn='btn-info'>Amérique</Button>          
                    <Button typeBtn='btn-info'>Océanie</Button>  
                    {
                        this.state.loading ? 
                            <div>Chargement...</div>
                            :
                            <div>
                                {
                                    this.state.listCountries.map(country => {
                                        console.log(country);
                                        return <Country {...country}></Country>
                                    })
                                }
                            </div>
                    }        
                <div>
                    pagination
                </div>
            </div>
        );
    }
}

export default CountriesManager;