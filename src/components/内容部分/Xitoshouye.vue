<template>
	<div class="Xito-b">
		<div class="Xito-c">
			<div class="biaot">
				<span>快速新建</span>
			</div>
			<div class="toxiang">
				<ul>
					<li>
						<i class="el-icon-user"></i>
						<br />
						<span>新建客户</span>
					</li>

					<li>
						<i class="el-icon-user"></i>
						<br />
						<span>新建客户</span>
					</li>

					<li>
						<i class="el-icon-user"></i>
						<br />
						<span>新建客户</span>
					</li>
					<li>
						<i class="el-icon-user"></i>
						<br />
						<span>新建客户</span>
					</li>
					<li>
						<i class="el-icon-user"></i>
						<br />
						<span>新建客户</span>
					</li>
					<li>
						<i class="el-icon-user"></i>
						<br />
						<span>新建客户</span>
					</li>
					<li>
						<i class="el-icon-user"></i>
						<br />
						<span>新建客户</span>
					</li>
					<li>
						<i class="el-icon-user"></i>
						<br />
						<span>新建客户</span>
					</li>
					<li>
						<i class="el-icon-user"></i>
						<br />
						<span>新建客户</span>
					</li>
					<li>
						<i class="el-icon-user"></i>
						<br />
						<span>新建客户</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="Xito-d">
			<div class="Xito-zuo">
				<div class="biaot2">
					<span class="bFF">数据简报</span>
					<i>
						<el-select v-model="value1" multiple placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
						</el-select>

						<el-select v-model="value2" multiple collapse-tags style="margin-left: 20px;" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
						</el-select>
					</i>
				</div>
				<div class="Nirfa">
					<div class="diyi">
						<div>
							<span class="DDEEF">新增客户</span>
							<br />
							<span class="Shuju">300</span>
						</div>
						<div>
							<span class="DDEEF">新增客户</span>
							<br />
							<span class="Shuju">300</span>
						</div>
						<div>
							<span class="DDEEF">新增客户</span>
							<br />
							<span class="Shuju">300</span>
						</div>
						<div>
							<span class="DDEEF">新增客户</span>
							<br />
							<span class="Shuju">300</span>
						</div>
					</div>
					<div class="diyi">
						<div>
							<span class="DDEEF">新增客户</span>
							<br />
							<span class="Shuju">300</span>
						</div>
						<div>
							<span class="DDEEF">新增客户</span>
							<br />
							<span class="Shuju">300</span>
						</div>
						<div>
							<span class="DDEEF">新增客户</span>
							<br />
							<span class="Shuju">300</span>
						</div>
						<div>
							<span class="DDEEF">新增客户</span>
							<br />
							<span class="Shuju">300</span>
						</div>
					</div>
				</div>
			</div>
			<div class="Xito-you">
				<div class="biaot2">
					<span class="bFF">数据简报</span>
					<span class="sahng">
						<el-button>发布公告</el-button>
					</span>
					<span class="fhfaf">
						<el-button>查看更多</el-button>
					</span>
				</div>
				<div class="shdua">
					<br />
					<br />
					<div>
						<el-table :data="tableData" border style="width: 100%">
							<el-table-column prop="date" label width="180"></el-table-column>
							<el-table-column prop="name" label width="180"></el-table-column>
							<el-table-column prop="address" label></el-table-column>
						</el-table>
					</div>
				</div>
			</div>
		</div>
		<div class="Xito-d">
			<div class="Xito-zuo">
				<div class="biaot2">
					<!--标题2-->
					<span class="bFF">业绩目标</span>
					<span>
						<i>
							<el-select v-model="value1" multiple placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
						</i>
					</span>
					<span>
						<i>
							<div class="block">
								<el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
							</div>
						</i>
					</span>
				</div>
				<div class="Nirfa">
					<div id="myChart3" :style="{width: '600px', height: '400px'}"></div>
				</div>
			</div>
			<div class="Xito-you">
				<div class="biaot2">
					<span class="bFF">数据简报</span>
					<span class="sahng">
						<el-button>发布公告</el-button>
					</span>
					<span class="fhfaf">
						<el-button>查看更多</el-button>
					</span>
				</div>
				<div class="shdua">
					<div id="myChart2" :style="{width: '600px', height: '400px'}"></div>
				</div>
			</div>
		</div>
		<div class="Xito-d">
			<div class="Xito-zuo">
				<div class="biaot2">
					<!--标题2-->
					<span class="bFF">业绩目标</span>
					<span>
						<i>
							<el-select v-model="value1" multiple placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
						</i>
					</span>
					<span>
						<i>
							<div class="block">
								<el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
							</div>
						</i>
					</span>
				</div>
				<div class="Nirfa">
					<div id="myChart4" :style="{width: '600px', height: '400px'}"></div>
				</div>
			</div>
			<div class="Xito-you">
				<div class="biaot2">
					<span class="bFF">数据简报</span>
					<span class="sahng">
						<el-button>发布公告</el-button>
					</span>
					<span class="fhfaf">
						<el-button>查看更多</el-button>
					</span>
				</div>
				<div class="shdua">
					<div id="myChart" :style="{width: '600px', height: '400px'}"></div>
				</div>
			</div>
		</div>
		<div class="Xito-d">
			<div class="Xito-zuo">
				<div class="biaot2">
					<!--标题2-->
					<span class="bFF">业绩目标</span>
					<span>
						<i>
							<el-select v-model="value1" multiple placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
						</i>
					</span>
					<span>
						<i>
							<div class="block">
								<el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
							</div>
						</i>
					</span>
				</div>
				<div class="Nirfa">
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="date" label="日期" width="180">
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="180">
						</el-table-column>
						<el-table-column prop="address" label="地址">
						</el-table-column>
					</el-table>
				</div>
			</div>
			<div class="Xito-you">
				<div class="biaot2">
					<span class="bFF">数据简报</span>
					<span class="sahng">
						<el-button>发布公告</el-button>
					</span>
					<span class="fhfaf">
						<el-button>查看更多</el-button>
					</span>
				</div>
				<div class="shdua">
					<div class="Shijian">
						<el-calendar v-model="value">
