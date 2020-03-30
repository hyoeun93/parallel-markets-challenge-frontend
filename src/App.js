import React from 'react';
import './App.css';
import InvestorContainer from './containers/InvestorContainer';
import NewInvestorForm from './components/NewInvestorForm';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  state = {
    investors: []
  }

  render() {
    return(
      <div>
        <NewInvestorForm />
      </div>
    )
  }
}
export default App;
