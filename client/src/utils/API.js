import axios from "axios";

export default {
    getTopicItemNames: async function (topic) {
        return await axios.get(`/api/get${topic}ItemNames`);
    },

    getItemByPath: async function (topic, item) {
        return await axios.get(`/api/get${topic}ByPath/${item}`);
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
    },

    updateItem: async function (topic, itemDetails) {
        return await axios.put(`/api/update${topic}ById/${itemDetails.id}`, itemDetails);
    }
}