</el-calendar>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//哦为踹死特
	// let echarts = require('echarts/lib/echarts')
	require("echarts/lib/chart/bar");
	require("echarts/lib/component/tooltip");
	require("echarts/lib/component/title");
	export default {
		data() {
			return {
				value: new Date(),
				options: [{
						value: "选项1",
						label: "黄金糕",
					},
					{
						value: "选项2",
						label: "双皮奶",
					},
					{
						value: "选项3",
						label: "蚵仔煎",
					},
					{
						value: "选项4",
						label: "龙须面",
					},
					{
						value: "选项5",
						label: "北京烤鸭",
					},
				],
				value1: [],
				value2: [],
				tableData: [{
						date: "2016-05-02",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2016-05-04",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1517 弄",
					},
					{
						date: "2016-05-01",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1519 弄",
					},
					{
						date: "2016-05-03",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1516 弄",
					},

					{
						date: "2016-05-03",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1516 弄",
					},
				],
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
							text: "今天",
							onClick(picker) {
								picker.$emit("pick", new Date());
							},
						},
						{
							text: "昨天",
							onClick(picker) {
								const date = new Date();
								date.setTime(date.getTime() - 3600 * 1000 * 24);
								picker.$emit("pick", date);
							},
						},
						{
							text: "一周前",
							onClick(picker) {
								const date = new Date();
								date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
								picker.$emit("pick", date);
							},
						},
					],
				},
				ffffs: "",
			};
		},
		mounted() {//挂载实例上后调用
			this.drawLine();
			this.drawLine2();
			this.drawLine3();
			this.drawLine4();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myChart"));
				// 绘制图表
				myChart.setOption({
					title: {
						text: "",
					},
					tooltip: {},
					xAxis: {
						data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
					},
					yAxis: {},
					series: [{
						name: "销量",
						type: "bar",
						data: [5, 20, 36, 10, 10, 20],
					}, ],
				});
			},
			drawLine2() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myChart2"));
				// 绘制图表
				myChart.setOption({
					color: ["#3398DB"],
					tooltip: {
						trigger: "axis",
						axisPointer: {
							// 坐标轴指示器，坐标轴触发有效
							type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
						},
					},
					grid: {
						left: "3%",
						right: "4%",
						bottom: "3%",
						containLabel: true,
					},
					xAxis: [{
						type: "category",
						data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
						axisTick: {
							alignWithLabel: true,
						},
					}, ],
					yAxis: [{
						type: "value",
					}, ],
					series: [{
						name: "直接访问",
						type: "bar",
						barWidth: "60%",
						data: [10, 52, 200, 334, 390, 330, 220],
					}, ],
				});
			},
			drawLine3() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myChart3"));
				// 绘制图表
				myChart.setOption({
					title: {
						text: '某站点用户访问来源',
						subtext: '纯属虚构',
						left: 'center'
					},
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: '55%',
						center: ['50%', '60%'],
						data: [{
								value: 335,
								name: '直接访问'
							},
							{
								value: 310,
								name: '邮件营销'
							},
							{
								value: 234,
								name: '联盟广告'
							},
							{
								value: 135,
								name: '视频广告'
							},
							{
								value: 1548,
								name: '搜索引擎'
							}
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				});
			},
			drawLine4() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myChart4"));
				// 绘制图表
				myChart.setOption({
					legend: {},
					tooltip: {},
					dataset: {
						dimensions: ['product', '2015', '2016', '2017'],
						source: [{
								product: 'Matcha Latte',
								'2015': 43.3,
								'2016': 85.8,
								'2017': 93.7
							},
							{
								product: 'Milk Tea',
								'2015': 83.1,
								'2016': 73.4,
								'2017': 55.1
							},
							{
								product: 'Cheese Cocoa',
								'2015': 86.4,
								'2016': 65.2,
								'2017': 82.5
							},
							{
								product: 'Walnut Brownie',
								'2015': 72.4,
								'2016': 53.9,
								'2017': 39.1
							}
						]
					},
					xAxis: {
						type: 'category'
					},
					yAxis: {},
					// Declare several bar series, each will be mapped
					// to a column of dataset.source by default.
					series: [{
							type: 'bar'
						},
						{
							type: 'bar'
						},
						{
							type: 'bar'
						}
					]
				});
			},
		},
	};
