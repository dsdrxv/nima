<template>
	<div class="deng">
		账户:<input type="text" v-model="username" placeholder="请输入用户名"><br />
		密码:<input type="password" v-model="password" placeholder="请输入密码" /><br />
		<input type="submit" @click="er()" value="登录" />
		<!-- <input type="text" v-model="ddd2" placeholder="请输入一个数字"> -->
		<!-- <span>{{ddd2}}</span> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				ddd2: "",
				ddd: "成功"
			}
		},
		methods: {
			er() {
				this.$axios({
					url: "http://139.9.169.87:8081/examsystem/login",
					method: "post",
					params: { //quer用params
						'username': this.username,
						'password': this.password
					}
				}).then(res => {
					if (res.data.success =="true") {
						console.log(this.ddd)
					}
					console.log(res)
				})
			}
		},
	}
</script>

<style scope>
	.deng {
		width: 600px;
		height: 200px;
		border: 1px solid red;
		margin: 0 auto;
		background-color: #00FFFF;
	}
</style>
