import React, { Component } from 'react';
// NEEDS REFACTORING - NOT RENDERING CORRECTLY ATM
const url ='https://financialmodelingprep.com/api/company/profile/AAPL?datatype=json';

class MostActive extends Component {

  constructor() {
    super();
    this.state = {
      profile: [],
    }
  }

  componentDidMount() {

    fetch(url).then(res => {

        return res.json();
      })
      .then(data => {

        let profile = data.res.map((inst) => {

          return (

            <div key={inst.AAPL}>
            <h4>{inst.AAPL.Ticker}</h4>
            <br />
            <h4>{inst.AAPL.Price}</h4>
            </div>
          )
      })
      this.setState({profile: profile});
          console.log("This is Items State: ", this.state.items);
        })
    }
    render() {

        return (
          <div className="container">
              <div className="container">

                  Profile: {this.state.profile}

              </div>
          </div>


        )
      }
    }


export default MostActive;
