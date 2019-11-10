<template>
	<view class="page">
		<text class="title">个人信息修改</text>
		<text class="ss">{{'that way,people will recognize you'}}</text>
		<textarea  placeholder="用户名" class="content"/>
		<textarea  placeholder="出生日期" class="content"/>
		<textarea  placeholder="性别" class="content"/>
		<textarea  placeholder="学校" class="content"/>
		<textarea  placeholder="居住地" class="content"/>
		<button type="primary" class="btn" @click="user">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			user(){
				uni.navigateTo({
					url:"../User_Info"
				})
			}
		}
	}
</script>

<style>
    @import url("../change/change");
</style>
