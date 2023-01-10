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
        nPage: 1
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
                    region: regions,
                    nPage: 1
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
        let pagination = [];
        let listCountries = '';
        if (this.state.listCountries) {
            let totalPage = (this.state.listCountries.length / 10);
            if (this.state.listCountries.length % 10 !== 0) totalPage++
            for (let i = 1; i <= totalPage; i++) {
                pagination.push(
                    <Button
                        key={i} 
                        typeBtn='btn-info' 
                        isSelected={this.state.nPage === i}
                        click={() => this.setState({nPage: i})} 
                    >
                        {i}
                    </Button>
                );
            }
            const begin = (this.state.nPage-1)*10; //dans le tableau on commence à l'indice 0, ensuite 10, 20, 30... 
            const end = this.state.nPage*10; // et on termine à l'indice 10, puis 20, 30...
            const listCountriesPer10 = this.state.listCountries.slice(begin, end);
            console.log(listCountriesPer10);
            listCountries = listCountriesPer10.map(country => {
                    return (
                        <div className='col-12 col-md-6 ' key={country.countryName}> 
                            <Country {...country}></Country>
                        </div>
                    );
                })
        }
        return (
            <div className='container'>
                <TitreH1>Liste des pays du monde</TitreH1>
                    <Button 
                        typeBtn='btn-info' 
                        isSelected={this.state.region === 'Tous'}
                        click={(event) => this.handleRegion(event.target.innerText)}>
                        Tous
                    </Button>          
                    <Button 
                        typeBtn='btn-info' 
                        isSelected={this.state.region === "Europe"}
                        click={(event) => this.handleRegion(event.target.innerText)}>
                        Europe
                    </Button>          
                    <Button 
                        typeBtn='btn-info' 
                        isSelected={this.state.region === 'Afrique'}
                        click={(event) => this.handleRegion(event.target.innerText)}>
                        Afrique
                    </Button>          
                    <Button 
                        typeBtn='btn-info' 
                        isSelected={this.state.region === 'Asie'}
                        click={(event) => this.handleRegion(event.target.innerText)}>
                        Asie
                    </Button>          
                    <Button 
                        typeBtn='btn-info' 
                        isSelected={this.state.region === 'Amérique'}
                        click={(event) => this.handleRegion(event.target.innerText)}>
                        Amérique
                    </Button>          
                    <Button 
                        typeBtn='btn-info' 
                        isSelected={this.state.region === 'Océanie'}
                        click={(event) => this.handleRegion(event.target.innerText)}>
                        Océanie
                    </Button>
                    <span>Nombre de pays : <span className="badge bg-success">{this.state.listCountries.length}</span></span>
                    {
                        this.state.loading ? 
                            <div>Chargement...</div>
                            :
                            <div className='row g-0'>
                                {listCountries}
                            </div>
                    }        
                <div>{pagination}</div>
            </div>
        );
    }
}

export default CountriesManager;