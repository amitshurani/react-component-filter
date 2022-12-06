import React, { Component } from 'react';

class Filtercom extends Component {
    state={
        people:[
            "Shashi Koshy",
            "Dhriti Taneja",
            "Dipa Mishra",
            "Ansh Thakkar",
            "Lakshmi Thaker",
            "Sushila Matthai",
            "Shresth Nigam",
            "Bhavana Biswas",
            "Vasudha Mangat",
            "Priya Saran"
           ],
           People:[
            "Shashi Koshy",
            "Dhriti Taneja",
            "Dipa Mishra",
            "Ansh Thakkar",
            "Lakshmi Thaker",
            "Sushila Matthai",
            "Shresth Nigam",
            "Bhavana Biswas",
            "Vasudha Mangat",
            "Priya Saran"
           ]
    }
    render() {
        return (
            <div>
                <div className='ms-5 mt-5'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(name)=> this.Rfil(name)}/>
                        <label className="form-check-label" for="flexCheckDefault">includes R or r</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(name)=> this.Lfil(name)}/>
                        <label className="form-check-label" for="flexCheckDefault">length {'>'} 14</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(name)=> this.Bfil(name)}/>
                        <label className="form-check-label" for="flexCheckDefault">start with "bh"</label>
                    </div>
                </div>
                <div className='m-2'>
                    <ul>
                        {this.state.people.map(name=><li>{name}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
    Rfil(name){if (name.target.checked){
        this.state.people=this.state.people.filter(name=>name.includes('r')||name.includes('R'))
        this.setState({people: this.state.people})}
        else{this.setState({people: this.state.People})}
    }
    Lfil(name){if (name.target.checked){
        this.state.people=this.state.people.filter(name=>name.length>14)
        this.setState({people: this.state.people})}
        else{this.setState({people: this.state.People})}
    }
    Bfil(name){if (name.target.checked){
        this.state.people=this.state.people.filter(name=>name.startsWith('Bh'))
        this.setState({people: this.state.people})}
        else{this.setState({people: this.state.People})}
    }
}

export default Filtercom;
