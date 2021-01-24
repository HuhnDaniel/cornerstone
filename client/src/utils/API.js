import axios from "axios";

export default {
    getDisciplines: async function () {
        return await axios.get('/api/getAllDisciplines');
    },

    getDisciplineById: async function (disciplineId) {
        return await axios.get(`/api/getDisciplineById/${disciplineId}`);
    },

    getPartners: async function () {
        return await axios.get('/api/getAllPartners');
    },

    getProjectById: async function (projId) {
        return await axios.get(`/api/getProjectById/${projId}`);
    }
}