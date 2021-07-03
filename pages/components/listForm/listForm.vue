<template>
	<view>
		<view class="listWrap">
			<block v-for="(item,index) in list" :key="index">
				<view v-if="item.type == 'text'" class="petNameWrap inputWrap formWrap">
					<text class="infoTitle">{{item.subheading}}</text>
					<input type="text" :value="item.value"/>
				</view>
				<view v-if="item.type == 'radio'" class="petSexWrap formWrap">
					<text class="infoTitle">{{item.subheading}}</text>
					<view class="petInfoRadioWrap">
						<block v-for="(sitem,index) in item.radioList" :key="index">
							<text :class="item.current==index?'sexActive':''">{{sitem.name}}</text>
						</block>
					</view>
				</view>
				<view v-if="item.type == 'phoneCode'" class="usePhoneWrap inputWrap formWrap">
					<text class="infoTitle">{{item.subheading}}</text>
					<input type="text" :value="item.value"/>
					<view class="getPhoneCode">
						获取验证码
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			list: {
				type: Array,
				default: () => []
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.sexActive,.kindActive{
		background: #FDD000;
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
</style>
