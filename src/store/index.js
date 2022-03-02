import { createStore } from 'vuex'

export default createStore({
    state: {
        user: null,
        url: "http://127.0.0.1:8000/api",
        // url: "http://192.168.43.106:8000/api",
    },
    mutations: {},
    actions: {},
    modules: {}
})