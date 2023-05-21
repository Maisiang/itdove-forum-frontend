import { ElMessage } from 'element-plus'
import { ElNotification } from 'element-plus'
import { h } from 'vue'

export function successNotify(title, message){
    ElNotification.success({
        title: title,
        message: h('b', { style: 'color: green' }, message),
        duration: 1500,
        position: 'bottom-right',
    })
}

export function failNotify(title, message){
    ElNotification.error({
        title: title,
        message: h('b', { style: 'color: red' }, message),
        duration: 1500,
        position: 'bottom-right',
        dangerouslyUseHTMLString: true,
    })
}