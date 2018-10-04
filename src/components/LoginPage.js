import React from 'react';
import { logIn, logOut } from '../actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
        };
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    handleLogOut = (event) => {
        event.preventDefault();
        this.props.dispatch(logOut());
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { dispatch } = this.props;
        const { user } = this.state;

        if (user.length > 0) {
            console.log("Dispatching...");
            dispatch(logIn(this.state.user));
        }
    };

    render() {
        const { loggedIn, username } = this.props.context;

        console.log("Context: " + JSON.stringify(this.props.context));

        let message = "You are not logged in";

        if (loggedIn) {
            message = "Welcome, " + username;
        }

        const logInForm = (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" placeholder="user" name="user" value={this.state.user}></input>
                <button>Log in</button>
            </form>
        );

        const logOutForm = (
            <button onClick={this.handleLogOut}>Log out</button>
        );

        return (
            <>
                <div>Hello world</div>
                <div>{message}</div>
                {loggedIn ? logOutForm : logInForm}
            </>
        );
    }
}

export default (LoginPage);