import React from 'react';
import './tailwind.css';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/login/index';
import Register from "./components/register/index";
import Home from "./components/home/index";
import Header from "./components/header/index";
import CompanyPage from "./components/company/index";
import User from "./pearls/user";
import Company from "./pearls/company";
import Menu from "./components/menu";
import Projects from "./components/projects";
import FinishRegistration from './components/finishRegistration';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            isAuthenticated: false,
            isRegistered: false
        };
        this.pages = [
            {
                route: '/',
                component: Home
            },
            {
                route: '/projects',
                component: Projects
            },
            {
                route: '/company',
                component: CompanyPage
            },
            {
                route: '/login',
                component: Login
            },
            {
                route: '/register',
                component: Register
            }
        ];
        this.User = new User();
        this.Company = new Company();
    }
    componentDidMount() {
        this.User.subscribe((newState) => {
            this.setState({
                isAuthenticated: newState.isAuthenticated
            }, () => this.fetchCompanies());
        });
        this.Company.subscribe((newState) => {
            this.setState({
                isRegistered: newState.companies.length !== 0
            });
        });
    }
    fetchCompanies() {
        const user = this.User.getUser();
        this.Company.fetchCompanies(user._id);
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
                <Header shouldDisplay={this.state.isAuthenticated && this.state.isRegistered} toggleMenu={() => this.toggleMenu()} logout={() => this.logout()}/>
                <div className="flex-1 flex relative">
                    {
                        this.state.isAuthenticated && this.state.isRegistered
                            ? <Menu isOpen={this.state.menuOpen} pages={this.pages} toggleMenu={() => this.toggleMenu()}/>
                            : null
                    }
                    <div className="flex-1 flex">
                        {
                            (!this.state.isRegistered && this.state.isAuthenticated)
                            ? <FinishRegistration />  
                            : this.pages.map(page => {
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