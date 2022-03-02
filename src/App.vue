<template>

  <router-view/>
</template>
<script>
export default {
  mounted(){
      var user = JSON.parse(localStorage.getItem('user'))
      if(user){
        this.$store.state.user = user
      }
    },
    watch: {
      '$store.state.user': {
        deep: true,
        handler(new_val){
          if(new_val){
            localStorage.setItem('user', JSON.stringify(new_val))
          }else{
            localStorage.removeItem('user')
          }
        }
      }
    },
}
</script>
<style lang="scss">
    @import url(./assets/css/base.css);
    @import url(./assets/css/form.css);
</style>
