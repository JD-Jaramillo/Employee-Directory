import React, { Component } from 'react';
import Header from '../components/Header';
import TableWithUsers from '../components/TableWithUsers';
import SearchInput from '../components/SearchInput';
import API from '../input/API';


class EmployeeDirectory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            filteredSearch: [],
            users: [],
            filteredUsers: [],
            nameColumnClick: 0,
        };
        this.handler = this.handler.bind(this)
    }
    // On load of page call the loadusers function to load the table with random users 
    componentDidMount() {
        this.loadUsers("");
    }
    // This hanler is sorting the names on click by Ascending and then by Descending order
    handler() {
        // Ascending 
        console.log(this.state.nameColumnClick);
        const index = this.state.nameColumnClick + 1;
        switch (index) {
            case 1: {
                this.setState({
                    nameColumnClick: index
                })
                const newArr = this.state.users.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });
                this.setState({
                    filteredUsers: newArr
                });
                break;
            }
            // Descending
            case 2: {
                this.setState({
                    nameColumnClick: index
                })
                const newArr = this.state.users.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                });
                this.setState({
                    filteredUsers: newArr
                });
                break;
            }
            default: {
                this.setState({
                    filteredUsers: [...this.state.users],
                    nameColumnClick: 0
                })
            }
        }
    }
    // function that gets data from the API and then loops through each user to get the desired data back for the table 
    loadUsers = () => {
        API.users()
            .then(results => {
                results.data.results.forEach(user => {
                    user.name = `${user.name.first} ${user.name.last}`;
                    user.dob = user.dob.date.slice(0, 10);
                    user.id = user.login.uuid;
                    user.picture = user.picture.thumbnail;
                })
                this.setState({
                    users: results.data.results,
                    filteredUsers: results.data.results
                });
            })
    }
    // Gets the value from the search input on the top of page, sets the value at state and then sends it to handlSearch function 
    handleInputChange = event => {
        // const search = event.target.search;
        const value = event.target.value.toLowerCase();
        this.setState({ search: value })
        this.handleSearch(value);
    };

    // When the search value is passed on from the function above filter the array of names
    handleSearch(query) {
        console.log("value is being received", query)
        const filteredUsersBySearch = [...this.state.users];
        if (query.length > 0) {
            const newSearchedArr = filteredUsersBySearch.filter(user => user.name.toLowerCase().includes(query));
            console.log("newSearchArr", newSearchedArr);
            this.setState({ filteredUsers: newSearchedArr });
        } else { this.setState({ filteredUsers: filteredUsersBySearch }) }
    };

    render() {
        return (
            <>
                <Header loadUsers={this.loadUsers} />
                <SearchInput handleInputChange={this.handleInputChange} />
                <TableWithUsers handler={this.handler} filteredUsers={this.state.filteredUsers} />
            </>
        )
    }
};

export default EmployeeDirectory;