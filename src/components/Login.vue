<template>
    <el-button type="primary" @click="loginFormVisible = true" class="login-btn">登入</el-button>
    <!-- 表單對話框 -->
    <el-dialog v-model="loginFormVisible" title="會員登入" :width="dialogWidth" center draggable>
        <!-- 表單 -->
        <el-form label-width="70px">
            <el-form-item label="用戶名">
                <el-input v-model="username" />
            </el-form-item>
            <el-form-item label="密碼">
                <el-input v-model="password" show-password />
            </el-form-item>
        </el-form>
        <!-- 表單按鈕 -->
        <template #footer>
            <el-button @click="loginFormVisible = false">取消</el-button>
            <el-button type="primary" @click="login">登入</el-button>
        </template>
    </el-dialog>
</template>
  
<script>
import { successNotify, failNotify } from '@/assets/scripts/notification';
import { isMobile } from '@/assets/scripts/common';
import { apiUserLogin } from '@/assets/scripts/api';
export default {
    name: 'Login',
    data(){
        return{
            username:'',
            password:'',
            loginFormVisible:false,
            dialogWidth:'30%'
        }
    },
    methods:{
        login(){
            apiUserLogin({
                username: this.username,
                password: this.password
            }).then((response)=>{
                if(response.data.isSuccess){
                    successNotify('登入提示', '登入成功！');
                    this.loginFormVisible=false;
                } else {
                    failNotify('登入提示', '登入失敗！帳號或密碼錯誤...');
                }
            })
        },
    },
    mounted(){
        // 更改手機用戶登入寬度
        if (isMobile()) {
            this.dialogWidth = '90%';
        }
    }
}
</script>

<style scoped>
.login-btn{
    width:80%;
}
</style>

  