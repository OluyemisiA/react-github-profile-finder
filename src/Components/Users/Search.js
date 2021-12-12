import React, { Component } from 'react'

class Search extends Component {
    state = {
        searchTerm: ""
    }

    onSearch = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.searchUsers(this.state.searchTerm);
        this.setState({searchTerm: ""});

    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="searchTerm" placeholder="Search Users..." value={this.state.searchTerm} onChange={this.onSearch} autoComplete="off"/>
                    <input type="submit" className="btn btn-block btn-dark" value="Search"/>       
                </form>
            </div>
        )
    }
}

export default Search
