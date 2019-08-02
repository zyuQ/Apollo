import {
	get,
	post
} from "../plugins/axios";

export default {

	/**
	 * 第三方插件接口
	 */
	qiniu: () => get("/qiniu"), // 七牛云获取TOKEN

	adminLogin: payload => post('/pc/admin/login', payload), // 管理员登录
};
