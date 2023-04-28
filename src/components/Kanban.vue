<template>
    <el-aside>
        <el-menu 
        @select="handleMenuSelect"
        :default-active="'/'+this.$route.path.split('/')[1]"
        active-text-color="#66b1ff"
        background-color="#1d3043"
        text-color="white">
            <el-menu-item v-for="(item,index) in kanbanList" :key="index" :index="item.path">
                <div>
                    <el-icon><IceTea /></el-icon>
                    {{item.name}}
                </div>
                <el-icon><Star /></el-icon>
            </el-menu-item>
            
            <el-menu-item index="3" disabled>
                <div>
                    <el-icon><Watermelon /></el-icon>
					研究所板
                </div>

            </el-menu-item>

        </el-menu>
    </el-aside>
</template>
  
<script>
export default {
    name: 'Kanban',
    data(){
        return{
            kanbanList:[
                { name: '所有看板', path:'/' },
                { name: '考試板'  , path:'/about'},
                { name: '考試板2' ,  path:'/test' },
            ]
        }
    },
    methods:{
        handleMenuSelect(index){
            if(this.$route.path === index) return;
            this.$router.push(index);
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>

.el-menu{
    width:80%;
    margin:0 auto;
    border:none; /* 右邊一條白線? */
}
/* 更改被選擇的看板的背景顏色 */
.el-menu-item.is-active{
    background-color: rgba(255, 255, 255, 0.2) !important;
}
.el-menu-item{
    display:flex; 
    justify-content:space-between;
}
@media (max-width:768px){
	.el-aside,
    .el-menu{
        width:100%;
    }
}
</style>
  
  