<template>
	<div class="login" :class="loginBg">
		<div class="btn">
			<el-button @click='bgReplace()'>更换背景</el-button>
		</div>

		<div class="Inp">
			<div>
				<img src="../../assets/login/4.png" />
				<h2>WEB在线客服管理系统</h2>

				<div class="demo-input-suffix">
					<div class="p">
						<el-input placeholder="请输入用户名称" v-model="username">
							<i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
						</el-input>
					</div>
					<div class="p">
						<el-input placeholder="请输入登录密码" v-model="password" type='password'>
							<i slot="prefix" class="el-input__icon el-icon-key"></i>
						</el-input>
					</div>
					<div class="p" style="position: relative;">
						<el-button class="loginBtn" :class="{'loginBtnDH' : loginBol}" type="success" @click='login()'>登录</el-button>
					</div>
				</div>

			</div>
		</div>
		<div class="text-center text-white">
			Copyright © 在线客服管理系统, All Rights Reserved.
		</div>
	</div>
</template>

<script>
	import {
		Button,
		Input,
		Notification
	} from 'element-ui'

	export default {
		components: {
			[Button.name]: Button,
			[Input.name]: Input
		},
		data() {
			return {
				username: '',
				password: '',
				bgActive: 0,
				loginBol: false,
				userList: [{
					username: '15576809957',
					password: '123123'
				}, {
					username: '17674017907',
					password: '123123'
				}]
			}
		},
		computed: {
			loginBg() {
				return {
					'login-bg1': this.bgActive == 0,
					'login-bg2': this.bgActive == 1,
					'login-bg3': this.bgActive == 2
				}
			}
		},
		methods: {
			bgReplace() {
				this.bgActive++
				if (this.bgActive > 2) {
					this.bgActive = 0
				}
			},
			DHTime() {
				this.loginBol = true;
				setTimeout(() => {
					this.loginBol = false
				}, 1000)
			},
			login() {
				if (this.username == '' || this.password == '') {
					Notification.error({
						message: '账号或密码不能为空!!!'
					});
					this.DHTime()
					return

				}

				let bol = true;

				for (let i = 0; i < this.userList.length; i++) {
					if (this.username == this.userList[i]['username'] && this.password == this.userList[i]['password']) {
						bol = false;
					}
				}
				if (bol) {
					Notification.error({
						message: '账号或密码错误!!!'
					});
					this.DHTime()
				} else {
					let obj = {
						username: this.username,
						password: this.password
					}
					window.sessionStorage.userObj = JSON.stringify(obj);
					this.$router.push('/home')
				}

			}
		}
	}
</script>

<style scoped="">
	.login-bg1 {
		background: url(../../assets/login/1.png);
	}

	.login-bg2 {
		background: url(../../assets/login/2.png);
	}

	.login-bg3 {
		background: url(../../assets/login/3.png);
	}

	.loginBtn {
		position: absolute;
		background: #2EBE9E;
		border: 1px solid #2EBE9E;
		left: 0;
		width: 100%;
	}

	.loginBtnDH {
		animation: ring 1s;
	}

	.login {
		background-repeat: no-repeat;
		width: 100%;
		display: flex;
		background-size: 100% 100%;
		height: 100%;
		flex-direction: column;
	}

	.btn {
		width: 7.2%;
		margin: 0 auto;
	}

	.p {
		margin: 10px 0;
	}

	.Inp {
		width: 20%;
		margin: 120px auto;
		text-align: center;
		background: rgba(255, 255, 255, 0.5);
		padding: 45px 25px;
		padding-bottom: 80px;
	}

	@-webkit-keyframes ring {

		0%,
		100% {
			-webkit-transform: translatey(0);
		}

		10%,
		30%,
		50%,
		70%,
		90% {
			-webkit-transform: translatey(-5px);
		}

		20%,
		40%,
		60%,
		80% {
			-webkit-transform: translatey(5px);
		}
	}
</style>
