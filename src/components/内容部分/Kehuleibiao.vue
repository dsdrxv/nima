<template>
	<div class="Kehu">
		<div class="Kehu2">
			<div class="Kehu-biaot">
				<ul>
					<li>全部客户</li>
					<li>我的客户</li>
					<li>下属客户</li>
					<li>重点客户</li>
					<li>我的协作</li>
					<li>下属协作</li>
				</ul>
			</div>
			<div class="Kehuxuanz">
				<span>
					<el-select v-model="value" clearable placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</span>
				<span>
					<el-select v-model="value" clearable placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</span>
				<span>
					<el-select v-model="value" clearable placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</span>
				<span>
					<el-select v-model="value" clearable placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</span>
				<span>
					<el-select v-model="value" clearable placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</span>
				<el-button type="primary" icon="el-icon-search">搜索</el-button>
				<el-button type="primary" icon="el-icon-search">搜索</el-button>

			</div>
		</div>
		<div class="Kehu-biaot2">
			<div class="bioatittt">
				<router-link to="/Shouye/Tianjian">
					<el-button type="primary" icon="el-icon-search">添加</el-button>
				</router-link>

				<el-button type="primary" icon="el-icon-search">导入</el-button>


				<el-button type="primary" icon="el-icon-search">导出</el-button>

				<el-button type="primary" icon="el-icon-search">新建任务</el-button>
				<el-button type="primary" icon="el-icon-search">转移客户</el-button>

				<el-button type="primary" icon="el-icon-search">移入公海</el-button>


				<el-button type="primary" icon="el-icon-search">合并客户</el-button>

				<el-button type="primary" icon="el-icon-search">批量编辑</el-button>
				<el-button type="primary" icon="el-icon-search">搜索</el-button>

				<el-button type="primary" icon="el-icon-search">搜索</el-button>
			</div>
			<div class="DUda">
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column label="客户名称" width="200px">
						<template slot-scope="scope">{{ scope.row.mingcheng }}</template>
					</el-table-column>
					<el-table-column prop="name" label="客户状态 " width="80">
					</el-table-column>
					<el-table-column prop="address" label="客户星级" width="130" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="Shoujihao" label="首联系人" width="130" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="name" label="手机号码" width="130" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="date" label="最后跟进" width="130" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="tianshu" label="未跟进天数" width="130" show-overflow-tooltip>
					</el-table-column>
					<!-- <el-table-column prop="caozuo[0]" label="操作" @click="Dina(caozuo[0][1])" show-overflow-tooltip> -->
					<!-- </el-table-column> -->
					<el-table-column fixed="right" label="操作" width="290">
						<template slot-scope="scope">
							<el-popover placement="right" width="400" trigger="click">
								<el-table :data="shu">
									<el-table-column width="100" property="mingcheng" label="客户名称"></el-table-column>
									<el-table-column width="100" property="address" label="姓名"></el-table-column>
									<el-table-column width="300" property="Shoujihao" label="地址"></el-table-column>
									<el-table-column width="100" property="name" label="日期"></el-table-column>
									<el-table-column width="100" property="date" label="姓名"></el-table-column>
									<el-table-column width="300" property="tianshu" label="地址"></el-table-column>
								</el-table>
								<el-button slot="reference">查看</el-button>
							</el-popover>
							<el-button @click="Dina()" type="text" size="small">编辑</el-button>
							<el-button @click="Dina()" type="text" size="small">编辑</el-button>
							<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
								移除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nin: true,
				Cund: [],
				shu:[
					{
						mingcheng:'深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao:'1395534555',
						name:'李小红',
						date: '2016-05-03',
						tianshu: '30'
					}
				],
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: '',
				tableData: [{
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30',
						caozuo: [
							["阿三 ", " 大啊 ", " san"],
							[]
						]

					}, {
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					}, {
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					}, {
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					}, {
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					}, {
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					}, {
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					},
					{
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					},
					{
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					},
					{
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					},
					{
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					},
					{
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					},
					{
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					},
					{
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					},
					{
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					},
					{
						mingcheng: '深圳市亿恩科技有限公司',
						address: '上海市普陀区金沙江路 1518 弄',
						Shoujihao: '1395534555',
						name: "李小红",
						date: '2016-05-03',
						tianshu: '30'
					}
				],
				multipleSelection: []
			}
		},
		methods: {
			// toggleSelection(rows) {
				// if (rows) {
					// rows.forEach(row => {
						// this.$refs.multipleTable.toggleRowSelection(row);
					// });
				// } else {
					// this.$refs.multipleTable.clearSelection();
				// }
			// },
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			Dina() {
				alert(1)
			},
			deleteRow(index, rows) {
				rows.splice(index, 2);//一条
			}
		},
		mounted() {
			this.tableData.push({
				mingcheng: this.$route.query.name1,
				address: this.$route.query.name2,
				Shoujihao: this.$route.query.name3,
				name: this.$route.query.name4,
				date: this.$route.query.name5,
				tianshu: this.$route.query.name6
			})
		},
		beforeUpdate(){
			for (var i = 0; i < this.tableData[0].length; i++) {
			this.shu;
		}
	console.log(this.shu)
	},
}
</script>

