<template>
	<div class="Denglu">
		<div class="Denglu-a">
			<div class="Denglu-b">
				<i class="el-icon-magic-stick"></i>
				<h1>客户关系管理系统</h1>
				<h5>Customer Relationship Management</h5>
			</div>
			<div class="Denglu-ma">
				<div class="zhang"><i class="el-icon-user-solid"></i><input type="text" value="zql" size="20" v-model="username"></div>
				<div class="mima"><i class="el-icon-star-on"></i><input type="password" size="20" v-model="password"></div>
				<button @click="log()">登录</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				shu: [],
				xians: ''
			}
		},
		created() {
			this.$axios({
				url: "https://www.fastmock.site/mock/467dd413ec70825e0f0c954ad9356f4e/zhang01/shujiu",
				method: "get"
			}).then(res => {
				console.log(res)
				this.shu = res.data.data;
			})
		},
		methods: {
			log() {
				if (this.username == '' || this.password == '') {
					alert("账号密码不能为空")
					this.xians = 1;
				} else {
					this.$router.push({
						path:'/Shouye/Xitoshouye',
						query:{
							name1:this.username,
							name2:this.password
						}
				})
				}
			}
		},
	}
</script>

<style scope>
	.xiangs {
		width: 70%;
		display: block;
		height: 45px;
		background-color: red;
	}

	.el-icon-star-on {
		float: left;
		font-size: 28px;
		margin-top: 7px;
	}

	.el-icon-user-solid {
		float: left;
		font-size: 28px;
		margin-top: 7px;
	}

	.Denglu {
		width: 100%;
		height: 951px;
		border: 1px solid #ffffff;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-image: url(../../1.jpg);
	}

	.Denglu-a {
		width: 25%;
		height: 550px;
		background-color: #fff;
		opacity: 0.7;
		border: 1px solid #eee;
		margin: 150px auto;
	}

	.Denglu-b {
		width: 100%;
		height: 280px;
		color: #0079fe;
		text-align: center;
		line-height: 10px;
	}

	.el-icon-magic-stick {
		margin-top: 60px;
		font-size: 100px;
		color: #0079fe;
	}

	.Denglu-ma {
		text-align: center;
	}

	.Denglu-ma input {
		width: 89%;
		height: 87%;
		border: 0;
		outline: none;
		background-color: rgba(0, 0, 0, 0);

	}

	.zhang {
		border: 1px solid;
		width: 70%;
		margin: 0 auto;
		height: 45px;
	}

	.mima {
		border: 1px solid;
		width: 70%;
		margin: 0 auto;
		height: 45px;
		margin-top: 24px;
	}

	.Denglu-ma div:hover {
		border: 1px solid #0079fe;
	}

	button {
		color: #FFFFFF;
		width: 70%;
		height: 45px;
		border: 0px;
		margin: 25px auto;
		background-color: #0079fe;
	}
</style>
