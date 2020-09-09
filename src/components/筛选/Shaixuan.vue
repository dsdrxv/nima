<template>
	<div class="Shaixuan-a">
		<div class="Shaixuan-b">
			<div class="Bioadr">
				<span class="ddd1">高级筛选</span>
				<span class="ddd2">
					<el-popover placement="right" width="400" trigger="click">
						<el-table :data="gridData">
							<el-table-column width="150" property="date" label="日期"></el-table-column>
							<el-table-column width="100" property="name" label="姓名"></el-table-column>
						</el-table>
						<el-button slot="reference">click 激活</el-button>
					</el-popover>
				</span>
				<span class="ddd3">
					<el-popover placement="right" width="400" trigger="click">
						<el-button slot="reference">click 激活</el-button>
					</el-popover>
				</span>
			</div>
			<div class="Shiaxuan-bb">
				<p>客户分类：<span class="yeans">全部</span><span>我的客户</span><span>下属客户</span><span>重点客户</span><span>我的协作</span><span>今日新增</span><span>公海用户</span><span>垃圾客户</span></p>
				<p>客户类型：<span class="yeans">全部</span><span>企业客户</span><span>个人客户</span></p>
				<p>客户状态：<span class="yeans">全部</span><span>正在跟进</span><span>正在试用</span><span>准备购买 </span><span>准备付款</span><span>已经购买</span><span>暂时搁置</span><span>垃圾客户</span></p>
				<p>客户星级：<span class="yeans">全部</span><span>我的客户</span><span>下属客户</span><span>重点客户</span><span>我的协作</span><span>今日新增</span><span>公海用户</span><span>垃圾客户</span></p>
				<p>跟进时间：<span class="yeans">全部</span><span>我的客户</span><span>下属客户</span><span>重点客户</span><span>我的协作</span><span>今日新增</span><span>公海用户</span><span>垃圾客户</span></p>
				<p>字母筛选：<span class="yeans">全部</span><span>我的客户</span><span>下属客户</span><span>重点客户</span><span>我的协作</span><span>今日新增</span><span>公海用户</span><span>垃圾客户</span></p>
				<p>所属行业：<span class="yeans">全部</span><span>我的客户</span><span>下属客户</span><span>重点客户</span><span>我的协作</span><span>今日新增</span><span>公海用户</span><span>垃圾客户</span></p>
				<p>字母筛选：<span class="yeans">全部</span><span>我的客户</span><span>下属客户</span><span>重点客户</span><span>我的协作</span><span>今日新增</span><span>公海用户</span><span>垃圾客户</span></p>
				<p>所属行业：<span class="yeans">全部</span><span>我的客户</span><span>下属客户</span><span>重点客户</span><span>我的协作</span><span>今日新增</span><span>公海用户</span><span>垃圾客户</span></p>
			</div>
		</div>
		<div class="Diadad">
            <div class="tiania">
					<el-button type="primary" icon="el-icon-search">添加</el-button>
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
			<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column fixed prop="mingcheng" label="客户名称" min-width="150">
				</el-table-column>
				<el-table-column prop="name" label="客户状态" min-width="120">
				</el-table-column>
				<el-table-column prop="address" label="客户星级" min-width="120">
				</el-table-column>
				<el-table-column prop="city" label="首联系人" min-width="120">
				</el-table-column>
				<el-table-column prop="address" label="手机号码" min-width="200">
				</el-table-column>
				<el-table-column prop="zip" label="最后跟进" min-width="120">
				</el-table-column>
				<el-table-column prop="date" label="未跟进天数" min-width="120">
				</el-table-column>
				<el-table-column fixed="right" label="操作" min-width="290">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
						<el-button @click="Dina()" type="text" size="small">编辑</el-button>
						<el-button @click="Dina()" type="text" size="small">编辑</el-button>
						<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
							移除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-row>
				<el-col :span="24">
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-sizes="[5, 10]" :page-size="10" layout="total, prev, pager, next, jumper" :total="tableData.length">
					</el-pagination>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				gridData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				tableData: [{
					mingcheng: '深圳市亿恩科技有限公司',
					name: '上海市普陀区金沙江路',
					address: '1395534555',
					city: '李小红',
					date: '2016-05-03',
					zip: 30,
					tians: 30
				}, {
					mingcheng: '深圳市亿恩科技有限公司',
					name: '上海市普陀区金沙江路',
					address: '1395534555',
					city: '李小红',
					date: '2016-05-03',
					zip: 30,
					tians: 30
				}, {
					mingcheng: '深圳市亿恩科技有限公司',
					name: '上海市普陀区金沙江路',
					address: '1395534555',
					city: '李小红',
					date: '2016-05-03',
					zip: 30,
					tians: 30
				}, {
					mingcheng: '深圳市亿恩科技有限公司',
					name: '上海市普陀区金沙江路',
					address: '1395534555',
					city: '李小红',
					date: '2016-05-03',
					zip: 30,
					tians: 30
				}, {
					mingcheng: '深圳市亿恩科技有限公司',
					name: '上海市普陀区金沙江路',
					address: '1395534555',
					city: '李小红',
					date: '2016-05-03',
					zip: 30,
					tians: 30
				}, {
					mingcheng: '深圳市亿恩科技有限公司',
					name: '上海市普陀区金沙江路',
					address: '1395534555',
					city: '李小红',
					date: '2016-05-03',
					zip: 30,
					tians: 30
				}, {
					mingcheng: '深圳市亿恩科技有限公司',
					name: '上海市普陀区金沙江路',
					address: '1395534555',
					city: '李小红',
					date: '2016-05-03',
					zip: 30,
					tians: 30
				}, {
					mingcheng: '深圳市亿恩科技有限公司',
					name: '上海市普陀区金沙江路',
					address: '1395534555',
					city: '李小红',
					date: '2016-05-03',
					zip: 30,
					tians: 30
				}, {
					mingcheng: '深圳市亿恩科技有限公司',
					name: '上海市普陀区金沙江路',
					address: '1395534555',
					city: '李小红',
					date: '2016-05-03',
					zip: 30,
					tians: 30
				}, {
					mingcheng: '深圳市亿恩科技有限公司',
					name: '上海市普陀区金沙江路',
					address: '1395534555',
					city: '李小红',
					date: '2016-05-03',
					zip: 30,
					tians: 30
				}, {
					mingcheng: '深圳市亿恩科技有限公司',
					name: '上海市普陀区金沙江路',
					address: '1395534555',
					city: '李小红',
					date: '2016-05-03',
					zip: 30,
					tians: 30
				}, {
					mingcheng: '深圳市亿恩科技有限公司',
					name: '上海市普陀区金沙江路',
					address: '1395534555',
					city: '李小红',
					date: '2016-05-03',
					zip: 30,
					tians: 30
				}, {
					mingcheng: '深圳市亿恩科技有限公司',
					name: '上海市普陀区金沙江路',
					address: '1395534555',
					city: '李小红',
					date: '2016-05-03',
					zip: 30,
					tians: 30
				}],
				pageTotal: 0,
				currentPage: 1, //默认第一页
				pagesize: 10 //当前显示页数
			}
		},
	
	methods: {
		handleClick(row) {
			console.log(row);
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
			this.pagesize = val;
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			this.currentPage = val;

		},
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		Dina() {
			alert(1)
		},
		deleteRow(index, rows) {
			rows.splice(index, 1);
		}
    }
    }
</script>

<style scope>
	@import url("../../style/index4.css");
    .tiania{
        width: 100%;
        height: 100px;
        line-height: 100px;
    }
	.Diadad {
		width: 100%;
		height: 600px;
		background-color: #fff;
		margin-top: 15px;
	}

	.Shiaxuan-bb {
		width: 100%;
		height: 440px;
		line-height: 36px;
		border: 1px solid #e4e4e4;
	}

	.Shiaxuan-bb span {
		margin: 0px 0px 0px 40px;
	}

	.Shiaxuan-bb p {
		margin-left: 22px;
		font-size: 10px;
	}

	.yeans {
		color: #00FFFF;
	}

	.ddd1 {
		margin-left: 23px;
	}

	.ddd2 {
		margin-left: 938px;
	}

	.ddd3 {
		margin-left: 13px;
	}

	.Bioadr {
		width: 100%;
		line-height: 57px;
		height: 60px;
		border-bottom: 1px solid #e4e4e4;
	}

	.Shaixuan-a {
		width: 82.8%;
		margin: 20px auto;
		background-color: darkgrey;
	}

	.Shaixuan-b {
		width: 100%;
		height: 500px;
		background-color: #fff;
		/* border: 1px solid #eeeeee; */
	}
</style>
