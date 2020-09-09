<template>
	<div class="Shouye-a">

		<!--导航栏--->
		<div class="Shouye-yiji">
			<!---->
			<div class="caidan">
				<!--标题-->
				<div class="biaoti">
					<el-tabs :tab-position="tabPosition" style="height: 100%;width: 100%;">
						<el-tab-pane label="快捷菜单" style="color: #FFFFFF;">
							<div class="adda">
								<i class="el-icon-s-fold"></i>
								<span>快捷菜单</span>
							</div>
							<div class="qie">
								<router-link class="todd" to="/Shouye/Xitoshouye">
									<li tabindex='1'>系统首页</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Kehuleibiao">
									<li tabindex='1'>客户类表</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Shaixuan">
									<li tabindex='1'>客户筛选</li>
								</router-link>
								<li tabindex='1'>销售线索</li>
								<li tabindex='1'>全部商机</li>
								<li tabindex='1'>全部订单</li>
								<li tabindex='1'>回款管理</li>
								<li tabindex='1'>报销审批</li>
								<li tabindex='1'>全部工单</li>
								<li tabindex='1'>系统公告</li>
								<li tabindex='1'>内部消息</li>
								<li tabindex='1'>业绩目标</li>
								<li tabindex='1'>营销活动</li>
							</div>
						</el-tab-pane>
						<el-tab-pane label="客户管理">
							<div class="adda">
								<i class="el-icon-s-fold"></i>
							</div>
							<div class="qie">
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
									<li tabindex='1'>客户列表</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Gonghaikehu">
									<li tabindex='1'>公海客户</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Cheshi">
									<li tabindex='1'>垃圾客户</li>
								</router-link>
								<li tabindex='1'>客户筛选</li>
								<router-link class="todd" to="/Shouye/Fenye">
									<li tabindex='1'>公共线索</li>
								</router-link>
								<li tabindex='1'>联系人列表</li>
								<li tabindex='1'>跟进记录</li>
							</div>
						</el-tab-pane>
						<el-tab-pane label="商机管理">
							<div class="adda">
								<i class="el-icon-s-fold"></i>
							</div>
							<div class="qie">
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
								<li tabindex='1'>全部商机</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
								<li tabindex='1'>我的商机</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
								<li tabindex='1'>下属商机</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
								<li tabindex='1'>销售线索</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
								<li tabindex='1'>我的协作</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
								<li tabindex='1'>下属协作</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
								<li tabindex='1'>成交商机</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
								<li tabindex='1'>添加商机</li>
								</router-link>
							</div>
						</el-tab-pane>
						<el-tab-pane label="商机管理">
							<div class="adda">
								<i class="el-icon-s-fold"></i>
							</div>
							<div class="qie">
								<li tabindex='1'>系统首页</li>
								<li tabindex='1'>客户类表</li>
								<li tabindex='1'>客户筛选</li>
								<li tabindex='1'>销售线索</li>
								<li tabindex='1'>全部商机</li>
								<li tabindex='1'>全部订单</li>
								<li tabindex='1'>回款管理</li>
								<li tabindex='1'>报销审批</li>
								<li tabindex='1'>全部工单</li>
								<li tabindex='1'>系统公告</li>
								<li tabindex='1'>内部消息</li>
								<li tabindex='1'>业绩目标</li>
								<li tabindex='1'>营销活动</li>
							</div>
						</el-tab-pane>
						<el-tab-pane label="订单管理">
							<div class="adda">
								<i class="el-icon-s-fold"></i>
							</div>
							<div class="qie">
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
								<li tabindex='1'>全部订单</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
								<li tabindex='1'>我的订单</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
								<li tabindex='1'>下属订单</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
								<li tabindex='1'>我的协作</li>
								</router-link>
								<router-link class="todd" to="/Shouye/Kehuliebiao2">
								<li tabindex='1'>添加订单</li>
								</router-link>
							</div>
						</el-tab-pane>
						<el-tab-pane label="财务管理">
							<div class="adda">
								<i class="el-icon-s-fold"></i>
							</div>
							<div class="qie">
								<li tabindex='1'>回款计划</li>
								<li tabindex='1'>回款管理</li>
								<li tabindex='1'>发票管理</li>
								<li tabindex='1'>费用管理</li>
								<li tabindex='1'>情报管理</li>
							</div>
						</el-tab-pane>
						<el-tab-pane label="审批管理">
							<div class="adda">
								<i class="el-icon-s-fold"></i>
							</div>
							<div class="qie">
								<li tabindex='1'>订单审批</li>
								<li tabindex='1'>回款审批</li>
								<li tabindex='1'>退款审批</li>
								<li tabindex='1'>销售线索</li>
								<li tabindex='1'>报销审批</li>
								<li tabindex='1'>请假审批</li>
								<li tabindex='1'>出差审批</li>
								<li tabindex='1'>借款审批</li>
								<li tabindex='1'>请示审批</li>
								<li tabindex='1'>拜访审批</li>
							</div>
						</el-tab-pane>
						<el-tab-pane label="统计报表">
							<div class="adda">
								<i class="el-icon-s-fold"></i>
							</div>
							<div class="qie">
								<li tabindex='1'>销售分析</li>
								<li tabindex='1'>业务分析</li>
								<li tabindex='1'>记录汇总</li>
								<li tabindex='1'>业务增长</li>
								<li tabindex='1'>业务统计</li>
								<li tabindex='1'>业务完成</li>
								<li tabindex='1'>销售统计</li>
								<li tabindex='1'>利润统计</li>
								<li tabindex='1'>呼叫统计</li>
							</div>
						</el-tab-pane>
						<el-tab-pane label="工单管理">
							<div class="adda">
								<i class="el-icon-s-fold"></i>
							</div>
							<div class="qie">
								<li tabindex='1'>全部工单</li>
								<li tabindex='1'>我发起的</li>
								<li tabindex='1'>我处理的</li>
								<li tabindex='1'>抄送我的</li>
							</div>
						</el-tab-pane>
						<el-tab-pane label="办公申请">
							<div class="adda">
								<i class="el-icon-s-fold"></i>
							</div>
							<div class="qie">
								<li tabindex='1'>请假申请</li>
								<li tabindex='1'>出差申请</li>
								<li tabindex='1'>借款申请</li>
								<li tabindex='1'>工作请示</li>
								<li tabindex='1'>客户拜访</li>
							</div>
						</el-tab-pane>
						<el-tab-pane label="办公管理">
							<div class="adda">
								<i class="el-icon-s-fold"></i>
							</div>
							<div class="qie">
								<li tabindex='1'>系统公告</li>
								<li tabindex='1'>内部消息</li>
								<li tabindex='1'>任务管理</li>
								<li tabindex='1'>日程管理</li>
								<li tabindex='1'>工作报告</li>
								<li tabindex='1'>员工绩效</li>
								<li tabindex='1'>考勤日历</li>
								<li tabindex='1'>考勤统计</li>
								<li tabindex='1'>移动签到</li>
								<li tabindex='1'>文档管理</li>
								<li tabindex='1'>导出管理</li>
								<li tabindex='1'>导入管理</li>
								<li tabindex='1'>通话记录</li>
								<li tabindex='1'>短信记录</li>
							</div>
						</el-tab-pane>
						<el-tab-pane label="营销工具">
							<div class="adda">
								<i class="el-icon-s-fold"></i>
							</div>
							<div class="qie">
								<li tabindex='1'>业绩目标</li>
								<li tabindex='1'>营销活动</li>
								<li tabindex='1'>竞争对手</li>
								<li tabindex='1'>客户关怀</li>
								<li tabindex='1'>短息群发</li>
								<li tabindex='1'>邮件群发</li>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</div>
			<!-- <div class="caidan2"></div> -->
		</div>
		<!-- 中间部分-->
		<div class="ZHob">
			<div class="Zhob-to">
				<div class="zhanghao1">
						<li>当前管理员</li>
						<li>{{shu[1].mingcheng}}</li>
						<li></li>
						<li></li>
						<li>
							<span @click="tuichu()">{{denglu}}</span>
						</li>
				</div>
			</div>
			<div class="neiro">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Shouye",
		data() {
			return {
				shu: [
					{
						mingcheng:''
					}
				],
				adad:'',
				tui:"退出",
				denglu:'',
				tabPosition: 'left'
			};
		},
		mounted() {
			this.shu.push({
				mingcheng: this.$route.query.name1,
			}),
			console.log(this.shu)
		},
		methods: {
			tuichu(){
				this.shu[1].mingcheng=this.adad,
				this.denglu=this.tui
				console.log(this.denglu)
			}
		},
	}
