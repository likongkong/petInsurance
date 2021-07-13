<template>
	<view class="wrap">
		<view class="headBanner">
			<image class="headBannerImg" src="../../static/indexBanner.png" mode="widthFix"></image>
		</view>
		<view class="content">
			<block v-for="(item,index) in insuranceListData">
				<view class="card" :data-id="item.id" @click="insuranceListJump">
					<view class="cardLeft">
						<image :src="item.insurance_image" mode="widthFix"></image>
					</view>
					<view class="cardRight">
						<text class="insuranceName">{{item.insurance_title}}</text>
						<view class="providerName">
							<!-- <text>宠物星球</text>
							<text style="color: #EDEDED;font-size: 30rpx; margin: 0 10rpx;">x</text>
							<text>中国平安联手打造</text> -->
							<text>{{item.insurance_supplier}}</text>
						</view>
						<text class="insuranceService">{{item.insurance_feature}}</text>
						<view class="insurancePrice">
							<text>{{item.insurance_price}}</text>
							<text>元/年</text>
						</view>
					</view>
				</view>
			</block>
			
			<!-- <view class="card">
				<view class="cardLeft">
				</view>
				<view class="cardRight">
					<text class="insuranceName">宠爱生活</text>
					<view class="providerName">
						<text>宠物星球</text>
						<text style="color: #EDEDED;font-size: 30rpx; margin: 0 10rpx;">x</text>
						<text>中国平安联手打造</text>
					</view>
					<text class="insuranceService">超百万家庭购买</text>
					<view class="insurancePrice">
						<text>569</text>
						<text>元/年</text>
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import {insuranceList} from '../../utils/api.js'
	export default {
		data() {
			return {
				insuranceListData:[]
			}
		},
		onLoad(){
			this.insuranceList();
		},
		methods: {
			insuranceList(){
				insuranceList().then((res)=>{
					// console.log(res)
					this.insuranceListData = res.data.insurances;
				}).catch(err => {
					util.showToast(err,1500);
					console.log(err)
				})
			},
			insuranceListJump(e){
				let id = e.currentTarget.dataset.id;
				uni.navigateTo({
				    url: `../insurance/insurance?id=${id}`
				});
			},
		}
	}
</script>

<style>
	page{background: #F7F7F7;}
	.headBannerImg{
		display: block;
		width: 100%;
		height: auto;
	}
	.content{
		width: 100%;
		padding: 40rpx 34rpx;
		box-sizing: border-box;
	}
	.card{
		width: 100%;
		border-radius: 20rpx;
		background: #FFFFFF;
		padding: 26rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30rpx;
	}
	.card:first-child{
		margin-top: 0;
	}
	.cardLeft{
		width: 248rpx;
		/* height: 187rpx; */
		background: #D8D8D8;
		border-radius: 8rpx;
	}
	.cardLeft image{
		width: 248rpx;
		height: auto;
		display: block;
	}
	.cardRight{
		width: 374rpx;
		padding-left: 37rpx;
		box-sizing: border-box;
	}
	.insuranceName{
		color: #4D4637;
		font-size: 30rpx;
		font-weight: 800;
		line-height: 42rpx;
	}
	.providerName text{
		font-size: 22rpx;
		color: #4D4637;
		line-height: 30rpx;
	}
	.insuranceService{
		font-size: 22rpx;
		color: #4D4637;
		line-height: 30rpx;
	}
	.insurancePrice text:first-child{
		color: #F9B014;
		font-size: 32rpx;
	}
	.insurancePrice text:last-child{
		color: #4D4637;
		font-size: 22rpx;
	}
</style>
