<template>
	<view class="page">
		<view class="content">
			<text class="tittle">发布帖子</text>
		</view>
		<textarea  placeholder="标题" style="width: 650upx;height: 80upx;margin-bottom: 50upx;margin-top: 50upx; border: 1upx solid;"/>
		<textarea  placeholder="请输入内容" style="width: 650upx;height: 400upx;margin-bottom: 50upx;margin-top: 50upx;border: 1upx solid;"/>
		<button style="width: 120upx;height: 50upx;text-align: center;font-size: 15upx;">提交</button>
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
    .tittle{
		margin-top: 80upx;
		margin-bottom: 20upx;
		font-size: 45upx;
		font-weight: 700;
	}
    .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	},
	.t{
		font-size: 25upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 200upx;
	}
</style>
