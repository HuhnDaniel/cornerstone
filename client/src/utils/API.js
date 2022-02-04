import axios from "axios";

export default {
    getDisciplineNames: async function () {
        return await axios.get('/api/getDisciplineNames');
    },

    getDisciplines: async function () {
        return await axios.get('/api/getAllDisciplines');
    },

    getDisciplineById: async function (disciplineId) {
        return await axios.get(`/api/getDisciplineById/${disciplineId}`);
    },

    getSubDisciplineNames: async function () {
        return await axios.get('/api/getSubDisciplineNames');
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