import Vue from 'vue';
import Vuex from 'vuex';

import localData from '../modules/localData';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',

	state: {
		todoData: localData().get(),
		chosenFilter: 'ALL'
	},

	mutations: {
		ADD(state, title) {
			const newTodo = {
				id: (new Date).getTime(),
				title,
				completed: false
			};
			state.todoData = [...state.todoData, newTodo];
			localData().set(state.todoData);
		},

		TOGGLE(state, id) {
			const index = state.todoData.findIndex(item => item.id === id);

			state.todoData[index].completed = !state.todoData[index].completed;
			localData().set(state.todoData);
		},

		DELETE(state, id) {
			const index = state.todoData.findIndex(item => item.id === id);

			state.todoData = [
				...state.todoData.slice(0, index),
				...state.todoData.slice(index + 1)
			];
			localData().set(state.todoData);
		},

		FILTER(state, filter) { state.chosenFilter = filter }
	},

	actions: {
		addTodo({commit}, title) {
			commit('ADD', title)
		},

		toggleTodo({commit}, id) {
			commit('TOGGLE', id)
		},

		deleteTodo({commit}, id) {
			commit('DELETE', id)
		},

		filterTodo({commit}, filterType) {
			commit('FILTER', filterType)
		}
	},

	getters: {
		todoData: state => {
			switch (state.chosenFilter) {
				case 'ALL':
					return state.todoData;
					break;
				case 'ACTIVE':
					return state.todoData.filter(item => item.completed !== true);
					break;
				case 'DONE':
					return state.todoData.filter(item => item.completed === true);
					break;
			}
		},
		chosenFilter: state => state.chosenFilter
	}
});