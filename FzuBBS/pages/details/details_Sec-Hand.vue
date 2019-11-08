<template>
	<view class="page">
		<view class="content">
			<textarea placeholder="Search message" style="width: 550upx;height: 50upx;margin-bottom: 30upx;border: 1px solid;border-radius:25px;text-align: center;"/>
			<button style=" height: 150upx; width: 750upx;margin-bottom: -75upx;"@click="det">2019高考录取查询</button>
			<image src="../../static/RecIcon/fireReading.png" style=" height: 35upx; width: 35upx;margin-right: 5upx;margin-bottom: -35upx;" ></image>
			<button style=" height: 75upx; width: 200upx;margin-right: 0upx;">2019.7.15</button>
			<button style=" height: 150upx; width: 750upx;margin-bottom: -75upx;"@click="det">收纳箱有需要的么，租房时用的，现在用不到了，基本都还是八成新</button>
			<button style=" height: 75upx; width: 200upx;margin-right: 0upx;">2019.11.6</button>
			<button style=" height: 150upx; width: 750upx;margin-bottom: -75upx;"@click="det">研究生数学建模成绩多久出来啊</button>
			<button style=" height: 75upx; width: 200upx;margin-right: 0upx;">2019.11.6</button>
			<button style=" height: 150upx; width: 750upx;margin-bottom: -75upx;"@click="det">诚意求购一电动车，价格不是问题，谢谢</button>
			<button style=" height: 75upx; width: 200upx;margin-right: 0upx;">2019.11.6</button>
			<button style=" height: 150upx; width: 750upx;margin-bottom: -75upx;"@click="det">福大有想买二手电动车的吗，本人大四实习结束，电动车是八九成新</button>
			<button style=" height: 75upx; width: 200upx;margin-right: 0upx;">2019.11.6</button>
			<button style=" height: 150upx; width: 750upx;margin-bottom: -75upx;"@click="det">大学好不适应</button>
			<button style=" height: 75upx; width: 200upx;margin-right: 0upx;">2019.11.6</button>
			<button style=" height: 150upx; width: 750upx;margin-bottom: -75upx;"@click="det">请问一下福大哪里有5g信号</button>
			<button style=" height: 75upx; width: 200upx;margin-right: 0upx;">2019.11.6</button>
			<button style=" height: 150upx; width: 750upx;margin-bottom: -75upx;"@click="det">[S9线下观赛助威邀请函]</button>
			<button style=" height: 75upx; width: 200upx;margin-right: 0upx;">2019.11.6</button>
	
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
			det(){
				uni.navigateTo({
					url:"../det/det"
				})
			}
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
