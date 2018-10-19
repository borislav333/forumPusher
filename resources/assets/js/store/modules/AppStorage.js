const state={
};
const mutations={
    'SET_USER_STORAGE'(state,user){
        localStorage.setItem('user',user);
    },
    'SET_TOKEN_STORAGE'(state,token){
        localStorage.setItem('token',token);
    },
    'CLEAR'(){
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }
}
const actions={
    setUserStorage({commit},user){
        commit('SET_USER_STORAGE',user);
    },
    setTokenStorage({commit},token){
        commit('SET_TOKEN_STORAGE',token);
    }
}
const getters={
    getUserStorage(){
        return localStorage.getItem('user');
    },
    getTokenStorage(){
        return localStorage.getItem('token');
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}