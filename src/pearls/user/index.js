import Pearl from "@ashurson/pearl";
import axios from "axios";
import Server from "../../utilities/server/index";

export default class User extends Pearl {
    constructor() {
        super('User', function() {
            this.state = {
                isAuthenticated: false,
                userObject: {},
                token: null
            };
            this.register = (data, fallback) => {
                if (data.password !== data.confirmPassword) {
                    fallback("Passwords must match");
                } else {
                    axios.post(`${Server.getRootUrl()}/auth/register`, data)
                        .then((response) => {
                            // if our user was successfully registered, set our status correctly
                            if (response.data.success) {
                                this.setState({
                                    isLoggedIn: true,
                                    userObject: response.data.payload.userObject,
                                    token: response.data.payload.token
                                });
                                localStorage.setItem('token', response.data.payload.token);
                            } else {
                                fallback(response.data.err);
                            }
                        })
                        .catch((error) => {
                            alert(error);
                        });
                }
            };
            this.login = (data, fallback) => {
                axios.post(`${Server.getRootUrl()}/auth/login`, data)
                    .then((response) => {
                        // if our user was successfully registered, set our status correctly
                        if (response.data.success) {
                            this.setState({
                                isAuthenticated: true,
                                userObject: response.data.payload.userObject,
                                token: response.data.payload.token
                            });
                            localStorage.setItem('token', response.data.payload.token);
                        } else {
                            fallback(response.data.err);
                        }
                    })
                    .catch((error) => {
                        alert(error);
                    });
            };
            this.authenticateToken = async () => {
                try {
                    const token = await localStorage.getItem('token');
                    if (token !== null) {
                        axios.post(`${Server.getRootUrl()}/auth/authorizeToken`, {
                            token: token
                        })
                            .then((response) => {
                                // if the token is still valid, then set up the user object
                                if (response.data.success) {
                                    this.setState({
                                        isAuthenticated: true,
                                        userObject: response.data.payload.userObject
                                    });
                                } else {
                                    // delete our user and token since it's not valid
                                    localStorage.removeItem('token');
                                }
                            })
                            .catch((err) => {
                                // couldn't refresh token
                            });
                    }
                } catch (error) {
                    alert(error);
                }
            };
            this.logout = () => {
                this.setState({
                    isAuthenticated: false,
                    userObject: {},
                    token: null
                });
                localStorage.removeItem('token');
            }
        });
    }
}