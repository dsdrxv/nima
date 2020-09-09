<template>
  <div>
  </div>
</template>

<script>
export default {
    data(){
        return{
			shu:[]
        }
    },
	created(){
		this.$axios({
			url:"http://47.111.250.151:8081/api/Question/GetQuestion",
			method:"get",
		}).then(res=>{
			console.log(res)
			this.shu=res.data.rows[0],
			console.log(this.shu)
		})``
	} 
}
</script>

<style scope>

</style>