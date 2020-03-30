import React from 'react';
import axios from 'axios';

class NewInvestorForm extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        date_of_birth: null,
        phone_number: null,
        street_address: '',
        states: '',
        zipcode: null,
        selectedFile: null
    } 

    handleChange = e => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
        // debugger
    }

    handleSubmit = e => {
        e.preventDefault();
        this.logInvestor();
    }

    fileHandler = e => {
        this.setState({
            selectedFile: e.target.files[0],
            loaded: 0,
        })
    }
    

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h2>Enter New Investor</h2><br />
                    <label>First Name:  </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        name="first_name"
                        onChange={this.handleChange}
                        value={this.state.first_name}
                    /><br/>
                    <label>Last Name:  </label>
                    <input 
                        className="form-control" 
                        type="text"
                        name="last_name"
                        onChange={this.handleChange}
                        value={this.state.last_name}
                    /><br/>
                    <label>Date of Birth:  </label>
                    <input 
                        className="form-control" 
                        type="date"
                        name="date_of_birth"
                        onChange={this.handleChange}
                        value={this.state.date_of_birth}
                    /><br/>
                    <label>Phone Number:  </label>
                    <input 
                        className="form-control" 
                        type="number"
                        name="phone_number"
                        onChange={this.handleChange}
                        value={this.state.phone_number}
                    /><br/>
                    <label>Street Address:  </label>
                    <textarea
                        className="form-control" 
                        name="street_address"
                        onChange={this.handleChange}
                        value={this.state.street_address}
                    /><br/>
                    <label>State:  </label>
                    <input 
                        className="form-control" 
                        type="states"
                        name="states"
                        onChange={this.handleChange}
                        value={this.state.states}
                    /><br/>
                    <label>Zip Code:  </label>
                    <input
                        className="form-control"  
                        type="zipcode"
                        name="zipcode"
                        onChange={this.handleChange}
                        value={this.state.zipcode}
                    /><br/>
                    <label>File Upload</label><br />
                    <input 
                        type="file" 
                        name="file" 
                        onChange={this.fileHandler}
                    multiple/><br /><br />
                <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

    logInvestor = () => {
        const data = {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    date_of_birth: this.state.date_of_birth,
                    phone_number: this.state.phone_number,
                    street_address: this.state.street_address,
                    state: this.state.states,
                    zip_code: this.state.zipcode
                };
        const fileData = new FormData();
        fileData.append('file', this.state.selectedFile)

        //Here, I haven't found an efficient way to send both data at the same time 

        axios.post("http://localhost:3005/investors",data, {

        })

        // .then(data => console.log(data))
        // .catch(error => console.log(error))
    }
}

export default NewInvestorForm