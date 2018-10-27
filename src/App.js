import React from 'react';
import './tailwind.css';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/login/index';
import Register from "./components/register/index";
import Home from "./components/home/index";
import Header from "./components/header/index";
import User from "./pearls/user";
import Menu from "./components/menu";
import Projects from "./components/projects";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            menuOpen: false,
            isAuthenticated: false
        };
        this.pages = [
            {
                name: 'Home',
                route: '/',
                showInMenu: true,
                icon: 'home',
                component: Home
            },
            {
                name: 'Projects',
                route: '/projects',
                showInMenu: true,
                icon: 'paper-plane',
                component: Projects
            },
            {
                route: '/login',
                component: Login
            },
            {
                route: '/register',
                component: Register
            },
        ];
    }
    componentDidMount() {
        this.User = new User();
        this.User.subscribe((newState) => {
            this.setState({
                isAuthenticated: newState.isAuthenticated
            });
        });
    }
    toggleMenu() {
      this.setState({
        menuOpen : !this.state.menuOpen
      });
    }
    logout() {
        this.toggleMenu();
        this.User.logout();
    }
    render() {
        return (
            <div className="w-screen min-h-screen flex flex-col bg-grey-lighter overflow-x-hidden">
                <Header shouldDisplay={this.state.isAuthenticated} toggleMenu={() => this.toggleMenu()} logout={() => this.logout()}/>
                <div className="flex-1 flex relative">
                    {
                        this.state.isAuthenticated
                            ? <Menu isOpen={this.state.menuOpen} pages={this.pages} toggleMenu={() => this.toggleMenu()}/>
                            : null
                    }
                    <div className="flex-1 flex">
                        {
                            this.pages.map(page => {
                                return <Route key={page.route} path={page.route} component={page.component} exact/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default function app() {
    return <BrowserRouter>
        <App/>
    </BrowserRouter>;
}