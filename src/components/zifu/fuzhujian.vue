<template>
    <div class="app">
        <zizhujian @func="getMsgFormSon" :nad='msgFormSon'></zizhujian>
    </div>
</template>
<script>
import zizhujian from './zizhujian.vue'//子组件的路由
export default {
    data () {
        return {
            msgFormSon: "ddd"//父组件的值
        }
    },
    components:{
        zizhujian,
    },
    methods:{
            getMsgFormSon(data){
                this.msgFormSon = data
                console.log(this.msgFormSon)
            }
    }
}
</script>