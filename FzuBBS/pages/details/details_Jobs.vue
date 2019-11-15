<template>
	<view >
		<view class="Hot-Post page-block">
				<view class="WorthRead-title">
					<image src="../../static/RecIcon/WorthReading.png" class="WorthRead-icon"></image>
					<view class="WorthReadWord">
						热门帖子
					</view>
					<image src="../../static/Plate-icon/publish.png" class="Publish_icon" @click="Publish"></image>
				</view>
			
			
			<view class="single-hot-post" @click="det()">
				<view class="shp-title">
					有关专业选择/转专业的杂谈与建议
				</view>
				
				<view class="shp-content">
					高考出分邻近报考了，想必专业问题大家很关注，还有进校能不能转专业，转专业的条件怎么样，关于报考专业，建议大家注意三点：
					1.量力而行，参考往年专业录取位次，一专业很重要，尽量不要虚报高位次专业
					2.第一专业志愿优先，其次并行，意味着第一专业冲的话很可能录取不了，导致平行录取时无好专业可进，进到一般的专业浪费了分数
					3.学校已经不接受修读小语种公共外语，统一修读大学英语，一外非英严谨报考
				</view>
				<view class="recommend-time">
					2019-06-23 11:41
				</view>
			</view>
			
			<view class="single-hot-post" @click="det()">
				<view class="shp-title">
					咨询解答转专业的一切疑问
				</view>
				
				<view class="shp-content">
					今年转专业工作已经开始了，相比去年有小差，申请条件不看成绩绩点了
					lz往年成功转专业成功，当时也很困惑找不到人询问，所以今年为学弟学妹无偿在线解答所有转专业问题
					咨询前先要了解教务处转专业17年公告
				</view>
				<view class="recommend-time">
					2019-06-23 11:41
				</view>
			</view>
		</view>	
		<view class="Post-List">
			
			<view class="single-hot-post" @click="det(item)"  v-for="item in JobsPost_list" :key="item.Jobs_index" >
				<view class="shp-title">
					{{item.Jobs_Title}}
				</view>
				
				<view class="shp-content">
					{{item.Jobs_Content}}
				</view>
				<view class="recommend-time">
					2019-06-23 11:41
				</view>
			</view>
		</view>
			
		
	</view>
</template>

<script>
	var Jobs_index = 0;
	var Jobs_Title=[];//标题数组
	var Jobs_Content=[];//正文数组
	
	export default {
		data() {
			return {
				Jobs_index:'',
				Jobs_Title:'',
				Jobs_Content:'',
				JobsPost_list:[
					{Jobs_index: 0 , Jobs_Title : '招聘板块', Jobs_Content:'这是招聘板块'}
				]
					 
			}
		},
		
		methods: {
			det(item){
				uni.navigateTo({
					url:'../det/detJobs/detJobs?id='+item.Jobs_index 
				})
			},
			Publish(){
				uni.navigateTo({
					url:"../Publish_Editor/Publish_Editor"
				})
			},
			handleClick() {
				console.log(this.JobsPost_list)
			},
			getData() {
				let Jobs_Title=[];//标题数组
				let Jobs_Content=[];//正文数组
				let title;
				let content;
				uni.getStorage({
					key:"PJ_ID",
					success: (res) => {
						Jobs_index = res.data
						for (var i = 1;i <= Jobs_index ;i++) {
							uni.getStorage({
								key:i + "PJ_Title",
								success: (res) => {
									title = res.data;
									Jobs_Title.push(res.data);
									
									}
								})
							uni.getStorage({
								key:i + "PJ_Content",
								success: (res1) => {
									content = res1.data;
									Jobs_Content.push(res1.data);
									
								}
							})
							var Post = {Jobs_index: i, Jobs_Title: title , Jobs_Content: content }
							
							this.JobsPost_list.push(Post)
						}
					}
				})
			}
		},
		onLoad() {
			this.getData()
		}
	}
	
</script>

<style>
	@import url("../details/Post-plate.css");
	@import url("../Recommend/Rec.css");
</style>
