import React from 'react';
import Logo from "../logo/index";
import User from "../../pearls/user/index";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            username: "",
            password: ""
        };
    }
    componentDidMount() {
        this.User = new User();
        this.User.subscribe((newState) => {
           if (newState.isAuthenticated) {
               this.props.history.push('/');
           }
        });
        this.User.authenticateToken();
    }
    login() {
        this.User.login(this.state, (err) => {
            alert(err);
        });
    }
    register() {
        this.props.history.push('/register');
    }
    render() {
        return <div className="flex flex-col flex-1 items-center justify-center bg-black">
            <Logo />
            <input type="text" onChange={(evt) => this.setState({username: evt.target.value})} placeholder="Username" className="bg-white w-2/3 lg:w-1/4 mt-4 p-2"/>
            <input type="password" onChange={(evt) => this.setState({password: evt.target.value})} placeholder="Password" className="bg-white w-2/3 lg:w-1/4 mt-4 p-2"/>
            <div className="mt-8 w-2/3 lg:w-1/4 flex">
                <button onClick={() => this.register()} className="px-4 py-2 bg-white text-black">
                    Register
                </button>
                <button onClick={() => this.login()} className="px-4 py-2 bg-blue text-white ml-auto">
                    Login
                </button>
            </div>
        </div>
    }
}