<style scope>
	@import url("../../style/index2.css");
	.el-table--enable-row-transition .el-table__body td {
		transition: background-color .25s ease;
		text-align: center !important;
	}
router-link{
	border: 0px solid;
}
	.el-table th>.cell {
		display: inline-block;
		box-sizing: border-box;
		position: relative;
		vertical-align: middle;
		padding-left: 10px;
		padding-right: 10px;
		width: 100%;
		text-align: center !important;
	}

	.el-button--danger {
		color: #eeeeee !important;
		background-color: #F56C6C;
		border-color: #F56C6C;
	}

	.DUda {
		width: 100%;
		height: 94%;
		border: 1px solid;

	}

	.bioatittt {
		width: 100%;
		height: 6%;
		border: 1px solid;
		line-height: 57px;
	}

	.Kehu {
		width: 83%;
		height: 100%;
		background-color: #ffffff;
		/* margin: 0 auto; */
		/* text-align: center; */
		margin-left: 131px;
		overflow: auto;
	}

	.Kehu2 {
		width: 100%;
		height: 170px;
		margin-top: 20px;
	}

	.Kehu-biaot {
		width: 100%;
		height: 30%;
		border-bottom: 1px solid #e4e4e4;
		background-color: #f9f9f9;
		margin-top: -14px;
	}

	.Kehu-biaot ul li {

		list-style: none;
		font-weight: 500;
		float: left;
		cursor: pointer;
		padding: 16px 48px 10px 48px;
		/* border: 1px solid; */
		font-size: 15px;

	}

	.Kehu-biaot li:hover {
		color: blue;
	}

	.Kehuxuanz {
		width: 100%;
		height: 70%;
	}

	.el-input {
		position: relative;
		font-size: 14px;
		display: inline-block;
		width: 83% !important;
	}

	.el-input__suffix {
		right: 19px !important;
		transition: all .3s;
	}

	.el-button--primary {
		color: #FFF;
		background-color: #409EFF;
		border-color: #409EFF;
		width: 90px;
		height: 38px;
		margin-left: 23px !important;
	}

	.Kehu-biaot2 {
		width: 100%;
		height: 1000px;
		margin-top: 10px;
	}

	.el-button {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		background: #FFF;
		border: 1px solid #DCDFE6;
		color: #606266;
		-webkit-appearance: none;
		text-align: center;
		box-sizing: border-box;
		outline: 0;
		margin: 0;
		transition: .1s;
		font-weight: 500;
		padding: 12px 8px !important;
		font-size: 14px;
		border-radius: 4px;
	}
</style>