</script>

<style scope>
span{
	cursor: pointer;
}
	.zhanghao1 li{
		list-style: none;
		    float: left;
		    line-height: 51px;
		    padding: 0px 0px 0px 21px;
	}
.shuddd{
	    width: 226px;
    height: 30px;
    margin-top: 10px;
}
	.neiro {
		width: 1620px;
		height: 94%;
		overflow: auto;
	}
	.adda {
		width: 100%;
		height: 53px;
		font-size: 27px;
		border: 1px solid;
		background-color: #6cc9f5;
	}
	.el-tabs--left .el-tabs__item.is-left {
		text-align: right;
		height: 57px;
		line-height: 67px;
	}
	.el-tabs__item.is-active {
		color: #409EFF;
	}

	.el-tabs__item:hover {
		color: #409EFF;
		cursor: pointer;
	}

	.Shouye-a {
		width: 100%;
		height: 950px;
	}

	.Shouye-yiji {
		width: 15%;
		height: 100%;
		background-color: #eeeeee;
	}

	.Shouye-yiji {
		display: flex;
	}

	.caidan {
		width: 100%;
		color: #FFFFFF;
		height: 100%;
	}

	.caidan2 {
		width: 70%;
		height: 100%;
		background-color: #aaaaaa;
	}

	.ZHob {
		width: 85%;
		height: 100%;
	}

	.Shouye-a {
		display: flex;
	}

	.Zhob-to {
		width: 100%;
		height: 6%;
		color: #fff;
		background-color: #2EBE9E;
	}

	.tubiao {
		width: 33%;
		height: 8%;
		text-align: center;
		background-color: #333744;
	}

	.el-icon-magic-stick {
		margin-top: 16px;
		font-size: 46px;
		color: #0079fe;
	}

	.el-tabs__item {
		padding: 0 20px;
		height: 40px;
		box-sizing: border-box;
		line-height: 40px;
		display: inline-block;
		list-style: none;
		font-size: 14px;
		font-weight: 500;
		color: #FFFFFF !important;
		position: relative;
	}

	.biaoti {
		width: 100%;
		height: 100%;
		display: flex;
	}

	.biaoti ul {
		padding: 0px;
		margin: 0px;
		width: 100%;
	}

	.biaoti li {
		text-align: center;
		margin: 0px;
		color: #fff;
		list-style: none;
		border-bottom: 1px solid #FFFFFF;
		line-height: 41px;
		cursor: pointer;
		color: #333744;
	}

	.el-tabs--left .el-tabs__header.is-left {
		float: left;
		margin-bottom: 0;
		background-color: #333744;
		margin-right: 0px !important;
	}

	span {
		font-size: 13px;
	}

	.el-icon-s-unfold {
		color: #fff;
		font-size: 27px;
	}

	.dd {
		background-color: red;
	}

	.todd {
		text-decoration: none;
	}

	.qie li:focus {
		color: #479efd;
		border: none;
		background-color: #EEEEEE;
	}
</style>
