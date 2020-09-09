<template>
	<div class="home">
		<div>

			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="courseDesc" label="courseDesc" sortable>
				</el-table-column>
				<el-table-column prop="courseName" label="courseName" sortable>
				</el-table-column>
				<el-table-column prop="id" label="id" sortable>
				</el-table-column>
				<el-table-column prop="professional" label="professional" sortable>
					<template #default='{row}'>
						{{row.professional}}
					</template>
				</el-table-column>
			</el-table>
		</div>



		<div class='add' @click='add'>
			添加
		</div>
		<div class='add' @click='remove'>
			删除
		</div>
		<button class='add' @click='update'>
			修改
		</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				tableData: [{
					id: 1,
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					id: 2,
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					id: 3,
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					children: [{
						id: 31,
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					}, {
						id: 32,
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					}]
				}, {
					id: 4,
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],

			}
		},
		mounted() {
			this.getAll()
		},
		methods: {
			update() {
				axios.post(
						"http://139.9.169.87:8081/examsystem/updateCourse?professional.id=1&professional.professionalName=aeaewa&professional.professionalDesc=awraw&id=59&courseName=5ewae&courseDesc=waf", {
							// professionalId:7,
							// courseDesc:"waf",
							// courseName:"5ewae",
							// id:59,
							// professional:{
							//   id:1,
							//   professionalName:"aeaewa",
							//   professionalDesc:"awraw"
							// }
						}, {
							headers: {
								"Accept": "application/json",
								"Content-Type": "application/x-www-form-urlencoded"
							}
						}
					)
					.then(res => {
						console.log(res)
					})
					.catch(err => {
						console.log(err)
					})
			},
			remove() {
				axios.get("http://139.9.169.87:8081/examsystem/deleteCourse", {
						params: {
              id: 1,
              professionalName:"ccc",
              courseDesc: "waf"
						}
					})
					.then(res => {
						console.log(res)
					})
					.catch(err => {
						console.log(err)
					})
			},
			add() {

				axios.post("http://139.9.169.87:8081/examsystem/addCourse", {
						professionalId: 7,
						courseDesc: "waf",
						courseName: "5ewae",
						id: 4,
						professional: {
							id: 1,
							professionalName: "aeaewa",
							professionalDesc: "awraw"
						}
					}, {
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

				// axios.post("http://139.9.169.87:8081/examsystem/addCourse",{
				//   professionalId:7,
				//   courseDesc:"waf",
				//   courseName:"5ewae",
				//   id:4,
				//   professional:{
				//     id:1,
				//     professionalName:"aeaewa",
				//     professionalDesc:"awraw"
				//   }
				// }
				// ,{header:{"Content-type":"application/json;"}}
				// )
				//   .then(res=>{
				//     console.log(res)
				//   })
				//   .catch(err=>{
				//     console.log(err)
				//   })
			},
			getAll() {
				axios.get("http://139.9.169.87:8081/examsystem/getAllCourse")
					.then(res => {
						this.tableData = res.data.data
						console.log(this.tableData.length)
					})
					.catch(err => {
						console.log(err)
					})
			}
		}
	};
</script>
<style lang='scss' scoped>
	.add {
		margin: 100px auto;
	}
</style>
