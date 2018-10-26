import React from 'react';
import User from "../../pearls/user/index";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    componentDidMount() {
        this.User = new User();
        this.User.subscribe((newState) => {
            if (!newState.isAuthenticated) {
                this.props.history.push('/login');
            }
        });
    }
    render() {
        return <div className="flex flex-col flex-1 bg-white">
            <h4>Home</h4>
        </div>
    }
}