</script>

<style scope>
	@import url("../../../public/index3.css");
.Shijian{
	width: 100%;
	height: 90%;
	margin-top: 31px;
	overflow: hidden;
}
	.sahng {
		margin-left: 249px;
	}

	.fhfaf {
		margin-left: 36px;
	}

	.el-button {
		width: 22%;
		height: 68%;
	}

	.Xito-b {
		width: 83%;
		height: 100%;
		background-color: #ffffff;
		/* margin: 0 auto; */
		/* text-align: center; */
		margin-left: 131px;
		overflow: auto;
	}

	.Xito-c {
		width: 100%;
		margin: 20px auto;
		height: 208px;
		border: 1px solid #eeeeee;
	}

	.biaot {
		width: 100%;
		background-color: #f9f9f9;
		height: 28%;
		border: 1px solid #eeeeee;
	}

	.toxiang {
		width: 100%;
		height: 72%;
	}

	.toxiang ul li {
		list-style: none;
		float: left;
		/* padding: 49px 34px 0px 33px; */
		text-align: center;
		width: 9.6%;
		/* height: 42%; */
		height: 113px;
	}

	.toxiang li:hover {
		cursor: pointer;
		background-color: #eeeeee;
	}

	.biaot span {
		color: #666666;
		font-size: 15px;
		font-weight: 600;
		line-height: 55px;
		margin-left: 10px;
	}

	.bFF {
		color: #666666;
		font-size: 15px;
		font-weight: 600;
		line-height: 55px;
		margin-left: 10px;
	}

	.el-icon-user {
		font-size: 46px;
		margin-top: 20px;
	}

	.Xito-d {
		width: 100%;
		height: 420px;
		border: 1px solid #eeeeee;
	}

	.Xito-zuo {
		width: 49.5%;
		height: 100%;
		float: left;
		border: 1px solid #eeeeee;
	}

	.Xito-you {
		width: 49.5%;
		height: 100%;
		float: right;
		border: 1px solid #eeeeee;
	}

	.biaot2 {
		width: 100%;
		background-color: #f9f9f9;
		height: 14%;
	}

	/* .el-select { */
	/* display: inline-block; */
	/* position: relative; */
	/* margin-left: 119px; */
	/* } */

	.Nirfa {
		width: 100%;
		height: 86%;
		background-color: #ffffff;
	}

	.diyi {
		width: 100%;
		height: 50%;
	}

	.diyi div {
		width: 25%;
		text-align: center;
		height: 100%;
		cursor: pointer;
		float: left;
		line-height: 60px;
	}

	.DDEEF {
		color: #d7d7d7;
		font-size: 18px;
	}

	.Shuju {
		font-size: 29px;
	}

	.shdua {
		width: 100%;
		height: 86%;
		margin-top: -40px;
	}

	.Jine {
		width: 100%;
		height: 50px;
		border: 1px solid;
		line-height: 50px;
	}

	.shuju {
		width: 100%;
		height: 308px;
		border: 1px solid;
	}
</style>
