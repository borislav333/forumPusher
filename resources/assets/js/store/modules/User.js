
const state={
}
const mutations={
    /*login(state,data){
        console.log(data);

    }*/
    'LOGIN_DATA'(state,data){
        console.log(data.data.access_token);
    }
}
const actions={
    login({dispatch},form){
        axios.post('/api/auth/login',form)
            .then(data=>dispatch('playload',data)).catch(err=>console.log(err))
    },

}
const getters={

}
export default {
    state,
    mutations,
    actions,
    getters
}