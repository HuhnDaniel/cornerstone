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
    }
}