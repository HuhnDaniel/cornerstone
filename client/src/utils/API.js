import axios from "axios";

export default {
    getTopicNames: async function (topic) {
        return await axios.get(`/api/get${topic}Names`);
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