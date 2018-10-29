import React from 'react';
import Logo from "../logo/index";
import User from "../../pearls/user/index";

export default class FinishRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            user: {},
            registrationCode: "",
            isRegisteringCompany: false,
            companyName: ""
        };
    }
    componentDidMount() {
        this.User = new User();
        this.User.subscribe((newState) => {
            this.setState({user: newState.userObject});
        });
    }
    register() {
        const data = {
            user_id: this.state.user._id,
            registrationCode: this.state.registrationCode,
            companyName: this.state.companyName,
            isRegisteringCompany: this.state.isRegisteringCompany
        }
        this.User.finishRegistration(data, (err) => {
            alert(err);
        })
    }
    toggleCompanyRegistration() {
        this.setState({
            isRegisteringCompany: !this.state.isRegisteringCompany
        });
    }
    render() {
        return <div className="flex-1 flex flex-col items-center justify-center bg-black">
            <Logo />
            <div className="bg-grey w-2/3 lg:w-1/4 mt-4 p-2">{this.state.user.username}</div>
            {
                this.state.isRegisteringCompany
                ? <input type="text" onChange={(evt) => this.setState({companyName: evt.target.value})} placeholder="Company Name" className="bg-white w-2/3 lg:w-1/4 mt-4 p-2"/>
                : <input type="text" onChange={(evt) => this.setState({registrationCode: evt.target.value})} placeholder="Registration Code" className="bg-white w-2/3 lg:w-1/4 mt-4 p-2"/>
            }
            <div className="mt-8 w-2/3 lg:w-1/4 flex">
                <button onClick={() => this.toggleCompanyRegistration()} className="px-4 py-2 bg-white text-black">
                    {
                        this.state.isRegisteringCompany
                        ? "Enter Code"
                        : "Create a Company"
                    }
                </button>
                <button onClick={() => this.register()} className="px-4 py-2 bg-blue text-white ml-auto">
                    Register
                </button>
            </div>
        </div>
    }
}