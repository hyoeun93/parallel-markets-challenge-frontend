import React from 'react'

class NewInvestorForm extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        date_of_birth:
    }
    render() {
        return (
            <div className="container" style={{textAlign: 'center'}}>
                <form>
                    <h2>Enter New Investor</h2>
                    <label>First Name:  </label>
                    <input 
                        placeholder="Enter First Name"
                        name="firstname"
                    /><br/>
                    <label>Last Name:  </label>
                    <input 
                        placeholder="Enter Last Name"
                        name="lastname"
                    /><br/>
                    <label>Date of Birth:  </label>
                    <input 
                        name="birth"
                    /><br/>
                    <label>Phone Number:  </label>
                    <input 

                        name="number"
                    /><br/>
                    <label>Street Address:  </label>
                    <textarea
                        name="address"
                    /><br/>
                    <label>State:  </label>
                    <input 
   
                        name="state"
                    /><br/>
                    <label>Zip Code:  </label>
                    <input 
                        name="zipcode"
                    /><br/>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewInvestorForm