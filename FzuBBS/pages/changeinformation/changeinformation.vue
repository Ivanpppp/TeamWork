<template><!--第一次登陆个人信息填写以及个人信息修改-->  <!--暂无跳转-->
	<view class="page">
		<view class="content">
			<text class="tittle">个人信息设置</text>
			<text class="t">{{'that way,people will reconize you'}}</text>
			<button style="width: 50px; height: 50px; border-radius:50%;border: none;background: url(../../static/RecIcon/avatar.png) no-repeat center;margin-bottom: -30upx;"></button>
			<textarea  placeholder="用户名" style="height: 50upx; border:none;border-radius: 25px; margin-bottom: 20upx;"/>
		    <textarea  placeholder="性别" style="height: 50upx; border:none;border-radius: 25px;margin-bottom: 20upx;"/>
			<textarea  placeholder="出生日期" style="height: 50upx; border:none;border-radius: 25px;margin-bottom: 20upx;"/>
			<textarea  placeholder="邮箱" style="height: 50upx; border:none;border-radius: 25px;margin-bottom: 20upx;"/>
			<textarea  placeholder="学校" style="height: 50upx; border:none;border-radius: 25px;margin-bottom: 20upx;"/>
			<textarea  placeholder="居住地" style="height: 50upx; border:none;border-radius: 25px;margin-bottom: 80upx;"/>
			<button type="primary" style="width: 350upx;height: 80upx;margin-bottom: 50upx;border-radius: 25px;">确定</button>
			<button style="width: 350upx;height: 80upx;margin-bottom: 50upx;border-radius: 25px;">跳过</button>
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
