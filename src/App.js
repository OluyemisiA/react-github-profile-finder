import axios from 'axios';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import Searchbar from './Components/Users/Search';

class App extends Component {
    state = {
        users: [],
        loading: false,
    }

    static.propTypes = {
        this.searchUsers: PropTypes.func.isRequired,
    }

    async componentDidMount(){
        this.setState({loading: true});        
        const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({users: response.data, loading: false});
        
    }

    searchUsers = async searchTerm => {
        this.setState({loading: true});        
        const response = await axios.get(`https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({users: response.data.items, loading: false});       
    }

  render(){
    return (
        <div className="App">
         <Navbar/>
         <div className="container">
             <Searchbar searchUsers={this.searchUsers}/>
            <Users loading={this.state.loading} users={this.state.users}/>
         </div>
        </div>
      );
  }
}

export default App;
