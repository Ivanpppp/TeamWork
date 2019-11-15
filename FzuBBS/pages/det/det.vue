<template>
	<view class="page">
		<view class="title">
			{{title}}
		</view>
		
		<view class="content">
			{{content}}
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: '',
				title:'',
				content:''
			}
		},
		methods: {
			
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		    console.log(option); //打印出上个页面传递的参数。
			this.index = option.id;
			uni.getStorage({
				key:this.index + 'PM_Content',
				success: (res) => {
					this.content = res.data
				}
			})
			uni.getStorage({
				key:this.index + 'PM_Title',
				success: (res1) => {
					this.title = res1.data
				}
			})
		}
		
	}
</script>

<style>

.title{
	font-size: 70upx;
	border-bottom: 1rpx solid #000000;
}

.content{
	font-size: 50upx;
	height: 500upx;
	border-bottom: 1rpx solid #000000;
}

</style>
