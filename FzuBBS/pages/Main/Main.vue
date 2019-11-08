<template>
	<view class="page">
		
		<view class="search-block">
			
			<view class="search-ico-wapper"><!-- 搜索图标 -->
				<image src="../../static/My/search/search.png" class="search-icon"></image>
			</view>
			
			<input 
			placeholder="搜索帖子" 
			maxlength="20" 
			class="seach-text"  
			confirm-type="search"
			@confirm="searchMe"
			/><!-- 搜索框 -->
			
		</view>
		
		
		<view class="plate-list page-block" @click="ShowDetail_Main">
			<view class="single-plate">
					<image src="../../static/Homeicon/Home.png" class="plate-icon"></image>
				<view class="plate-name">
					福州大学主板块
				</view>
			</view>
			
			
			<view class="single-plate" @click="ShowDetail_Sec_Hand">
				<view class="plate-icon">
					<image src="../../static/Plate-icon/Sec-hand.png" mode="aspectFill" class="plate-icon"></image>
				</view>
				<view class="plate-name">
					二手交易市场
				</view>
			</view>
			
			
			<view class="single-plate" @click="ShowDetail_Jobs">
				<view class="plate-icon">
					<image src="../../static/Plate-icon/Recuit.png"  mode="aspectFill" class="plate-icon"></image>
				</view>
				<view class="plate-name">
					校招资讯集合
				</view>
			</view>
			
			
			<view class="single-plate" @click="ShowDetail_Study">
				<view class="plate-icon">
					<image src="../../static/Plate-icon/study.png" mode="aspectFill" class="plate-icon"></image>
				</view>
				<view class="plate-name">
					学习交流社区
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	// import topSearch from "../../components/topSearch.vue"
	export default {
		// components:{
		// 	topSearch
		// },
		data() {
			return {
				
				platelist :[],
				keywords: "",    //搜索关键字
				page: 1,	     //当前第几页
				totalPages:1     //总共第几页
			}
		},
		methods: {
			ShowDetail_Study(e){
				uni.navigateTo({
					url:"../details/details_Study"
				})
			},
			ShowDetail_Jobs(e){
				uni.navigateTo({
					url:"../details/details_Jobs"
				})
			},
			ShowDetail_Main(e){
				uni.navigateTo({
					url:"../details/details_Main"
				})
			},
			ShowDetail_Sec_Hand(e){
				uni.navigateTo({
					url:"../details/details_Sec-Hand"
				})
			}
			// pagedPlateList(keywords,page,pageSize){
			// 	// 查询结果
			// }
			// searchMe(e){
			// 	var me = this;
			// 	var value = e.detail.value;
			// 	me.keywords = value;
			// 	me.platelist = [];
				
				
				
			// }
		},
		onLoad() {
			// var me = this;
			// uni.showLoading({
			// 	mask:true,
			// 	title:"请稍后..."
			// });
			// uni.showNavigationBarLoading();
			//  var serverurl = 服务器请求地址;
			// uni.request({
			// 	url: serverurl + '',
			// 	method:"POST",
			// 	success: (res) => {
			// 		if(res.data.status == 200){
			// 			var platelist = res.data.data;
						
			// 		}
					
			// 	}
			// })
		}
	}
</script>

<style>
	@import url("../Main/search.css");
	@import url("../Main/Main.css");
</style>
