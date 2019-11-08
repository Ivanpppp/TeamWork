<template>
	<view class="page">
		<text class="tittle">[S9线下观赛助威邀请函]</text>
		<text class="t">发帖人：FZUBBS</text>
		<text v-html="str" ></text>
		<button style="width: 100upx;height: 40upx;margin-top: 80upx;margin-bottom: 10upx;margin-left: 0upx;font-size: 5upx;display:flex;flex-direction: column;align-items: center;justify-content: center;">点赞</button>
		<button style="width: 100upx;height: 40upx;margin-left: 0upx;font-size: 5upx;margin-bottom: 10upx;display:flex;flex-direction: column;align-items: center;justify-content: center;">转发</button>
		<textarea  placeholder="回复" style="width: 350upx;height: 100upx;"/>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				str:'[S9线下观赛助威邀请函]<br/>随着S9全球总决赛小组赛的结束，比赛也进入了白热化阶段。本周日我们即将迎来由FPX与G2对决的总决赛。我们将进行赛事实况转播，并盛情邀请各大LOL爱好者免费与我们齐聚一堂，为我们凤凰队加油助威!<br/>fly phinex fly!<br/>'
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
