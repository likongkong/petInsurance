<template>
	<view class="wrap">
		<view class="content">
			<view class="contentWrap">
				<view class="title">
					运营者信息
				</view>
				<view class="operatorInfoWrap">
					<listFormView :list="operatorListData" v-on:bindkeyinput="bindkeyinput"></listFormView>
				</view>
			</view>
			<view style="width: 100%;height: 40rpx;"></view>
			<view class="contentWrap">
				<view class="title">
					企业信息
				</view>
				<view class="enterpriseInfoWrap">
					<listFormView :list="enterpriseListData"></listFormView>
				</view>
			</view>
			<view class="confirmBtn">
				提交审核
			</view>
		</view>
	</view>
</template>

<script>
	import listFormView from "../components/listFormView/listFormView";
	export default {
		data() {
			return {
				operatorListData:[
					{
						subheading:'请输入运营者姓名',
						placeholder:'',
						value:'阿斯达多',
						type:'text',
						name:'operatorName'
					},
					{
						subheading:'请输入运营者姓身份证号',
						placeholder:'',
						value:'1101234199209219923',
						type:'text',
						name:'operatorCard'
					},
					{
						subheading:'请输入运营者手机号',
						placeholder:'',
						value:'1131111122222',
						type:'phoneCode',
						name:'operatorPhone'
					},
					{
						subheading:'请输入验证码',
						placeholder:'',
						value:'284721',
						type:'text',
						name:'operatorCode'
					},
					{
						subheading:'请输入支付宝收款账号',
						placeholder:'',
						value:'18383882919',
						borderbottom1:'hide',
						type:'text',
						name:'operatorAlipay'
					}
				],
				enterpriseListData:[
					{
						subheading:'请输入企业名称',
						placeholder:'',
						value:'大黄狗宠物店',
						type:'text',
						name:'companyName'
					},
					{
						subheading:'请输入企业法人姓名',
						placeholder:'',
						value:'阿斯达多',
						type:'text',
						name:'enterpriseName'
					},
					{
						subheading:'请输入企业法人身份证',
						placeholder:'',
						value:'1101234199209219923',
						type:'text',
						name:'enterpriseCard'
					},
					{
						subheading:'请输入企业地址',
						isExactAddress:true,
						type:'address',
						name:'enterpriseAddress'
					},
					{
						subheading:'请上传营业执照扫描件',
						type:'businessLicense',
						name:'enterpriseLicense'
					},
				],
				obj:{}
			}
		},
		components:{
			listFormView
		},
		methods: {
			bindkeyinput(e){
				let key=e.name;
				this.obj[key]=e.value;
				console.log(this.obj)
			}
		}
	}
</script>

<style>
page{background: #F3F3F3;}
.content{
	padding: 30rpx 30rpx 40rpx 30rpx;
	box-sizing: border-box;
}
.contentWrap{
	width: 100%;
	background: #FFFFFF;
	border-radius: 10rpx;
	padding: 40rpx 30rpx 30rpx 30rpx;
	box-sizing: border-box;
}
.title{
	font-size: 36rpx;
	font-weight: 800;
	color: #000000;
	line-height: 50rpx;
}
.confirmBtn{
	width: 433rpx;
	height: 70rpx;
	background: #FDD000;
	border-radius: 8rpx;
	font-size: 28rpx;
	font-weight: 600;
	color: #4D4637;
	line-height: 40rpx;
	text-align: center;
	line-height: 70rpx;
	margin: 40rpx auto 0;
}
</style>
