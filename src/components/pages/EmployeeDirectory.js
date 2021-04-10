import React, { Component } from 'react';
import Header from '../Header';
import TableWithUsers from '../TableWithUsers';
import SearchInput from '../SearchInput';
import API from '../../input/API';


class EmployeeDirectory extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.searchRandomUser('Adam');
    };

    searchRandomUser = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    };

    // When the form is submitted search the Random User API for "this.state.search"
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchRandomUser(this.state.search);
    };

    render() {
        return (
            <>
                <Header />
                <SearchInput />
                <TableWithUsers results={this.state.results} />
            </>
        )
    }
}

export default EmployeeDirectory;