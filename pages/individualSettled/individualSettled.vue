<template>
	<view class="wrap">
		<view class="content">
			<view class="contentWrap">
				<view class="title">
					个人信息
				</view>
				<view class="petInfoWrap">
					<listFormView :list="userListData"></listFormView>
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
				userListData:[
					{
						subheading:'请输入您的姓名',
						placeholder:'',
						value:'阿斯达多',
						type:'text'
					},
					{
						subheading:'请输入您的身份证号',
						placeholder:'',
						value:'1101234199209219923',
						type:'text'
					},
					{
						subheading:'请输入您的手机号',
						placeholder:'请输入您的手机号',
						value:'1131111122222',
						type:'phoneCode'
					},
					{
						subheading:'请输入验证码',
						placeholder:'',
						value:'284721',
						type:'text'
					},
					{
						subheading:'请输入支付宝收款账号',
						placeholder:'',
						value:'18383882919',
						type:'text'
					},
					{
						subheading:'请上传身份证照片',
						type:'identityCardPhoto'
					},
				],
			}
		},
		components:{
			listFormView
		},
		methods: {
			
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
	padding: 40rpx 30rpx 62rpx 30rpx;
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
