import api from "../api";
import router from "../router";

export default {
    namespaced: "user", 
    state: {
		userList: [],
		count: 0,
		lowerList: [],
		lowerCount: 0
    },
    mutations: {
		setUserList(state, payload) { 
			state.userList = payload;
		},
		setCount(state, payload) {
			state.count = payload;
		},
		setLowerList(state, payload) { 
			state.lowerList = payload;
		},
		setLowerCount(state, payload) {
			state.lowerCount = payload;
		},
	},
    actions: {
        async userFindAll({ commit, state }, payload) {
            try {
                const res = await api.userFindAll(payload);
				if (res.resCode == 0) {
					commit('setUserList', res.obj.rows);
					commit('setCount', res.obj.count);
				} else {
				}
            } catch (e) {
                console.log('错误:  ' + e)
            }
        },
		async userLowerList({ commit, state }, payload) {
		    try {
		        const res = await api.useLowerList(payload);
				if (res.resCode == 0) {
					commit('setLowerList', res.obj.rows);
					commit('setLowerCount', res.obj.count);
				} else {
				}
		    } catch (e) {
		        console.log('错误:  ' + e)
		    }
		},
		async userUpdateQuality({ commit, state }, payload) {
		    try {
		        const res = await api.updateQuality(payload);
				return res;
		    } catch (e) {
		        console.log('错误:  ' + e)
		    }
		},
		async userUpdateState({ commit, state }, payload) {
		    try {
		        const res = await api.updateState(payload);
				return res;
		    } catch (e) {
		        console.log('错误:  ' + e)
		    }
		},
		async userUpdateLevel({ commit, state }, payload) {
		    try {
		        const res = await api.updateLevel(payload);
				return res;
		    } catch (e) {
		        console.log('错误:  ' + e)
		    }
		},
		async useAgentAdd({ commit, state }, payload) {
		    try {
		        const res = await api.useAgentAdd(payload);
				return res;
		    } catch (e) {
		        console.log('错误:  ' + e)
		    }
		},
		async labFindByUseId({ commit, state }, payload) {
		    try {
		        const res = await api.labFindByUseId(payload);
				return res;
		    } catch (e) {
		        console.log('错误:  ' + e)
		    }
		},
		async labAdd({ commit, state }, payload) {
		    try {
		        const res = await api.labAdd(payload);
				return res;
		    } catch (e) {
		        console.log('错误:  ' + e)
		    }
		},
		async labDelete({ commit, state }, payload) {
		    try {
		        const res = await api.labDelete(payload);
				return res;
		    } catch (e) {
		        console.log('错误:  ' + e)
		    }
		},
		async useUpdatePwd({ commit, state }, payload) {
		    try {
		        const res = await api.useUpdatePwd(payload);
				return res;
		    } catch (e) {
		        console.log('错误:  ' + e)
		    }
		},
		async useFindSuperiorList({ commit, state }, payload) {
		    try {
		        const res = await api.useFindSuperiorList(payload);
				return res;
		    } catch (e) {
		        console.log('错误:  ' + e)
		    }
		},
		async useUpdateSuperior({ commit, state }, payload) {
		    try {
		        const res = await api.useUpdateSuperior(payload);
				return res;
		    } catch (e) {
		        console.log('错误:  ' + e)
		    }
		}
    }

};