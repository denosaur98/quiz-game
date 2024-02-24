import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			users: []
		}
	},
	mutations: {
		signIn(state, user) {
			state.users.push(user)
		}
	},
	actions: {
		signIn({ commit }, user) {
			commit('signIn', user)
		}
	},
})

export default store