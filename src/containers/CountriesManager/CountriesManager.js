import React, {Component} from 'react';
import TitreH1 from '../../components/Titres/TitreH1';
import Button from '../../components/Button/Button';
import axios from 'axios';
import Country from '../Country/Country';

class CountriesManager extends Component {
    state = {
        listCountries: [],
        loading: false,
        region: null,
    }

    handleRegion = (regions) => {
        this.setState({loading: true});
        let param;
        switch(regions) {
            case 'Tous' :
                param = 'all';
                break;
            case 'Europe' : param = 'region/europe';
                break;
            case 'Afrique' : param = 'region/africa';
                break;
            case 'Asie' : param = 'region/asia';
                break;
            case 'Amérique' : param = 'region/americas';
                break;
            case 'Océanie' : param = 'region/oceania';
                break;
            default :
                param = 'all';
        }
        axios.get(`https://restcountries.com/v3.1/${param}`)
            .then(response => {
                const listCountries = response.data.map(country => {
                    return {
                        countryName: country.name.common,
                        countryFrName: country.translations.fra.common,
                        countryCapital: country.capital,
                        countryRegion: country.region,
                        countryFlag: country.flags.png
                    }
                })
                this.setState({
                    listCountries,
                    loading: false,
                    region: regions
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            })
    }

    componentDidMount = () => {
        this.handleRegion('Tous');
    }

    render() {
        return (
            <div className='container'>
                <TitreH1>Liste des pays du monde</TitreH1>
                    <Button typeBtn='btn-info' isSelected={this.state.region === 'Tous'}   click={(event) => this.handleRegion(event.target.innerText)}>Tous</Button>          
                    <Button typeBtn='btn-info' isSelected={this.state.region === 'Europe'}  click={(event) => this.handleRegion(event.target.innerText)}>Europe</Button>          
                    <Button typeBtn='btn-info' isSelected={this.state.region === 'Afrique'}  click={(event) => this.handleRegion(event.target.innerText)}>Afrique</Button>          
                    <Button typeBtn='btn-info' isSelected={this.state.region === 'Asie'}  click={(event) => this.handleRegion(event.target.innerText)}>Asie</Button>          
                    <Button typeBtn='btn-info' isSelected={this.state.region === 'Amérique'}  click={(event) => this.handleRegion(event.target.innerText)}>Amérique</Button>          
                    <Button typeBtn='btn-info' isSelected={this.state.region === 'Océanie'}  click={(event) => this.handleRegion(event.target.innerText)}>Océanie</Button>
                    <span>Nombre de pays : <span className="badge bg-success">{this.state.listCountries.length}</span></span>
                    {
                        this.state.loading ? 
                            <div>Chargement...</div>
                            :
                            <div className='row g-0'>
                                {
                                    this.state.listCountries.map(country => {
                                        return (
                                            <div className='col-12 col-md-6 ' key={country.countryName}> 
                                                <Country {...country}></Country>
                                            </div>
                                        );
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