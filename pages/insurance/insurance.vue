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
					<listFormView :list="petListData" v-on:bindchange="bindchange" v-on:smsSend="smsSend"></listFormView>
				</view>
				<view class="title">
					主人信息
				</view>
				<view class="userInfoWrap">
					<listFormView :list="userListData" v-on:bindchange="bindchange" v-on:smsSend="smsSend" ref="getPhoneCode"></listFormView>
				</view>
				<view class="confirmBtn" @click="confirmSubmit">
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
	import listFormView from "../components/listFormView/listFormView";
	import {petCreate,smsSend} from '../../utils/api.js'
	var util = require('../../utils/util.js')
	export default {
		data() {
			return {
				facilitator:'中国平安',
				petListData:[
					{
						subheading:'请输入宠物的名字',
						placeholder:'请输入宠物的名字',
						value:'',
						type:'text',
						name:'petName'
					},
					{
						subheading:'请选择宠物性别',
						current:0,
						radioList:[
							{name:'王子',id:1,index:0},
							{name:'公主',id:2,index:1},
						],
						type:'radio',
						name:'petSex'
					},
					{
						subheading:'请选择宠物种类',
						current:0,
						radioList:[
							{name:'汪星',id:10,index:0},
							{name:'喵星',id:20,index:1},
						],
						type:'radio',
						name:'petKind'
					},
				],
				userListData:[
					{
						subheading:'请输入您的真实姓名',
						placeholder:'请输入您的真实姓名',
						value:'',
						type:'text',
						name:'userName'
					},
					{
						subheading:'请输入您的手机号',
						placeholder:'请输入您的手机号',
						value:'',
						type:'phoneCode',
						name:'userPhone'
					},
					{
						subheading:'请输入手机验证码',
						placeholder:'请输入手机验证码',
						value:'',
						type:'text',
						name:'userCode'
					},
				],
				obj:{}
			}
		},
		components:{
			listFormView
		},
		onLoad(option) {
			console.log(option)
		},
		methods: {
			bindchange(e){
				let key=e.name;
				this.obj[key]=e.value;
				console.log(this.obj)
			},
			smsSend(){
				let obj = this.obj;
				let myreg = /^1[3456789]\d{9}$/;
				if(!obj.userPhone || obj.userPhone == ''){
					util.showToast('请输入您的手机号',2000);
					return false;
				}else if(!myreg.test(obj.userPhone)){
					util.showToast('手机号码有误请重新填写',2000);
					return false;
				}
				this.$refs.getPhoneCode.getPhoneCode();
				let data = {};
				data.phone = obj.userPhone;
				smsSend(data).then(res => {
					
				}).catch(err => {
					util.showToast(err,1500);
					console.log(err)
				})
			},
			confirmSubmit(){
				let obj = this.obj;
				let myreg = /^1[3456789]\d{9}$/;
				if(!obj.petName || obj.petName == ''){
					util.showToast('请输入宠物名字',2000);
					return false;
				}
				if(!obj.petSex){
					obj.petSex=1
				}
				if(!obj.petKind){
					obj.petKind=10
				}
				if(!obj.userName || obj.userName == ''){
					util.showToast('请输入您的真实姓名',2000);
					return false;
				}
				if(!obj.userPhone || obj.userPhone == ''){
					util.showToast('请输入您的手机号',2000);
					return false;
				}else if(!myreg.test(obj.userPhone)){
					util.showToast('手机号码有误请重新填写',2000);
					return false;
				}
				if(!obj.userCode || obj.userCode == ''){
					util.showToast('请输入手机验证码',2000);
					return false;
				}
				let data={};
				data.customer_real_name = obj.userName;
				data.customer_phone = obj.userPhone;
				data.sms_code = obj.userCode;
				data.pet_name = obj.petName;
				data.pet_sex = obj.petSex;
				data.species_family_id = obj.petKind;
				petCreate(data).then(res => {
					console.log(res)
				}).catch(err => {
					util.showToast(err,1500);
					console.log(err)
				})
			}
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
	.usePhoneWrap{
		position: relative;
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
