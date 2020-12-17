import React, { Component } from 'react';
import axios from 'axios';

export default class UserList extends Component {
    state ={
        users : []
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res =>{
            console.log(res);
            this.setState({users: res.data});
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.users.map(user => <li key={user.id}>{user.name}</li>)}
                </ul>
            </div>
        )
    }
}
