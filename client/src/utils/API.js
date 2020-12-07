import axios from "axios";

export default {
    getDisciplines: async function () {
        return await axios.get('/api/getAllDisciplines');
    },

    getPartners: async function () {
        return await axios.get('/api/getAllPartners');
    }
}