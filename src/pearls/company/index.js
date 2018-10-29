import Pearl from "@ashurson/pearl";
import axios from "axios";
import Server from "../../utilities/server/index";

export default class User extends Pearl {
    constructor() {
        super('Company', function() {
            this.state = {
                companies: [],
                active: 0
            };
            this.fetchCompanies = async (user_id) => {
                const filter = {employees: user_id};
                const response = await axios.get(`${Server.getRootUrl()}/company`, {
                    headers: {
                        filter: JSON.stringify(filter)
                    }
                });
                if (response.data.success) {
                    const companies = response.data.payload;
                    if (companies.length !== 0) {
                        this.setState({
                            companies: companies
                        });
                    }
                }
            };
            this.getCompany = () => {
                return this.state.companies[this.state.active];
            };
            this.getCompanies = () => {
                return this.state.companies;
            };
        });
    }
}