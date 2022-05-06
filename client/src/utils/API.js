import axios from "axios";

const API = {
    logIn: async function (userdata) {
        return await axios.post("/api/login", userdata);
    },

    logOut: async function () {
        return await axios.get('/api/logout');
    },

    checkAuth: async function () {
        const { data } = await axios.get("/api/checkAuthentication");
        return data;
    },

    updatePW: async function (itemDetails) {
        return await axios.put(`/api/updateUserPW/${itemDetails.id}`, itemDetails);
    },

    getTopicItemNames: async function (topic) {
        return await axios.get(`/api/get${topic}ItemNames`);
    },

    getItemByPath: async function (topic, item) {
        return await axios.get(`/api/get${topic}ByPath/${item}`);
    },

    updateTopicItem: async function (topic, itemDetails) {
        return await axios.put(`/api/update${topic}ById/${itemDetails.id}`, itemDetails);
    },

    addTopicItem: async function (topic, itemDetails) {
        console.log(topic, itemDetails);
        return await axios.post(`/api/add${topic}`, itemDetails);
    },

    deleteItemByPath: async function (topic, item) {
        return await axios.delete(`/api/delete${topic}ByPath/${item}`);
    },

    getDisciplines: async function () {
        return await axios.get('/api/getAllDisciplines');
    },

    getDisciplineById: async function (disciplineId) {
        return await axios.get(`/api/getDisciplineById/${disciplineId}`);
    },

    getPartners: async function () {
        return await axios.get('/api/getAllPartners');
    },

    getPartnerById: async function (partnerId) {
        return await axios.get(`/api/getPartnerById/${partnerId}`);
    },

    getProjectById: async function (projId) {
        return await axios.get(`/api/getProjectById/${projId}`);
    }
}

export default API;