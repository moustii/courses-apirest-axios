import React, {Component} from 'react';

class CountryInfos extends Component {
    render() {
        return (
            <>
                <div>Information d'un pays</div>
                <p>{this.props.countryName }</p>
            </>
        );
    }
}

export default CountryInfos;