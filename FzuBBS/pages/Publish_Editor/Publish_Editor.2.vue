<template>
	<view class="page">
			<!-- 这是二手发布界面 -->
			
			<input type="text" v-model="PJ_Title" placeholder="请输入标题..." class="Publish_Title"/>
			<textarea  placeholder="请输入内容..." class="Publish_Content" v-model="PJ_Content"/>
			<view class="icon">
				
				<image src="../../static/submit.png" class="Publish_ico" @click="Publish()"></image>
			</view>
	</view>
</template>

<script>
	var Page_nums = getCurrentPages();
	var ID;
	export default {
		data() {
			return {
				PSec_Title:"",
				PSec_Content:"",
				PSec_ID:""
			}
		},
		methods: {
			Publish(){
				uni.setStorage({
					key:"PSec_ID",
					data: ID
				})
				uni.setStorage({
					key:ID + "PSec_Title",
					data: this.PJ_Title
				})
				uni.setStorage({
					key:ID + "PSec_Content",
					data: this.PJ_Content
				})
				
				uni.navigateBack({
				
				})
			}
		},
		onLoad() {
			uni.getStorage({
				key:"PSec_ID",
				success: (res) => {
					ID = res.data;
					ID += 1;
				},
				fail() {
					ID = 1;
				}
			})
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
