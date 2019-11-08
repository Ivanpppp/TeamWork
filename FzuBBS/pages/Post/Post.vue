<template>
	<view class="page">
		<view class="content">
			<textarea placeholder="Search message" style="width: 550upx;height: 50upx;margin-bottom: 30upx;border: 1px solid;border-radius:25px;text-align: center;"/>
			<text class="t">经常浏览的版块</text>
			<button style="width: 400upx; height: 80upx; text-align: center;margin-bottom: 50upx;border:1px solid;border-radius:25px;"@click="show">福建人在福大</button>
			<button style="width: 400upx; height: 80upx; text-align: center;margin-bottom: 50upx;border:1px solid;border-radius:25px;"@click="show">你们成绩很好</button>
			<button style="width: 400upx; height: 80upx; text-align: center;margin-bottom: 50upx;border:1px solid;border-radius:25px;"@click="show">来玩吧</button>
			<button style="width: 400upx; height: 80upx; text-align: center;margin-bottom: 50upx;border:1px solid;border-radius:25px;"@click="show">爱生活，爱足球</button>
			<text class="t">我关注的版块</text>
			<button style="width: 400upx; height: 80upx; text-align: center;margin-bottom: 50upx;border:1px solid;border-radius:25px;"@click="show">你们成绩很好</button>
			<button style="width: 400upx; height: 80upx; text-align: center;margin-bottom: 50upx;border:1px solid;border-radius:25px;"@click="show">爱生活，爱足球</button>
			<button style="width: 400upx; height: 80upx; text-align: center;margin-bottom: 50upx;border:1px solid;border-radius:25px;"@click="show">环保小伙伴</button>
			<button style="width: 400upx; height: 80upx; text-align: center;margin-bottom: 50upx;border:1px solid;border-radius:25px;"@click="show">福大正能量</button>
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
			show(){
				 uni.navigateTo({
				 	url:"../details/details"
				 })
			  }
		},
		onLoad(parms) {
			//获取上个页面的信息
		}
	}
</script>

<style>
.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	},
	.t{
		font-size: 35upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 30upx;
	}
</style>
