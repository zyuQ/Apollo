import api from "../api";
import router from "../router";

export default {
    namespaced: "user", 
    state: {
        countdownTime: 60,
		userInfo: null
    },
    mutations: {
		setUserInfo(state, payload) {
			state.userInfo = payload;
		}
	},
    actions: {
        async getSmsCode({ commit, state }, phone) {
            try {
                const res = await api.getSmsCode(phone);
				console.log(res);
                return true;
            } catch (e) {
                console.log('错误:  ' + e)
            }
        },
		async login({commit, state}, payload) {
			try {
			    const res = await api.login(payload);
				console.log(res);
				if (res.data.resCode == 0) {
					commit('setUserInfo', res.data);
				} else {
					commit('setUserInfo', res.data);
				}
			} catch (e) {
			    console.log('错误:  ' + e)
			}
		}
    }

};
