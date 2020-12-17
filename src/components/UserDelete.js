import React, { Component } from 'react';
import axios from 'axios';

export default class UserDelete extends Component {
    state ={
        id : 0
    }
    
     
    handleChange = e =>{
        this.setState({id: e.target.value})
    }

    handleSubmit =e =>{
        e.preventDefault();
       

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        User ID : 
                    </label>
                    <input type="text" name="id" onChange={this.handleChange}/>
                    <button type="submit" >Delete</button>
                </form>
            </div>
        )
    }
}
