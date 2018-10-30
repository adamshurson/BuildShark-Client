import React from 'react';
import User from "../../pearls/user/index";
import Map from "../map";
import ProjectService from "../../utilities/project";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            projects: []
        };
    }
    componentDidMount() {
        this.User = new User();
        this.User.subscribe((newState) => {
            if (!newState.isAuthenticated) {
                this.props.history.push('/login');
            }
        });
        ProjectService.getProjects(this.User.getUser()._id).then(result => {
            if (result.success) {
                this.setState({projects: result.payload});
            }
        });
    }
    render() {
        return <div className="flex flex-wrap flex-1">
                    {
                        this.state.projects.map(project => {
                            return <div className="p-4 lg:w-1/2">
                            <div className="shadow-md bg-white rounded-lg overflow-hidden flex flex-col hover:shadow-lg">
                                <div className="flex p-4 items-center">
                                    <img className="rounded-full h-12 w-12 shadow-md z-10" src="https://plus.google.com/_/focus/photos/public/AIbEiAIAAABECKyEhO_z7bS00AEiC3ZjYXJkX3Bob3RvKig3NTViOGE4MWY4MDZjMWM5ZWFhYTNjN2E2YmU5NDUyOTM1MWY2NTA5MAFnII_BDNjkiAMBXYKiiXL-R8BoIw?sz=128"/>
                                    <img className="rounded-full h-10 w-10 shadow-md -ml-4" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/12294663_846669905454470_142047934102992104_n.jpg?_nc_cat=111&_nc_ht=scontent-ort2-1.xx&oh=a9c195419e664123ba2a80a80aef94dc&oe=5C53356B"/>
                                    <h4 className="ml-4 text-lg font-bold">{ProjectService.getProjectName(project)}</h4>
                                    <h4 className="ml-auto">9/17/18</h4>
                                </div>
                            <div className="flex px-2 mb-4">
                                <div className="m-2">
                                    <div className="px-4 py-2 rounded-full text-white bg-blue shadow hover:shadow-md">
                                        <h4>Bathroom</h4>
                                    </div>
                                </div>
                                <div className="m-2">
                                    <div className="px-4 py-2 rounded-full text-white bg-green shadow hover:shadow-md">
                                        <h4>Addition</h4>
                                    </div>
                                </div>
                                <div className="m-2">
                                    <div className="px-4 py-2 rounded-full text-white bg-orange shadow hover:shadow-md">
                                        <h4>Kitchen</h4>
                                    </div>
                                </div>
                            </div>
                            <Map />
                            <button className="p-4 text-blue hover:bg-blue hover:text-white">Manage</button>
                        </div>
                    </div>
                        })
                    }
            </div>
    }
}