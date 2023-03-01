import React, {Component} from 'react';
import axios from 'axios';
import TitreH1 from '../../components/Titres/TitreH1';
import Country from '../Country/Country';

class CountryInfos extends Component {
    state = {
        data: null,
        loading: false,
    }


    componentDidMount = () => {
        this.setState({loading : true})
        axios.get(`https://restcountries.com/v3.1/name/${this.props.countryName}?fullText=true`)
                .then(response => {
                    this.setState({
                        loading: false,
                        data: response.data[0]
                    })
                })
                .catch(error => {
                    console.log(error)
                    this.setState({loading: false})
                })
    }


    render() {
        return (
            <>
                <div className='container'>
                    <TitreH1>Page du pays : {this.props.countryName}</TitreH1>
                    {
                        this.state.data && 
                        <Country
                            countryFlag = {this.state.data.flags.png}
                            countryName = {this.state.data.name.common}
                            countryCapital = {this.state.data.capital}
                            countryRegion = {this.state.data.region}
                            countryFrName = {this.state.data.translations.fra.common}
                            {...this.props}
                            details={true}
                            monnaie={Object.values(this.state.data.currencies)[0].name}
                            // obj = Object.values(currencies)[0].name;
                        >
                        </Country>
                    }

                </div> 
            </>
        );
    }
}

export default CountryInfos;