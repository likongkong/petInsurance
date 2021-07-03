<template>
	<view class="wrap">
		<view class="headBanner">
			<image class="headBannerImg" src="../../static/indexBanner.png" mode="widthFix"></image>
		</view>
		<view class="inviterCard">
			<text>萌宠守护使者 - 邀请人</text>
			<text>北京市卡哇伊宠物连锁医院</text>
		</view>
		<view class="content">
			<image class="fivecat" src="../../static/fivecat.png" mode="widthFix"></image>
			<view class="contentWrap">
				<view class="title">
					宠物信息
				</view>
				<view class="petInfoWrap">
					<listForm :list="petListData"></listForm>
					
				</view>
				<view class="title">
					主人信息
				</view>
				<view class="userInfoWrap">
					<listForm :list="userListData"></listForm>
				</view>
				<view class="confirmBtn">
					下一步
				</view>
			</view>
		</view>
		<view class="foterTxt">
			本平台由{{facilitator}}保险代理有限公司提供服务
		</view>
	</view>
</template>

<script>
	import listForm from "../components/listForm/listForm";
	export default {
		data() {
			return {
				facilitator:'中国平安',
				petListData:[
					{
						subheading:'请输入宠物的名字',
						placeholder:'请输入宠物的名字',
						value:'大黄狗',
						type:'text'
					},
					{
						subheading:'请选择宠物性别',
						current:0,
						radioList:[
							{name:'王子',id:0,index:0},
							{name:'公主',id:1,index:1},
						],
						type:'radio'
					},
					{
						subheading:'请选择宠物种类',
						current:0,
						radioList:[
							{name:'汪星',id:0,index:0},
							{name:'喵星',id:1,index:1},
						],
						type:'radio'
					},
				],
				userListData:[
					{
						subheading:'请输入您的真实姓名',
						placeholder:'请输入您的真实姓名',
						value:'嗷嗷嗷',
						type:'text'
					},
					{
						subheading:'请输入您的手机号',
						placeholder:'请输入您的手机号',
						value:'1131111122222',
						type:'phoneCode'
					},
					{
						subheading:'请输入手机验证码',
						placeholder:'请输入手机验证码',
						value:'0123',
						type:'text'
					},
				]
			}
		},
		components:{
			listForm
		},
		methods: {
			
		}
	}
</script>

<style>
	page{background: #F3F3F3;}
	.sexActive,.kindActive{
		background: #FDD000;
	}
	.headBannerImg{
		display: block;
		width: 100%;
		height: auto;
	}
	.inviterCard{
		width: 590rpx;
		padding: 30rpx 0;
		background: #FFFFFF;
		margin: 30rpx auto 0;
		border-radius: 10rpx;
	}
	.inviterCard text{
		display: block;
		text-align: center;
	}
	.inviterCard text:first-child{
		font-size: 26rpx;
		color: #4D4637;
		line-height: 37rpx;
	}
	.inviterCard text:last-child{
		font-size: 30rpx;
		color: #4D4637;
		line-height: 42rpx;
		font-weight: 800;
		margin-top: 24rpx;
	}
	.content{
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	.fivecat{
		width: 364rpx;
		height: auto;
		margin: 30rpx auto 0;
		display: block;
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
	.petInfoWrap{
		margin-top: 40rpx;
		margin-bottom: 50rpx;
	}
	.formWrap{
		margin-top: 30rpx;
	}
	
	.infoTitle{
		font-size: 26rpx;
		color: #686864;
		line-height: 37rpx
	}
	.inputWrap input{
		width: 100%;
		height: 90rpx;
		border-bottom: 1rpx solid #E4E4E4;
		font-size: 30rpx;
		font-weight: 600;
		color: #4D4637;
		line-height: 96rpx;
	}
	.petInfoRadioWrap{
		width: 100%;
		border-radius: 10rpx;
		background: #F2F2F2;
		font-weight: 600;
		color: #4D4637;
		display: flex;
		justify-content: space-between;
		margin-top: 30rpx;
		overflow: hidden;
	}
	.petInfoRadioWrap text{
		width: 50%;
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		display: block;
		font-size: 26rpx;
	}
	.usePhoneWrap{
		position: relative;
	}
	.getPhoneCode{
		width: 204rpx;
		height: 70rpx;
		position: absolute;
		bottom: 19rpx;
		right: 20rpx;
		background: #FDD000;
		border-radius: 4rpx;
		text-align: center;
		line-height: 70rpx;
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
		margin: 50rpx auto 0;
	}
	.foterTxt{
		width: 100%;
		height: 106rpx;
		font-size: 22rpx;
		font-weight: 400;
		color: #C5C5C5;
		line-height: 106rpx;
		text-align: center;
	}
</style>
