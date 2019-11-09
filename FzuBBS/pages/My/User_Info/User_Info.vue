<template>
	<view class="page">
		<text class="title">个人信息</text>
		<text class="ss">{{'that way,people will recognize you'}}</text>
		<view class="content">
			<text class="content">用户id：</text>
		</view>
		<view class="content">
			<text class="content">用户名：</text>
		</view>
		<view class="content">
			<text class="content">出生日期：</text>
		</view>
		<view class="content">
			<text class="content">电话号码：</text>
		</view>
		<view class="content">
			<text class="content">性别：</text>
		</view>
		<view class="content">
			<text class="content">邮箱：</text>
		</view>
		<view class="content">
			<text class="content">学校：</text>
		</view>
		<view class="content">
			<text class="content">居住地：</text>
		</view>
		<button type="primary" class="btn" @click="change">修改</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			change(){
				uni.navigateTo({
					url:"change/change"
				})
			}
		}
	}
</script>

<style>
    @import url("../User_info/User_info");
</style>
