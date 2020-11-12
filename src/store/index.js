import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const mutations = {
    CONFIRM_SAVE: (state, payload) => {
        state.usersStorage = payload
    }
}

export const actions = {
    storeUsers({ commit }, users) {
        commit('CONFIRM_SAVE', users)
    }
}

export default new Vuex.Store({
    state: {
        usersStorage: []
    },

    mutations: mutations,
    actions: actions
})