import React from 'react';
import Logo from "../logo/index";
import User from "../../pearls/user/index";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            type: "",
        };
    }
    componentDidMount() {
        this.User = new User();
    }
    login() {
        this.props.history.push('/login');
    }
    register() {
        this.User.register(this.state, (err) => {
            alert(err);
        });
    }
    render() {
        return <div className="flex-1 flex flex-col items-center justify-center bg-black">
            <Logo />
            <input type="text" onChange={(evt) => this.setState({username: evt.target.value})} placeholder="Username" className="bg-white w-2/3 lg:w-1/4 mt-4 p-2"/>
            <input type="password" onChange={(evt) => this.setState({password: evt.target.value})} placeholder="Password" className="bg-white w-2/3 lg:w-1/4 mt-4 p-2"/>
            <input type="password" onChange={(evt) => this.setState({confirmPassword: evt.target.value})} placeholder="Confirm Password" className="bg-white w-2/3 lg:w-1/4 mt-4 p-2"/>
            <select onChange={(evt) => this.setState({type: evt.target.value})} placeholder="I am a..." className="bg-white w-2/3 lg:w-1/4 mt-4 p-2">
                <option value="client">Client</option>
                <option value="employee">Employee</option>
            </select>
            <div className="mt-8 w-2/3 lg:w-1/4 flex">
                <button onClick={() => this.login()} className="px-4 py-2 bg-white text-black">
                    Login
                </button>
                <button onClick={() => this.register()} className="px-4 py-2 bg-blue text-white ml-auto">
                    Register
                </button>
            </div>
        </div>
    }
}