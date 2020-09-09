<template>
	<div class="Tianjia-a">
		<div class="Tianjia-b">
			<span class="zit">创建客户</span><span>* 为必填项</span>
		</div>
		<div class="Tianjian-biao">
			<div class="Tianjia-zuo">
				<div>
					<h3>基础信息</h3>
					<div class="jida">
						<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
							<el-form-item label="活动名称" prop="name">
								<el-input v-model="ruleForm.name"></el-input>
							</el-form-item>
							<el-form-item label="活动区域" prop="region">
								<el-select v-model="ruleForm.region" placeholder="请选择活动区域">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="活动时间" required>
								<el-col :span="11">
									<el-form-item prop="date1">
										<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
									</el-form-item>
								</el-col>
								<el-col class="line" :span="2">-</el-col>
								<el-col :span="11">
									<el-form-item prop="date2">
										<el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
									</el-form-item>
								</el-col>
							</el-form-item>
							<el-form-item label="即时配送" prop="delivery">
								<el-switch v-model="ruleForm.delivery"></el-switch>
							</el-form-item>
							<el-form-item label="活动性质" prop="type">
								<el-checkbox-group v-model="ruleForm.type">
									<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
									<el-checkbox label="地推活动" name="type"></el-checkbox>
									<el-checkbox label="线下主题活动" name="type"></el-checkbox>
									<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
								</el-checkbox-group>
							</el-form-item>
							<el-form-item label="特殊资源" prop="resource">
								<el-radio-group v-model="ruleForm.resource">
									<el-radio label="线上品牌商赞助"></el-radio>
									<el-radio label="线下场地免费"></el-radio>
								</el-radio-group>
							</el-form-item>
							<el-form-item label="活动形式" prop="desc">
								<el-input type="textarea" v-model="ruleForm.desc"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
								<el-button @click="resetForm('ruleForm')">重置</el-button>
							</el-form-item>
						</el-form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				rules: {
					name: [{
							required: true,
							message: '请输入活动名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					region: [{
						required: true,
						message: '请选择活动区域',
						trigger: 'change'
					}],
					date1: [{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}],
					date2: [{
						type: 'date',
						required: true,
						message: '请选择时间',
						trigger: 'change'
					}],
					type: [{
						type: 'array',
						required: true,
						message: '请至少选择一个活动性质',
						trigger: 'change'
					}],
					resource: [{
						required: true,
						message: '请选择活动资源',
						trigger: 'change'
					}],
					desc: [{
						required: true,
						message: '请填写活动形式',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
						this.$router.push({
							path: '/Shouye/Kehuleibiao',
							query: {
								name1: this.ruleForm.name,
								name2: this.ruleForm.region,
								name3: this.resetForm.date1,
								name4: this.resetForm.date2,
								name5: this.resetForm.resource,
								name6: this.resetForm.desc
							}
						})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style scope>
	@import url("../../style/index.css");

	.el-rate {
		height: 20px;
		line-height: 1;
		width: 140px;
		float: right;
		margin-top: 26px;
		margin-right: 321px;
	}

	select {
		border: 1px solid #E4E4E4;
		width: 437px;
		height: 45px;
		margin-left: 10px;
	}

	.Dibu {
		width: 100%;
		height: 100px;
		text-align: center;

	}

	.el-input {
		position: relative;
		font-size: 14px;
		display: inline-block;
		width: 100%;
		margin-left: 10px !important;
	}

	.jida {
		width: 80%;
		margin: 0 auto;
		line-height: 72px;
		font-size: 14px;
		/* border: 1px solid red; */
	}

	h3 {
		margin-left: 40px;
	}


	.Tianjia-zuo {
		width: 49.9%;
		margin: 0 auto;
		border-right: 1px solid #E4E4E4;
	}

	.Tianjian-biao {
		width: 100%;
		height: 697px;
	}

	.zit {
		font-size: 16px;
		font-weight: 560;
		margin-left: 23px;
	}

	.Tianjia-a {
		width: 83%;
		margin: 20px auto;
		background-color: #fff;
		overflow: auto;
	}

	.Tianjia-b {
		width: 100%;
		height: 50px;
		line-height: 55px;
		border-bottom: 1px solid #E4E4E4;
	}
</style>
