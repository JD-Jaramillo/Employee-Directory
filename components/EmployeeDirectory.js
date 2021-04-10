import React, { Component, component } from 'react';


class EmployeeDirectory extends Component {
    state = {
        search= "",
        results=[]
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
            <hero>
                
            </hero>
            {/* Search Component */}
            {/* Table with results Component */}
            </>
        )
    }
}

export default EmployeeDirectory;