import axios from 'axios';
import Server from '../server';

function ProjectService() {
    return ({
        createProject: createProject,
        getProjects: getProjects,
        getProjectName: getProjectName
    });

    async function createProject(user_id, company_id) {
        const employees = new Array();
        employees.push(user_id);
        const result = await axios.post(`${Server.getRootUrl()}/project`, {employees: employees});
        return result.data;
    }

    async function getProjects(user_id) {
        const filter = {employees: user_id};
        const result = await axios.get(`${Server.getRootUrl()}/project`, {
            headers: {
                filter: JSON.stringify(filter)
            }
        });
        return result.data;
    }

    function getProjectName(project) {
        if (project.clients.length > 0) {
            return project.clients.join(" and ");
        } else {
            return "New Project";
        }
    }
}
export default ProjectService();