<template>
	<el-container
		v-loading.fullscreen.lock="loadingStatus"
		element-loading-text="載入中..."
    	element-loading-background="rgba(120, 120, 120, 0.3)"
	>
		<el-header>
			<Header></Header>
		</el-header>
		<el-main>
			<router-view></router-view>
		</el-main>
		<!--<el-footer>本網頁為個人學習使用，無任何商業用途！</el-footer>-->
	</el-container>
</template>

<script>
import Header from '@/components/Header.vue';
export default{
	name:'App',
	data(){
		return{
			loadingStatus:false
		}
	},
	components:{
		Header,
	},
	created() {
		this.$store.watch(
			state => state.isLoading,
			(newVal, oldVal) => {
				this.loadingStatus = newVal;
			}
		);
	}
}
</script>


<style scoped>
.el-header,
.el-footer{
	background-color:   #3375b9;
}
.el-header{
	/* 將Header固定在最上方 */
	position: fixed;
	z-index: 999;
	right:0;
	left:0;
}
.el-main{
	margin-top:60px;
	min-height:90%;
	height:90%;
	padding:0;
	background-color:  #1d3043;
}
.el-container{
	min-height:100%;
	height:100%;
}
</style>
