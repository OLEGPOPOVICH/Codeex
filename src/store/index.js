import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		companies: [],
		arrayCompanies: [],
		totalCompanies: 0,
		perPage: 5,
		currentPage: 1,
		counter: 0,
		oldItem: []
	},
	mutations: {
		addToCompanies (state, company) {
			if(localStorage.getItem('companies') != null) {
				state.companies = JSON.parse(localStorage.getItem('companies'))
			}
			state.companies.push(company);
		},
		addToLocal (state) {
			localStorage.setItem('companies', JSON.stringify(state.companies))
		},
		downloadLocalStore(state) {
			state.companies = []
			if(localStorage.getItem("companies") != null) {
				if(localStorage.getItem("companies") != null) {
					var object = JSON.parse(localStorage.getItem("companies"));
					
					for(let i = 0; i < object.length; i++) {
						state.companies.push(object[i]);
					}
				}
			}
		},
		deleteItem (state, item) {
			state.companies.splice(state.companies.indexOf(item), 1)
			localStorage.setItem('companies', JSON.stringify(state.companies))
		},
		saveItem (state, item) {
		
			state.companies = state.companies.map(company => {
				if(company.inn === state.oldItem.inn) {
					company = item
				}
				return company
			})
			localStorage.setItem('companies', JSON.stringify(state.companies))
		},
		createArray (state) {
			state.counter = 0
			state.totalCompanies = state.companies.length
		
			let arrayCompanies = new Array(Math.ceil(state.totalCompanies/state.perPage))

			for(var i = 0; i < arrayCompanies.length; i++) {
				arrayCompanies[i] = new Array(state.perPage);
			}

			for(let i = 0; i < Math.ceil(state.totalCompanies/state.perPage); i++) {
				for(let j = 0; j < state.perPage; j++) {
					arrayCompanies[i][j] = state.companies[state.counter]
					state.counter++
				}
			}

			state.arrayCompanies = arrayCompanies
		}
	},
	actions: {
		
	},
	getters: {
		
		
	}
})