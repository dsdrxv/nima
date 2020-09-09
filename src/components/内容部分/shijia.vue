<template>
    <div>
        {{crated}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            crated:''
        }
    },
    created() {
        this.getCurrenTime()
    },
    methods: {
        getCurrenTime(){
            setInterval(()=>{
                let y=new Date().getFullYear();
                let m=new Date().getMonth()+1;
                let d=new Date().getDate();
                let h=new Date().getHours();
                let mm=new Date().getHours();
                this.crated=y +"年" + m +"月" + d +"日" + " "+h+ ":"+mm+ "";
            },500)
        }
    },
}
</script>

<style>

</style>