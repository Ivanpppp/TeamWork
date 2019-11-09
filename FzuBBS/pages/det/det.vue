<template>
	<view class="page">
		<text class="title">帖子标题</text>
		<view class="content">
			<text>帖子内容</text>
		</view>
		<textarea placeholder="回复" class="texta"/>
		<button class="btn">确定</button>
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
.title{
	margin-top: 50upx;
	font-size: 45upx;
	font-weight: 700;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 30upx;
}
.content{
	width: 650upx;
	height: 60upx;
	margin-bottom: 20upx;
	margin-left: 20upx;
	border-radius: 20upx;
}
.btn{
	width: 150upx;
	height: 60upx;
	margin-top: 100upx;
	border-radius: 20upx;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.texta{
	width: 650upx;
	height: 80upx;
	margin-bottom: 20upx;
	margin-left: 20upx;
	border-radius: 20upx;
}
</style>
