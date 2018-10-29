import React from 'react';
import CompanyPearl from '../../pearls/company';
import Map from '../map';

export default class Company extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            company: {}
        };
    }
    componentDidMount() {
        this.Company = new CompanyPearl();
        this.Company.subscribe(() => {
            this.setState({company: this.Company.getCompany()});
        });
    };
    render() {
        return <div className="flex flex-1 flex-col p-4">
                <div className="flex flex-1 flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
                    <Map />
                    <div className="flex items-center pl-4">
                        <img className="w-32 h-32 img-contain bg-white rounded-full shadow-md p-2 -mt-16 z-10" src="https://cdn.homeadvisor.com/files/eid/66760000/66765722/5596701.jpg?modifyDateTime=1500640837000" />
                        <h4 className="pl-4 text-xl font-bold text-black">{this.state.company.name}</h4>
                    </div>
                </div>
            </div>
    }
}