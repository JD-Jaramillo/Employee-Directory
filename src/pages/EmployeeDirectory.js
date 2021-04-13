import React, { Component } from 'react';
import Header from '../components/Header';
import TableWithUsers from '../components/TableWithUsers';
import SearchInput from '../components/SearchInput';
import API from '../input/API';


class EmployeeDirectory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            users: []
        };
        this.handler = this.handler.bind(this)
    }

    componentDidMount() {
        this.loadUsers("");
    }

    handler() {
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
            users: newArr
        });
    }

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
                    users: results.data.results
                });
            })
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })
    };

    // When the form is submitted search the Random User API for "this.state.search"
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchRandomUser(this.state.name);
    // };

    render() {
        return (
            <>
                <Header loadUsers={this.loadUsers} />
                <SearchInput handleInputChange={this.handleInputChange} />
                <TableWithUsers users={this.state.users} handler={this.handler} />
            </>
        )
    }
};

// name={this.state.name}

export default EmployeeDirectory;