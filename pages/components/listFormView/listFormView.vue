<template>
	<view>
		<view class="listWrap">
			<block v-for="(item,index) in list" :key="index">
				<view v-if="item.type == 'text'" class="inputWrap formWrap">
					<text class="infoTitle">{{item.subheading}}</text>
					<input :class="item.borderbottom1?'':'borderbottom1'" type="text" :data-name="item.name" :value="item.value" @input="onKeyInput"/>
				</view>
				<view v-if="item.type == 'radio'" class="formWrap">
					<text class="infoTitle">{{item.subheading}}</text>
					<view class="petInfoRadioWrap">
						<block v-if="item.name=='petSex'">
							<block v-for="(sitem,index) in item.radioList" :key="index">
								<text
								 :class="sexCurrent==index?'sexActive':''" 
								 data-current="sexCurrent" 
								 :data-idx="index" 
								 :data-id="sitem.id"
								 :data-name="item.name"
								 @click="radioChange"
								>{{sitem.name}}</text>
							</block>
						</block>
						<block v-else-if="item.name=='petKind'">
							<block v-for="(sitem,index) in item.radioList" :key="index">
								<text
								 :class="kindCurrent==index?'sexActive':''" 
								 data-current="kindCurrent" 
								 :data-idx="index" 
								 :data-id="sitem.id" 
								 :data-name="item.name"
								 @click="radioChange"
								 >{{sitem.name}}</text>
							</block>
						</block>
					</view>
				</view>
				<view v-if="item.type == 'phoneCode'" class="phoneWrap inputWrap formWrap">
					<text class="infoTitle">{{item.subheading}}</text>
					<input :class="item.borderbottom1?'':'borderbottom1'" type="text" :data-name="item.name" :value="item.value" @input="onKeyInput"/>
					<view class="getPhoneCode" @click="isCountdown?'':smsSend()">
						{{phoneValue}}
					</view>
				</view>
				<view v-if="item.type == 'address'" class="inputWrap formWrap">
					<text class="infoTitle">{{item.subheading}}</text>
					<view class="chooseAddress" @click="chooseLocation">
						<input :class="item.borderbottom1?'':'borderbottom1'" type="text" :data-name="item.name" :value="item.value"/>
						<image class="rightArrows" src="../../../static/rightArrows.png" mode="widthFix"></image>
					</view>
					<view class="exactAddress" v-if="item.isExactAddress">
						<input :class="item.borderbottom1?'':'borderbottom1'" placeholder-style="color:#E1E1E1" type="text" :data-name="item.name" placeholder="请输入准确点店铺名称或医院名称" value="" />
					</view>
				</view>
				<view v-if="item.type == 'businessLicense'" class="businessLicenseWrap formWrap">
					<text class="infoTitle">{{item.subheading}}</text>
					<view class="MT30">
						<view>
							<view class="uploadWrap licenseWrap">
								<!-- <view class="showPic">
									
								</view> -->
								<view class="uploadIcon">
									<image src="../../../static/uploadIcon.png" mode="widthFix"></image>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="item.type == 'identityCardPhoto'" class="identityCardPhotoWrap formWrap">
					<text class="infoTitle">{{item.subheading}}</text>
					<view class="MT30 flexBox">
						<view>
							<view class="uploadWrap frontWrap">
								<!-- <view class="showPic">
									
								</view> -->
								<view class="uploadIcon">
									<image src="../../../static/uploadIcon.png" mode="widthFix"></image>
									<text>身份证正面</text>
								</view>
							</view>
						</view>
						<view>
							<view class="uploadWrap reverseWrap">
								<!-- <view class="showPic">
									
								</view> -->
								<view class="uploadIcon">
									<image src="../../../static/uploadIcon.png" mode="widthFix"></image>
									<text>身份证背面</text>
								</view>
							</view>
						</view>
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
				sexCurrent:0,
				kindCurrent:0,
				isCountdown:false,
				countdownNum:0,
				phoneValue:'获取验证码',
				clock:0,
				clockNum:60
			}
		},
		props:{
			list: {
				type: Array,
				default: () => []
			}
		},
		methods: {
			chooseLocation(){
				uni.chooseLocation({
				    success: function (res) {
				        console.log('位置名称：' + res.name);
				        console.log('详细地址：' + res.address);
				        console.log('纬度：' + res.latitude);
				        console.log('经度：' + res.longitude);
				    }
				});
			},
			onKeyInput(e){
				let obj = {};
				obj.name = e.currentTarget.dataset.name;
				obj.value = e.detail.value.trim();
				this.$emit("bindchange",obj)
			},
			radioChange(e){
				let id = e.currentTarget.dataset.id;
				let current = e.currentTarget.dataset.current;
				let idx = e.currentTarget.dataset.idx;
				let obj = {};
				obj.name = e.currentTarget.dataset.name;
				obj.value = id;
				this[current]=idx;
				this.$emit("bindchange",obj)
			},
			smsSend(){
				this.$emit("smsSend")
			},
			getPhoneCode(){
				this.clock = setInterval(this.doLoop, 1000); 
			},
			doLoop(){
				this.clockNum--;
				if(this.clockNum > 0){
					this.isCountdown = true;
					this.phoneValue = this.clockNum+'秒后可重新获取';
				}else{
					clearInterval(this.clock); 
					this.isCountdown = false;
					this.phoneValue = '获取验证码';
					this.clockNum = 60; 
				}
			}
		}
	}
</script>

<style>
	.flexBox{
		display: flex;
		justify-content: space-between;
	}
	.MT30{
		margin-top: 30rpx;
	}
	.borderbottom1{
		border-bottom: 1rpx solid #E4E4E4;
	}
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
	.phoneWrap{
		position: relative;
	}
	.getPhoneCode{
		width: 230rpx;
		height: 70rpx;
		position: absolute;
		bottom: 19rpx;
		right: 20rpx;
		background: #FDD000;
		border-radius: 4rpx;
		text-align: center;
		line-height: 70rpx;
		font-size: 26rpx;
		font-weight: 600;
	}
	.chooseAddress{
		position: relative;
	}
	.exactAddress{
		width: 100%;
		height: 88rpx;
	}
	.exactAddress input{
		width: 100%;
		height: 88rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #686864;
		line-height: 88rpx;
	}
	.rightArrows{
		width: 20rpx;
		height: auto;
		position: absolute;
		bottom: 27rpx;
		right: 0;
		display: block;
	}
	.uploadWrap{
		background: #F2F2F2;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #F2F2F2;
		position: relative;
	}
	.uploadIcon image{
		width: 140rpx;
		height: auto;
		display: block;
	}
	.frontWrap{
		width: 288rpx;
		height: 172rpx;
	}
	.reverseWrap{
		width: 288rpx;
		height: 172rpx;
	}
	.licenseWrap{
		width: 100%;
		height: 248rpx;
	}
	.identityCardPhotoWrap .uploadIcon image{
		width: 50rpx;
		height: auto;
		margin: 0 auto;
	}
	.identityCardPhotoWrap .uploadIcon text{
		font-size: 22rpx;
		font-weight: 400;
		color: #686864;
		line-height: 30rpx;
		display: block;
		margin-top: 22rpx;
	}
</style>
