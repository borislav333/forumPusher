import Vue from 'vue'
import Vuex from 'vuex'
import AppStorage from './modules/AppStorage.js'
import User from './modules/User.js'
import Token from './modules/Token.js'

Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        AppStorage,
        User,
        Token
    }
})