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
			
		
	</view>
</template>

<script>
	var Sec_index;
	var Sec_Title=[];//标题数组
	var Sec_Content=[];//正文数组
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			det(){
				uni.navigateTo({
					url:'../det/det'
				})
			},
			Publish(){
				uni.navigateTo({
					url:"../Publish_Editor/Publish_Editor.2"
				})
			}
		},
		onLoad() {
			Sec_Title=[];//标题数组
			Sec_Content=[];//正文数组
	
			uni.getStorage({
				key:"PJ_ID",
				success: (res) => {
					Sec_index = res.data;
					console.log(Sec_index);
					for (var i = 1;i <= Sec_index ;i++) {
						uni.getStorage({
							key:i + "PSec_Title",
							success: (res) => {
								Sec_Title.push(res.data);
								console.log(Sec_Title);
								}
							})
						uni.getStorage({
							key:i + "PSec_Content",
							success: (res1) => {
								Sec_Content.push(res1.data);
								console.log(Sec_Content)
							}
						})
					}
				}
			})
		}
	}
</script>

<style>
	@import url("../details/Post-plate.css");
	@import url("../Recommend/Rec.css");
</style>
