<template>
	<el-icon size="30" color="white" @click="drawerActive = true"><Menu /></el-icon>
    <!-- drawer -->
    <el-drawer
		v-model="drawerActive"
		title="選單"
		size="80%"
		style="background-color: #1d3043;">
		<div style="width:50%;">
			<Login></Login>
		</div>

		<Kanban></Kanban>
    </el-drawer>
</template>
  
<script>
import Login from '@/components/Login.vue';
import Kanban from '@/components/Kanban.vue';
export default{
	data(){
		return{
			drawerActive: false
		}
	},
	components:{
		Login,
		Kanban
	}
}
</script>

  
  