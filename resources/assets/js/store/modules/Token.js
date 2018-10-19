const mutations={
    isValid(state,playload){
        //const payload=this.payload(token);
        console.log('nee')
        if(playload){
            return playload.iss == 'http://127.0.0.1:8000/api/auth/login' ? true : false
        }

        return false
    },
   /* payload2(state,token){
        console.log(token);
        const payload=token.data.access_token.split('.')[1];
        return this.decode(payload);
        //console.log(JSON.parse(atob(payload)));
    },*/
    decode(state,payload){
        console.log(JSON.parse(atob(payload)))
        return JSON.parse(atob(payload));
    }
}

const actions={
    playload({dispatch,commit},token){
        const playload=token.data.access_token.split('.')[1];
        commit('decode',playload);
        dispatch('isValid',playload);
    },
    isValid({commit},playload){
        commit('isValid',playload);
    }
}

export default {
    mutations,
    actions
}