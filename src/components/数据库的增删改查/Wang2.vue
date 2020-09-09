<template>
	<div class="xingix">
		<ul>
			<!-- <button @click="Shanchu()">dda</button> -->
			<table>
				<tr v-for="(dd,key,index) in shu" :key="index">
					<th>{{dd.courseDesc}}</th><br />
					<th>{{dd.courseName}}</th><br />
					<th>{{dd.professional.id}}</th><br />
					<th>{{dd.id}}</th><br />
					<th>{{dd.professionalId}}</th><br />
					<th>{{dd.professional.professionalDesc}}</th><br />
					<th>{{dd.professional.professionalName}}</th><br />
					<th><a @click="Shanchu(index,dd.id)">删除</a><a @click="Zengjia()">增加</a><a @click="Xiugai()">修改</a></th>
				</tr>
			</table>
		</ul>
		<div>
			id:<input style="text" v-model="intdd1" placeholder="输入id"><br>
			名称:<input style="text" v-model="intdd2" placeholder="输入名称"><br>
			名称2:<input style="text" v-model="intdd3" placeholder="输入名称">
			<input type="submit" @click="Ze()" value="增加" />
		</div>
	</div>

</template>
<script>
	import axios from 'axios'
	import qs from 'qs'
	export default {
		data() {
			return {
				shu: [],
				intdd1: '',
				intdd2: '',
				intdd3: ''
			}
		},
		created() {
			this.$axios({
				url: "http://139.9.169.87:8081/examsystem/getAllCourse",
				method: "get",
			}).then(res => {
				console.log(res);
				this.shu = res.data.data;
				console.log(this.shu)
			})
		},
		methods: {
			Shanchu(index, id) { //删除方法del(idnex,id)index是为了删除当前数组第index��	�数据上面我用v-for循环了
				this.$axios({
					url: "http://139.9.169.87:8081/examsystem/deleteCourse",
					method: "get",
					params: {
						id: id //传给后台
					}
				}).then(res=>{
					console.log(res)
				})
				alert(1)
			},
			Zengjia() {
				alert(2)
			},
			Xiugai() {
				axios.post(
						"http://139.9.169.87:8081/examsystem/updateCourse?professional.id=160&professional.professionalName=cnm&professional.professionalDesc=cnm&id=161&courseName=cnm&courseDesc=cnm", {}, {
							headers: {
								"Accept": "application/json",
								"Content-Type": "application/x-www-form-urlencoded"
							}
						})
					.then(res => {
						console.log(res)
					})
					.catch(err => {
						console.log(err)
					})
				alert(3)

			},
			Ze() {
				// axios.post(
				// 		"http://139.9.169.87:8081/examsystem/addCourse?professional.id=161&professional.professionalName=傻逼&professional.professionalDesc=nima&id=160&courseName=柴旺333&courseDesc=ddd对&professionalId=161", {
				// 		} {
				// 			headers: {
				// 				"Accept": "application/json",
				// 				"Content-Type": "application/x-www-form-urlencoded"
				// 			}
				// 		})
				// 	.then(res => {
				// 		console.log(res)
				// 	})
				// 	.catch(err => {
				// 		console.log(err)
				// 	})
				this.$axios({
				url: "http://139.9.169.87:8081/examsystem/addCourse",
				method: "post",
				params:{
					"professional.id":161,
					"professional.professionalName":"傻逼",
					"professional.professionalDesc":"nima",
					"id":160,
					"courseName":"我柴旺是250",
					"courseDesc":"我柴旺是傻逼",
				},
				data:qs.stringify({
					"professionalId":161
				})
				}).then(res => {
				console.log(res)
				})
				.catch(err => {
				console.log(err)
				})
			}
		}
	}
</script>

<style scope>
	.shu {
		width: 100%;
		height: 400px;
		border: 1px solid red;
		margin: 0 auto;
	}

	.xingix li {
		list-style: none;
	}

	.xingix table {
		width: 100%;
		border: 1px solid;
	}

	.xingix tr {
		width: 100%;
		border: 1px solid;
	}

	.xingix th {
		border: 1px solid ;
	}

	.xingix a {
		margin: 0px 8px 0px 6px;
		border: 1px solid;
		cursor: pointer;
	}
</style>
