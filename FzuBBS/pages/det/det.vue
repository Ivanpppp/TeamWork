<template>
	<view class="page">
		帖子详情页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		    console.log(option); //打印出上个页面传递的参数。
		}
		
	}
</script>

<style>

</style>
