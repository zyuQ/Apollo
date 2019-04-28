<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<button class="send-btn" @click="sendGet">发送GET请求</button>
		<button class="send-btn" @click="sendPost">发送POST请求</button>
		<button class="send-btn" @click="getState">获取state数据</button>
	</div>
</template>

<script>
	// @ is an alias to /src
	import {
		mapActions,
		mapState
	} from "vuex";
	import HelloWorld from '@/components/HelloWorld.vue';

	export default {
		name: 'home',
		components: {
			HelloWorld,
		},
		data() {
			return {

			};
		},
		computed: {
			...mapState("user", ["userInfo"])
		},
		methods: {
			...mapActions("user", ["getSmsCode", "login"]),
			async sendGet() {
				const res = await this.getSmsCode('13163977252');
				console.log('返回值: ' + res);
			},
			async sendPost() {
				this.login({
					phone: '13163977252',
					code: '611929'
				})
			},
			getState() {
				console.log('用户信息: ' + JSON.stringify(this.userInfo))
			}
		}
	};
</script>
<style lang="scss">
@import "../assets/scss/main.scss";

</style>