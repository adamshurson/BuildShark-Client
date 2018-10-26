function Server() {
    return ({
        getRootUrl: getRootUrl
    });

    function getRootUrl() {
        return "http://localhost:5000";
    }
}
export default Server();