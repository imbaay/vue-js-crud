import PostDataService from '../../services/PostDataService'

const state = {
	posts: [],
}

const getters = {
	getAllPosts: state => {
		return state.posts;
	}
}

const mutations = {
	getAllPosts(state, posts) {
		state.posts = posts
		console.log(posts)
	},
}

const actions = {
	getAllPosts({ commit }) {
		PostDataService.getAll().then(res => {
			commit('getAllPosts', res.data)
		})
			.catch(err => {
				console.log(err);
			})
	}
}

export default {
	state, getters, mutations, actions
}