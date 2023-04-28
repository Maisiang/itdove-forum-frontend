<template>
    <h2 style="margin-bottom:20px;">常見問題</h2>
    <el-collapse>
        <el-collapse-item   v-for="(item, index) in items"
        :key="index"
        :title="'▲ '+item.title"
        :name="index">
            {{item.content}}
        </el-collapse-item>
    </el-collapse>
</template>

<script>
export default {
  name: 'AboutView',
  data(){
    return{
        items: [
            { title: '如何發文呢？',  content: '以下將跟大家說明發文的操作及相關資訊！' },
            { title: '發文時選擇的身份有什麼差別嗎？',  content: '有的，卡友們能夠在 Dove 上以後端身份打造自我；若是前端身份則為匿名發文。' },
            { title: '發文後還能再更改身份嗎？',  content: 'Vue.js + Node.js打造的論壇！' }
        ]
    }
  }
}
</script>