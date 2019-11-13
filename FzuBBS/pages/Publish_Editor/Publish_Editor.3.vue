<template>
	<view class="page">
			<!-- 这是Jobs发布界面 -->
			
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
				PS_Title:"",
				PS_Content:"",
				PS_ID:""
			}
		},
		methods: {
			Publish(){
				uni.setStorage({
					key:"PS_ID",
					data: ID
				})
				uni.setStorage({
					key:ID + "PS_Title",
					data: this.PJ_Title
				})
				uni.setStorage({
					key:ID + "PS_Content",
					data: this.PJ_Content
				})
				
				uni.navigateBack({
					// 发布后返回上一页
					delta: Page_nums
				})
			}
		},
		onLoad() {
			uni.getStorage({
				key:"PS_ID",
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
