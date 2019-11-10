<template>
	<view class="page">
		<input type="text" placeholder="请输入标题..." class="Publish_Title"/>
		<textarea  placeholder="请输入内容..." class="Publish_Content"/>
		<view class="icon">
			<image src="../../static/submit.png" class="Publish_ico" @click="Publish"></image>
		</view>
	</view>
</template>

<script>
	var Page_nums = getCurrentPages();

	export default {
		data() {
			return {
				
			}
		},
		methods: {
			Publish(){
				uni.navigateBack({
					delta: Page_nums
				})
			}
		}
	}
</script>

<style>
.Publish_Title{
	height: 100upx;
	width: 100%;
	border-bottom: 1rpx solid #3F536E;
}

.Publish_Content{
	height:900upx;
	width: 100%;
}
.icon{
	text-align: center;
	vertical-align: text-bottom;
}
.Publish_ico{
	height: 100upx;
	width: 100upx;
	
}

</style>
