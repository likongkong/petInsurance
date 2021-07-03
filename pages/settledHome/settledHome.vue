<template>
	<view class="wrap">
		<view class="card">
			<view class="cardLeft">
				<text>宠物店及其他组织</text>
				<text>适合企业/公司/连锁店</text>
			</view>
			<view class="cardRight">
				<image src="../../static/shSettled.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="card">
			<view class="cardLeft">
				<text>个人入驻</text>
				<text>适合个人用户</text>
			</view>
			<view class="cardRight">
				<image src="../../static/grSettled.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	} 
</script>

<style>
	page{background: #F7F7F7;}
	.wrap{
		padding: 0 34rpx;
		box-sizing: border-box;
	}
	.card{
		width: 100%;
		background: #FFFFFF;
		border-radius: 10rpx;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		margin-top: 40rpx;
	}
	.cardLeft{
		width: 60%;
	}
	.cardLeft text{
		display: block;
	}
	.cardLeft text:first-child{
		font-size: 30rpx;
		font-weight: 800;
		color: #4D4637;
		line-height: 42rpx;
	}
	.cardLeft text:last-child{
		font-size: 24rpx;
		font-weight: 400;
		color: #686864;
		line-height: 33rpx;
		margin-top: 24rpx;
	}
	.cardRight{
		width: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cardRight image{
		width: 52rpx;
		height: auto;
	}
</style>
