import { ElMessage } from 'element-plus'
import { ElNotification } from 'element-plus'
import { h } from 'vue'

export function loginSuccess(){
    ElNotification.success({
        title: '提示',
        message: h('b', { style: 'color: green' }, '登入成功！'),
        duration: 1500,
        position: 'bottom-right',
    })
}
export function loginFail(){
    ElNotification.error({
        title: '提示',
        message: h('b', { style: 'color: red' }, '登入失敗！'),
        duration: 1500,
        position: 'bottom-right',
        dangerouslyUseHTMLString: true,
    })
}